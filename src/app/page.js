"use client";
import Link from 'next/link';
import { useEffect, useState, useMemo, useCallback, useRef } from "react";
// --- Firebase Imports ---
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';

// --- Main Component ---
export default function MusicPlayer() {
  // --- State Declarations ---
  const [allAlbums, setAllAlbums] = useState([]);
  const [albumSongs, setAlbumSongs] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [playlist, setPlaylist] = useState([]);

  // Player State
  const [activeYoutubeId, setActiveYoutubeId] = useState(null); // The ID of the video to be loaded/played
  const [currentSongInfo, setCurrentSongInfo] = useState(null);
  const [isPlayingFromPlaylist, setIsPlayingFromPlaylist] = useState(false);
  const [currentPlaylistIndex, setCurrentPlaylistIndex] = useState(-1);
  const [isPlayerPlaying, setIsPlayerPlaying] = useState(false); // True if YT player is actually playing

  // --- YouTube Player API State ---
  const [youtubeApiReady, setYoutubeApiReady] = useState(false);
  const playerRef = useRef(null); // To store the YT.Player instance

  // UI State
  const [isLoadingAlbums, setIsLoadingAlbums] = useState(false);
  const [isLoadingSongs, setIsLoadingSongs] = useState(false);
  const [error, setError] = useState(null);
  const [showPlaylistView, setShowPlaylistView] = useState(false);

  const getYoutubeId = useCallback((url) => {
    if (!url || typeof url !== 'string') return null;
    const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regExp);
    if (match && match[1]) return match[1];
    if (!url.includes("http") && url.length >= 11 && !url.includes(" ")) return url;
    return null;
  }, []);

  const getThumbnailUrl = useCallback((youtubeId, size = 'default') => {
    if (!youtubeId) return `/api/placeholder/${size === 'mqdefault' ? '320/180' : '120/90'}`;
    return `https://img.youtube.com/vi/${youtubeId}/${size}.jpg`;
  }, []);

  // --- Effects ---

  // Effect 1: Fetch Albums & Load Playlist on initial mount
  useEffect(() => {
    const fetchAlbums = async () => {
      setIsLoadingAlbums(true);
      setError(null);
      try {
        const albumsCollectionRef = collection(db, 'albums');
        const albumSnapshot = await getDocs(albumsCollectionRef);
        const albumList = albumSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        if (Array.isArray(albumList)) {
          albumList.sort((a, b) => (a.title || '').localeCompare(b.title || ''));
          setAllAlbums(albumList);
        } else {
          throw new Error("Invalid album data format.");
        }
      } catch (err) {
        console.error("Firebase fetch albums error:", err);
        setError(err.message || "Failed to load albums.");
        setAllAlbums([]);
      } finally {
        setIsLoadingAlbums(false);
      }
    };

    const loadPlaylist = () => {
      const savedPlaylist = localStorage.getItem("musicPlaylist");
      if (savedPlaylist) {
        try {
          const parsedPlaylist = JSON.parse(savedPlaylist);
          if (Array.isArray(parsedPlaylist)) {
            const validated = parsedPlaylist.filter(item =>
              item && typeof item === 'object' && item.youtubeLink && item.songTitle && getYoutubeId(item.youtubeLink)
            ).map(item => ({
              ...item,
              songTitle: item.songTitle || 'Unknown Title',
              bandName: item.bandName || 'Unknown Artist'
            }));
            setPlaylist(validated);
          } else { localStorage.removeItem("musicPlaylist"); }
        } catch (e) { localStorage.removeItem("musicPlaylist"); }
      }
    };

    fetchAlbums();
    loadPlaylist();
  }, [getYoutubeId]);

  // Effect 2: Fetch Songs when an album is selected
  useEffect(() => {
    const fetchSongsForAlbum = async () => {
      if (!selectedAlbum || !selectedAlbum.id) {
        setAlbumSongs([]);
        return;
      }
      setIsLoadingSongs(true);
      setError(null);
      try {
        const songsCollectionRef = collection(db, 'songs');
        const q = query(
          songsCollectionRef,
          where("albumId", "==", selectedAlbum.id),
          orderBy("trackNumber", "asc")
        );
        const songSnapshot = await getDocs(q);
        const songList = songSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        if (Array.isArray(songList)) {
          setAlbumSongs(songList)
        } else {
          throw new Error("Invalid song data format for album.");
        }
      } catch (err) {
        console.error(`Firebase fetch songs error for album ${selectedAlbum.id}:`, err);
        setError(err.message || `Failed to load songs for album "${selectedAlbum.title}".`);
        setAlbumSongs([]);
      } finally {
        setIsLoadingSongs(false);
      }
    };
    fetchSongsForAlbum();
  }, [selectedAlbum]);

  // Effect 3: Save personal playlist to localStorage
  useEffect(() => {
    if (Array.isArray(playlist)) {
      if (playlist.length > 0) {
        localStorage.setItem("musicPlaylist", JSON.stringify(playlist));
      } else {
        localStorage.removeItem("musicPlaylist");
      }
    }
  }, [playlist]);

  // Effect 4: Update current song info for the mini player
  useEffect(() => {
    if (!activeYoutubeId) {
      setCurrentSongInfo(null); return;
    }
    let foundSong = null;
    if (isPlayingFromPlaylist && currentPlaylistIndex >= 0 && currentPlaylistIndex < playlist.length) {
      const plSong = playlist[currentPlaylistIndex];
      if (plSong && getYoutubeId(plSong.youtubeLink) === activeYoutubeId) foundSong = plSong;
    }
    if (!foundSong && selectedAlbum && Array.isArray(albumSongs)) {
      foundSong = albumSongs.find(song => song && song.youtubeLink && getYoutubeId(song.youtubeLink) === activeYoutubeId);
    }
    // Fallback to searching entire playlist if not found yet (e.g., song played from album then added to playlist)
    if (!foundSong && Array.isArray(playlist)) {
      foundSong = playlist.find(song => song && song.youtubeLink && getYoutubeId(song.youtubeLink) === activeYoutubeId);
    }

    setCurrentSongInfo(foundSong ? {
      id: foundSong.id || null,
      songTitle: foundSong.songTitle || 'Unknown Title',
      bandName: foundSong.bandName || selectedAlbum?.album_name || 'Unknown Artist',
      youtubeLink: foundSong.youtubeLink,
      albumTitle: foundSong.albumTitle || selectedAlbum?.title || null,
      coverUrl: foundSong.coverUrl || selectedAlbum?.coverUrl || null,
    } : null);
  }, [activeYoutubeId, selectedAlbum, albumSongs, playlist, isPlayingFromPlaylist, currentPlaylistIndex, getYoutubeId]);


  useEffect(() => {
  let apiReady = false;

  if (typeof window !== 'undefined') {
    if (!window.YT || !window.YT.Player) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      if (firstScriptTag && firstScriptTag.parentNode) {
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      } else {
        document.head.appendChild(tag);
      }
      window.onYouTubeIframeAPIReady = () => {
        apiReady = true;
        setYoutubeApiReady(true);
      };
    } else {
      apiReady = true;
      setYoutubeApiReady(true);
    }
  }

  return () => {
    if (typeof window !== 'undefined' && window.onYouTubeIframeAPIReady && !apiReady) {
      // window.onYouTubeIframeAPIReady = null;
    }
  };
}, []);

  // --- Action Handlers ---

  const handleSelectAlbum = useCallback((album) => {
    setSelectedAlbum(album);
    setShowPlaylistView(false);
    setError(null);
    window.scrollTo(0, 0);
  }, []);

  const handleBackToAlbums = useCallback(() => {
    setSelectedAlbum(null);
    setAlbumSongs([]);
    setError(null);
    window.scrollTo(0, 0);
  }, []);

  const handlePlaySong = useCallback((songData, fromPlaylist = false, index = -1) => {
    if (!songData || !songData.youtubeLink) {
      setError("Missing song data or YouTube link."); return;
    }
    const youtubeId = getYoutubeId(songData.youtubeLink);
    if (youtubeId) {
      setActiveYoutubeId(youtubeId);
      setIsPlayingFromPlaylist(fromPlaylist);
      setCurrentPlaylistIndex(index); // <--- ตั้ง index นี้เสมอ
      setError(null);
    } else {
      setError(`Invalid YouTube link for "${songData.songTitle || 'this song'}".`);
    }
  }, [getYoutubeId]); // Dependencies ของ handlePlaySong ควรจะครบถ้วน

  const handleTogglePlayPause = useCallback(() => {
    if (playerRef.current && typeof playerRef.current.getPlayerState === 'function') {
      const playerState = playerRef.current.getPlayerState();
      if (playerState === window.YT.PlayerState.PLAYING) {
        playerRef.current.pauseVideo();
        setIsPlayerPlaying(false);
      } else if (playerState === window.YT.PlayerState.PAUSED || playerState === window.YT.PlayerState.CUED) {
        playerRef.current.playVideo();
        setIsPlayerPlaying(true);
      } else if (activeYoutubeId && (playerState === window.YT.PlayerState.UNSTARTED || playerState === window.YT.PlayerState.ENDED) ) {
        // If unstarted or ended, and we have an active ID, try to play it.
        // This might happen if the player was stopped or a song ended and user hits play.
        playerRef.current.loadVideoById(activeYoutubeId); // loadVideoById often autoplays due to playerVars
        playerRef.current.playVideo(); // Ensure it plays
        setIsPlayerPlaying(true);
      }
    }
  }, [activeYoutubeId]);

  const handleStopPlayback = useCallback(() => {
    if (playerRef.current && typeof playerRef.current.stopVideo === 'function') {
      playerRef.current.stopVideo();
    }
    // setActiveYoutubeId(null); // This would remove the mini-player. Let's keep it so user can resume.
    setIsPlayerPlaying(false);
    // Optionally:
    // setCurrentSongInfo(null);
    // setIsPlayingFromPlaylist(false);
    // setCurrentPlaylistIndex(-1);
  }, []);

  const handleClosePlayer = useCallback(() => { // New function to completely close player
    if (playerRef.current && typeof playerRef.current.stopVideo === 'function') {
      playerRef.current.stopVideo();
    }
    setActiveYoutubeId(null);
    setCurrentSongInfo(null);
    setIsPlayerPlaying(false);
    setIsPlayingFromPlaylist(false);
    setCurrentPlaylistIndex(-1);
  }, []);


  const handlePlayNext = useCallback(() => {
    if (!isPlayingFromPlaylist || playlist.length === 0) return;
    const nextIndex = (currentPlaylistIndex + 1) % playlist.length;
    if (playlist[nextIndex]) {
      handlePlaySong(playlist[nextIndex], true, nextIndex);
    }
  }, [isPlayingFromPlaylist, playlist, currentPlaylistIndex, handlePlaySong]);
// ... ภายใน Component MusicPlayer ...

const handlePlayNextInAlbum = useCallback(() => {
  if (isPlayingFromPlaylist || !selectedAlbum || !albumSongs || albumSongs.length <= 1) return;

  const currentPlayingId = activeYoutubeId;
  if (!currentPlayingId) return;

  const currentIndex = albumSongs.findIndex(
    (song) => song && getYoutubeId(song.youtubeLink) === currentPlayingId
  );

  if (currentIndex !== -1) {
    const nextIndex = (currentIndex + 1) % albumSongs.length; // วนกลับไปเพลงแรกถ้าถึงเพลงสุดท้าย
    // หรือถ้าไม่ต้องการวน:
    // const nextIndex = currentIndex + 1;
    // if (nextIndex < albumSongs.length) {
    //   handlePlaySong(albumSongs[nextIndex], false, nextIndex);
    // } else {
    //   // ถึงเพลงสุดท้ายแล้ว อาจจะ disable ปุ่ม next หรือทำอย่างอื่น
    //   console.log("Last song of album reached via Next button.");
    // }
    handlePlaySong(albumSongs[nextIndex], false, nextIndex);
  }
}, [activeYoutubeId, selectedAlbum, albumSongs, isPlayingFromPlaylist, handlePlaySong, getYoutubeId]);

const handlePlayPreviousInAlbum = useCallback(() => {
  if (isPlayingFromPlaylist || !selectedAlbum || !albumSongs || albumSongs.length <= 1) return;

  const currentPlayingId = activeYoutubeId;
  if (!currentPlayingId) return;

  const currentIndex = albumSongs.findIndex(
    (song) => song && getYoutubeId(song.youtubeLink) === currentPlayingId
  );

  if (currentIndex !== -1) {
    const prevIndex = (currentIndex - 1 + albumSongs.length) % albumSongs.length; // วนกลับไปเพลงสุดท้ายถ้าถึงเพลงแรก
    // หรือถ้าไม่ต้องการวน:
    // const prevIndex = currentIndex - 1;
    // if (prevIndex >= 0) {
    //   handlePlaySong(albumSongs[prevIndex], false, prevIndex);
    // } else {
    //   // ถึงเพลงแรกแล้ว อาจจะ disable ปุ่ม prev หรือทำอย่างอื่น
    //   console.log("First song of album reached via Previous button.");
    // }
    handlePlaySong(albumSongs[prevIndex], false, prevIndex);
  }
}, [activeYoutubeId, selectedAlbum, albumSongs, isPlayingFromPlaylist, handlePlaySong, getYoutubeId]);
  const handlePlayPrevious = useCallback(() => {
    if (!isPlayingFromPlaylist || playlist.length === 0) return;
    const prevIndex = (currentPlaylistIndex - 1 + playlist.length) % playlist.length;
    if (playlist[prevIndex]) {
      handlePlaySong(playlist[prevIndex], true, prevIndex);
    }
  }, [isPlayingFromPlaylist, playlist, currentPlaylistIndex, handlePlaySong]);

  // --- YouTube Player Effect (Creation and Control) ---
  useEffect(() => {
    // Player Event Handlers (defined inside so they have access to current state/props)
    const onPlayerReadyInternal = (event) => {
      // console.log("Player is ready. Autoplay is ON in playerVars.");
      // PlayerVars autoplay: 1 should handle this.
      // If a video ID was set before player was ready, play it.
      if (activeYoutubeId) {
          event.target.playVideo(); // Ensure playback if activeYoutubeId already set
      }
    };

    const onPlayerErrorInternal = (event) => {
      console.error("YouTube Player Error:", event.data, "for videoId:", playerRef.current?.getVideoData?.().video_id || activeYoutubeId);
      setError(`Playback error (Code: ${event.data}). Trying next...`);
      setIsPlayerPlaying(false);

      // Automatically try to play the next song
      if (isPlayingFromPlaylist) {
          if (playlist.length > 1) handlePlayNext();
          else handleClosePlayer(); // Stop if it was the only song or last
      } else if (selectedAlbum && albumSongs.length > 0) {
          const currentActualId = playerRef.current?.getVideoData?.().video_id || activeYoutubeId;
          const currentIndex = albumSongs.findIndex(s => getYoutubeId(s.youtubeLink) === currentActualId);
          if (currentIndex !== -1 && currentIndex < albumSongs.length - 1) {
              handlePlaySong(albumSongs[currentIndex + 1], false);
          } else {
              handleClosePlayer();
          }
      } else {
          handleClosePlayer();
      }
    };

    const onPlayerStateChangeInternal = (event) => {
      if (event.data === window.YT.PlayerState.PLAYING) {
        setIsPlayerPlaying(true);
        setError(null); // Clear previous errors on successful play
      } else if (event.data === window.YT.PlayerState.PAUSED) {
        setIsPlayerPlaying(false);
      } else if (event.data === window.YT.PlayerState.ENDED) {
        setIsPlayerPlaying(false);
        console.log("Song ended. Playing next.");
        if (isPlayingFromPlaylist) {
          handlePlayNext();
        } else if (selectedAlbum && albumSongs.length > 0) {
          const currentActualId = playerRef.current?.getVideoData?.().video_id || activeYoutubeId;
          const currentIndex = albumSongs.findIndex(s => getYoutubeId(s.youtubeLink) === currentActualId);
          const endedSongId = playerRef.current?.getVideoData?.().video_id || activeYoutubeId;
          if (!endedSongId) {
            handleClosePlayer(); // ไม่มี ID ให้หยุด
            return;
          }

          // 2. หา index ของเพลงที่เพิ่งจบใน albumSongs
          const currentIndexInAlbum = albumSongs.findIndex(
            (song) => song && getYoutubeId(song.youtubeLink) === endedSongId
          );

          if (currentIndexInAlbum !== -1 && currentIndexInAlbum < albumSongs.length - 1) {
            // 3. ถ้าเจอและไม่ใช่เพลงสุดท้าย ให้เล่นเพลงถัดไปในอัลบั้ม
            const nextSongInAlbum = albumSongs[currentIndexInAlbum + 1];
            // ส่ง index ของเพลงถัดไปในอัลบั้มไปด้วย
            handlePlaySong(nextSongInAlbum, false, currentIndexInAlbum + 1);
          } else {
            // 4. ถ้าเป็นเพลงสุดท้ายของอัลบั้ม หรือหาไม่เจอ
            console.log("Last song of album ended or current song not found in albumSongs.");
            // ตัวเลือก:
            // A. หยุดเล่นและปิด Player
            handleClosePlayer();
            // B. หยุดเล่นแต่ยังแสดง Mini Player (ถ้าต้องการให้ผู้ใช้กดเล่นเพลงอื่นต่อเอง)
            // handleStopPlayback(); // หรือแค่ setIsPlayerPlaying(false);
            // C. วนกลับไปเล่นเพลงแรกของอัลบั้ม (ถ้าต้องการ)
            // if (albumSongs.length > 0) {
            //   handlePlaySong(albumSongs[0], false, 0);
            // } else {
            //   handleClosePlayer();
            // }
          }
        } else {
          // กรณีอื่นๆ ที่ไม่ได้มาจากเพลย์ลิสต์หรืออัลบั้มที่ชัดเจน
          handleClosePlayer();
        }
      } else if (event.data === window.YT.PlayerState.UNSTARTED) {
          // This can happen if a video is loaded but not auto-played.
          // If we intended it to play (e.g. activeYoutubeId is set), we can try to play it.
          // However, autoplay:1 in playerVars usually handles this.
      } else if (event.data === window.YT.PlayerState.BUFFERING) {
          // Potentially show a buffering indicator
      } else if (event.data === window.YT.PlayerState.CUED) {
          // Video is cued and ready to play.
          // If we want it to play now (e.g. after user action or auto-next)
          // playerRef.current.playVideo();
      }
    };

    // Initialize Player or Load New Video
    if (youtubeApiReady && document.getElementById('youtube-player-container')) {
      if (!playerRef.current) { // If player doesn't exist, create it
        if (window.YT && window.YT.Player) {
          playerRef.current = new window.YT.Player('youtube-player-container', {
            height: '0',
            width: '0',
            videoId: activeYoutubeId || '', // Initial video ID (can be empty)
            playerVars: {
              'autoplay': 1, 'controls': 0, 'showinfo': 0, 'rel': 0,
              'modestbranding': 1, 'iv_load_policy': 3, 'playsinline': 1
            },
            events: {
              'onReady': onPlayerReadyInternal,
              'onStateChange': onPlayerStateChangeInternal,
              'onError': onPlayerErrorInternal
            }
          });
        } else {
            console.warn("YT.Player constructor not found, API ready flag might be premature.");
        }
      } else { // Player exists, so if activeYoutubeId changed, load the new video
        const currentVideoUrl = playerRef.current.getVideoUrl();
        const currentVideoId = currentVideoUrl ? getYoutubeId(currentVideoUrl) : null;

        if (activeYoutubeId && activeYoutubeId !== currentVideoId) {
          playerRef.current.loadVideoById(activeYoutubeId);
          // Autoplay is handled by playerVars, but playVideo() can be called in onPlayerStateChange CUED or onReady if needed.
          setIsPlayerPlaying(true); // Assume it will play
        } else if (!activeYoutubeId && currentVideoId) { // If activeYoutubeId is cleared, stop video
          playerRef.current.stopVideo();
          setIsPlayerPlaying(false);
        }
      }
    }

    // Cleanup on component unmount
    return () => {
      // Don't destroy the player on every re-render, only on unmount.
      // If we want to destroy and recreate the player (e.g. if some fundamental config changes),
      // this cleanup would run before the effect re-runs.
      // For now, we assume the player instance is persistent for the component's lifecycle.
      // To destroy on unmount:
      // if (playerRef.current && typeof playerRef.current.destroy === 'function') {
      //   playerRef.current.destroy();
      //   playerRef.current = null;
      // }
    };
  }, [
      youtubeApiReady,
      activeYoutubeId, // Re-run if the target video ID changes
      // Callbacks that are stable but listed for completeness if player logic depends on their latest versions
      isPlayingFromPlaylist, playlist, albumSongs, selectedAlbum,
      handlePlayNext, handlePlaySong, handleClosePlayer, getYoutubeId, setError
    ]);


  // --- Playlist Handlers ---
  const handleAddToPlaylist = useCallback((songToAdd) => {
    if (!songToAdd || typeof songToAdd !== 'object' || !songToAdd.youtubeLink || !songToAdd.songTitle) {
      // Consider using a more user-friendly notification system than alert
      alert("Cannot add invalid song data to playlist."); return;
    }
    const songYoutubeId = getYoutubeId(songToAdd.youtubeLink);
    if (!songYoutubeId) { alert("Invalid YouTube link, cannot add."); return; }

    const alreadyExists = playlist.some(item => item && item.youtubeLink && getYoutubeId(item.youtubeLink) === songYoutubeId);
    const title = songToAdd.songTitle || 'Unknown Title';
    if (!alreadyExists) {
      const entry = {
        id: songToAdd.id || `local-${Date.now()}-${Math.random().toString(36).substring(7)}`,
        songTitle: title,
        bandName: songToAdd.bandName || selectedAlbum?.album_name || 'Unknown Artist',
        youtubeLink: songToAdd.youtubeLink,
        albumTitle: songToAdd.albumTitle || selectedAlbum?.title || null,
        coverUrl: songToAdd.coverUrl || selectedAlbum?.coverUrl || getThumbnailUrl(songYoutubeId, 'mqdefault'),
      };
      setPlaylist(prev => [...prev, entry]);
      // alert(`Added "${title}" to playlist.`); // Consider toast notification
    } else {
      alert(`"${title}" is already in the playlist.`);
    }
  }, [playlist, selectedAlbum, getYoutubeId, getThumbnailUrl]);

  const handleRemoveFromPlaylist = useCallback((index) => {
    if (index < 0 || index >= playlist.length) return;
    const songToRemove = playlist[index];
    const title = songToRemove?.songTitle || 'This song';
    const newPlaylist = playlist.filter((_, i) => i !== index);
    setPlaylist(newPlaylist);
    // alert(`Removed "${title}" from playlist.`); // Consider toast notification

    // If the removed song was playing or affected the current playing index
    if (isPlayingFromPlaylist) {
      const removedSongYoutubeId = getYoutubeId(songToRemove.youtubeLink);
      if (activeYoutubeId === removedSongYoutubeId && currentPlaylistIndex === index) { // If the exact playing song is removed
        if (newPlaylist.length > 0) {
          // Play the song that takes its place, or the first if it was the last
          const nextPlayIndex = Math.min(index, newPlaylist.length - 1);
          handlePlaySong(newPlaylist[nextPlayIndex], true, nextPlayIndex);
        } else {
          handleClosePlayer(); // Playlist is now empty
        }
      } else if (index < currentPlaylistIndex) {
        // If a song before the current one was removed, adjust the index
        setCurrentPlaylistIndex(prev => prev - 1);
      }
      // If playlist becomes empty and something was playing from it, stop.
      else if (newPlaylist.length === 0) {
        handleClosePlayer();
      }
    }
  }, [playlist, isPlayingFromPlaylist, currentPlaylistIndex, activeYoutubeId, handlePlaySong, handleClosePlayer, getYoutubeId]);

  const handleClearPlaylist = useCallback(() => {
    if (playlist.length > 0 && confirm("Are you sure you want to clear the entire playlist? This cannot be undone.")) {
      setPlaylist([]);
      if (isPlayingFromPlaylist) handleClosePlayer();
      // alert("Playlist cleared.");
    }
  }, [playlist, isPlayingFromPlaylist, handleClosePlayer]);

  const handleShufflePlay = useCallback(() => {
    if (playlist.length === 0) return;
    if (playlist.length === 1) {
        handlePlaySong(playlist[0], true, 0); return;
    }
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * playlist.length);
    } while (playlist.length > 1 && activeYoutubeId && getYoutubeId(playlist[randomIndex].youtubeLink) === activeYoutubeId);
    // The above condition tries to pick a DIFFERENT song if one is already playing from the playlist.
    // If it's the only song or no song is playing, it will pick it.
    handlePlaySong(playlist[randomIndex], true, randomIndex);
  }, [playlist, activeYoutubeId, handlePlaySong, getYoutubeId]);


  // --- Render Logic ---
  const renderAlbumList = () => (
    <div>
      <h2 style={styles.viewTitle}>Discover Albums</h2>
      {isLoadingAlbums && <div style={styles.loadingBox}>Loading albums... <span style={styles.dotFlashing}></span></div>}
      {!isLoadingAlbums && allAlbums.length === 0 && !error && <p style={styles.infoText}>No albums found. Add some in the admin section!</p>}
      {!isLoadingAlbums && error && <p style={styles.infoText}>Could not load albums: {error}</p>}
      <div style={styles.albumGrid}>
        {allAlbums.map((album) => (
          <div key={album.id} style={styles.albumCard} className="album-card-hover" onClick={() => handleSelectAlbum(album)} title={`View album: ${album.title}`}>
            <img
              src={album.coverUrl || getThumbnailUrl(getYoutubeId(album.sampleTrackLink), 'mqdefault') || '/api/placeholder/200/200'}
              alt={album.title || 'Album cover'}
              style={styles.albumCover}
              loading="lazy"
              onError={(e) => e.target.src = '/api/placeholder/200/200'}
            />
            <div style={styles.albumInfo}>
              <h3 style={styles.albumTitle} title={album.title}>{album.title || 'Untitled Album'}</h3>
              <p style={styles.albumArtist} title={album.album_name}>{album.album_name || 'Unknown Artist'}</p>
              {album.releaseYear && <p style={styles.albumYear}>{album.releaseYear}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAlbumSongs = () => (
    <div>
      <button onClick={handleBackToAlbums} style={styles.backButton} className="base-button-class">
        ← Back to Albums
      </button>
      <div style={styles.albumDetailHeader}>
        <img
          src={selectedAlbum.coverUrl || '/api/placeholder/200/200'}
          alt={selectedAlbum.title || ''}
          style={styles.albumDetailCover}
          onError={(e) => e.target.src = '/api/placeholder/200/200'}
        />
        <div style={styles.albumDetailInfo}>
          <p style={styles.albumDetailType}>ALBUM</p>
          <h2 style={styles.albumDetailTitle} title={selectedAlbum.title}>{selectedAlbum.title}</h2>
          <p style={styles.albumDetailArtist}>
            {selectedAlbum.album_name || 'Unknown Artist'}
            {selectedAlbum.releaseYear && ` • ${selectedAlbum.releaseYear}`}
            {albumSongs.length > 0 && ` • ${albumSongs.length} song${albumSongs.length > 1 ? 's' : ''}`}
          </p>
          <button
            onClick={() => albumSongs.length > 0 && handlePlaySong(albumSongs[0], false, 0)}
             // Start with index 0 for album play
            style={styles.playAlbumButton}
            className="base-button-class"
            disabled={albumSongs.length === 0 || isLoadingSongs}
            title={albumSongs.length > 0 ? `Play album: ${selectedAlbum.title}` : "No songs available to play"}
          >
            ▶️ Play Album
          </button>
        </div>
      </div>

      <h3 style={styles.viewTitle}>Tracklist</h3>
      {isLoadingSongs && <div style={styles.loadingBox}>Loading songs... <span style={styles.dotFlashing}></span></div>}
      {!isLoadingSongs && albumSongs.length === 0 && !error && <p style={styles.infoText}>No songs found in this album.</p>}
      {!isLoadingSongs && error && <p style={styles.infoText}>Could not load songs: {error}</p>}

      <div style={styles.songList}>
        {albumSongs.map((song, index) => {
          if (!song || !song.youtubeLink || !song.songTitle) return null;
          const youtubeId = getYoutubeId(song.youtubeLink);
          const isCurrentlyPlayingSong = activeYoutubeId === youtubeId;
          const isActive = isCurrentlyPlayingSong && !isPlayingFromPlaylist;


          return (
            <div
              key={song.id || `albumsong-${index}`}
              style={{ ...styles.songItem, ...(isActive ? styles.songItemActive : {}) }}
              className="song-item-hover"
              onClick={() => handlePlaySong(song, false, index)} // Pass index for album context too
              title={`Play ${song.songTitle}`}
            >
              <div style={styles.trackNumberContainer}>
                 <span style={styles.trackNumber} className="track-number-display">{song.trackNumber || index + 1}</span>
                 <span className="play-icon" style={styles.playIcon}>
                    {isCurrentlyPlayingSong && isPlayerPlaying ? '❚❚' : '▶'}
                 </span>
              </div>
              <div style={styles.songContent} >
                <div style={styles.songInfo}>
                  <h4 style={{...styles.songTitle, color: isActive ? styles.songItemActive.color : styles.songTitle.color}}>{song.songTitle}</h4>
                </div>
              </div>
              <div style={styles.songActions}>
                <button
                   onClick={(e) => { e.stopPropagation(); handleAddToPlaylist({ ...song, albumTitle: selectedAlbum.title, coverUrl: selectedAlbum.coverUrl }); }}
                   style={styles.actionIcon}
                   title="Add to Playlist"
                   className="add-button-hover action-icon-button"
                >
                    +
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderPersonalPlaylist = () => (
    <div style={styles.playlistContainer}>
      <div style={styles.playlistHeader}>
        <h2 style={styles.viewTitle}>My Playlist</h2>
        <div style={styles.playlistHeaderActions}>
          {playlist.length > 0 && (
            <>
              <button onClick={handleShufflePlay} style={styles.playlistActionButton} className="base-button-class" title="Shuffle Play Playlist">
                <span role="img" aria-label="Shuffle">🔀</span> Shuffle
              </button>
              <button onClick={handleClearPlaylist} style={styles.playlistActionButton} className="base-button-class" title="Clear Entire Playlist">
                <span role="img" aria-label="Trash Can">🗑️</span> Clear All
              </button>
            </>
          )}
          <button onClick={() => setShowPlaylistView(false)} style={styles.playlistCloseButton} className="action-icon-button" title="Close Playlist View">✕</button>
        </div>
      </div>
{playlist.length === 0 ? (
  <div style={styles.emptyPlaylistMessage}>
    <span style={{fontSize: '2em', marginBottom: '10px'}}>🎧</span>
    <p>Your playlist is feeling lonely!</p>
    <p>{"Find albums you like and click the '+' button on songs to add them here."}</p>
  </div>
      ) : (
        <div style={styles.songList}>
          {playlist.map((song, index) => {
            if (!song || !song.youtubeLink || !song.songTitle) return null;
            const youtubeId = getYoutubeId(song.youtubeLink);
            const isCurrentlyPlayingSong = activeYoutubeId === youtubeId;
            const isActive = isCurrentlyPlayingSong && isPlayingFromPlaylist && currentPlaylistIndex === index;

            return (
              <div
                key={song.id || `playlist-${index}-${youtubeId}`}
                style={{ ...styles.songItem, ...(isActive ? styles.songItemActive : {}) }}
                className="song-item-hover"
                onClick={() => handlePlaySong(song, true, index)}
                title={`Play ${song.songTitle}`}
              >
                <div style={styles.songContent}>
                  <img
                    src={song.coverUrl || getThumbnailUrl(youtubeId, 'default') || '/api/placeholder/50/50'}
                    alt=""
                    style={styles.playlistThumbnail}
                    loading="lazy"
                    onError={(e) => e.target.src = '/api/placeholder/50/50'}
                  />
                   <span className="play-icon-playlist" style={{...styles.playIcon, display: 'block', marginRight: '10px', marginLeft: '5px', fontSize: '1.3em', color: isActive && isPlayerPlaying ? '#1abc9c' : (isActive ? '#34495e' : '#bdc3c7')}}>
                      {isActive && isPlayerPlaying ? '❚❚' : '▶'}
                   </span>
                  <div style={styles.songInfo}>
                    <h4 style={{...styles.songTitle, color: isActive ? styles.songItemActive.color : styles.songTitle.color}}>{song.songTitle}</h4>
                    <p style={styles.songArtist}>{song.bandName || 'Unknown Artist'}</p>
                    {song.albumTitle && <p style={styles.songAlbum} title={`From album: ${song.albumTitle}`}>{song.albumTitle}</p>}
                  </div>
                </div>
                <div style={styles.songActions}>
                  <button onClick={(e) => { e.stopPropagation(); handleRemoveFromPlaylist(index);}} style={styles.actionIcon} title="Remove from Playlist" className="remove-button-hover action-icon-button">×</button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );

  // --- Main Return ---
  return (
    <div style={{ ...styles.appContainer, paddingBottom: activeYoutubeId && currentSongInfo ? styles.miniPlayer.height : '20px' }}>
      <div id="youtube-player-container" style={styles.hiddenIframe}></div>

      <div style={styles.mainContent}>
        <header style={styles.header}>
          <h1 style={styles.appTitle}>My Favorite Songs</h1>
          <div style={styles.headerButtons}>
            <button
              onClick={() => { setShowPlaylistView(!showPlaylistView); if (!showPlaylistView) setSelectedAlbum(null); }}
              style={styles.playlistButton}
              className="base-button-class"
              title={showPlaylistView ? "Hide Playlist" : "Show My Playlist"}
              aria-pressed={showPlaylistView}
            >
              <span role="img" aria-label="playlist icon">🎼</span> {showPlaylistView ? "Albums" : "My Playlist"} {playlist.length > 0 && !showPlaylistView && `(${playlist.length})`}
            </button>
            <Link href="/login" style={styles.adminButton} className="base-button-class">
              <span role="img" aria-label="lock icon">🔐</span> Admin
            </Link>
          </div>
        </header>

        {error && (<div style={styles.errorBox}>
            <p>
                <span role="img" aria-label="warning sign" style={{ marginRight: '8px' }}>⚠️</span>
                <strong>Error:</strong> {error}
            </p>
            <button onClick={() => setError(null)} style={styles.errorDismiss} title="Dismiss Error">✕</button>
        </div>)}

        <main>
            {showPlaylistView ? renderPersonalPlaylist() : (
              selectedAlbum ? renderAlbumSongs() : renderAlbumList()
            )}
        </main>
      </div>

     

      {activeYoutubeId && currentSongInfo && (
  <div style={styles.miniPlayer} role="region" aria-label="Music Player Controls">
    <img
      src={currentSongInfo.coverUrl || getThumbnailUrl(activeYoutubeId, 'default') || '/api/placeholder/60/60'}
      alt={`${currentSongInfo.songTitle} cover`}
      style={styles.miniPlayerThumbnail}
      onError={(e) => e.target.src = '/api/placeholder/60/60'}
    />
    <div style={styles.miniPlayerInfo}>
      <div style={styles.miniPlayerTitle} title={currentSongInfo.songTitle}>{currentSongInfo.songTitle}</div>
      <div style={styles.miniPlayerArtist} title={currentSongInfo.bandName}>{currentSongInfo.bandName}</div>
    </div>
    <div style={styles.miniPlayerControls}>
      {/* Previous Button */}
      {(isPlayingFromPlaylist && playlist.length > 1) || (!isPlayingFromPlaylist && selectedAlbum && albumSongs && albumSongs.length > 1) ? (
        <button
          onClick={isPlayingFromPlaylist ? handlePlayPrevious : handlePlayPreviousInAlbum}
          style={styles.miniPlayerButton}
          className="mini-player-button-hover"
          title="Previous"
        >
          <span role="img" aria-label="Previous Track">⏮️</span>
        </button>
      ) : (
        <button style={{...styles.miniPlayerButton, opacity: 0.5, cursor: 'not-allowed'}} title="Previous (Unavailable)" disabled>⏮️</button>
      )}

      {/* Play/Pause Button */}
      <button onClick={handleTogglePlayPause} style={styles.miniPlayerButton} className="mini-player-button-hover" title={isPlayerPlaying ? "Pause" : "Play"}>
        <span role="img" aria-label={isPlayerPlaying ? "Pause" : "Play"}>{isPlayerPlaying ? '❚❚' : '▶️'}</span>
      </button>

      {/* Next Button */}
      {(isPlayingFromPlaylist && playlist.length > 1) || (!isPlayingFromPlaylist && selectedAlbum && albumSongs && albumSongs.length > 1) ? (
        <button
          onClick={isPlayingFromPlaylist ? handlePlayNext : handlePlayNextInAlbum}
          style={styles.miniPlayerButton}
          className="mini-player-button-hover"
          title="Next"
        >
          <span role="img" aria-label="Next Track">⏭️</span>
        </button>
      ) : (
        <button style={{...styles.miniPlayerButton, opacity: 0.5, cursor: 'not-allowed'}} title="Next (Unavailable)" disabled>⏭️</button>
      )}

      {/* Close Button */}
      <button onClick={handleClosePlayer} style={{ ...styles.miniPlayerButton, ...styles.miniPlayerStopButton }} className="mini-player-button-hover" title="Stop and Close Player">
        <span role="img" aria-label="Stop">⏹️</span>
      </button>
    </div>
  </div>
)}

      {/* Global styles using style jsx */}
      <style jsx global>{`
        .album-card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
        }
        .song-item-hover:hover {
          background-color: #f8f9fa; /* Light grey hover for song items */
        }
        .song-item-hover:hover .track-number-display {
          display: none; /* Hide track number on hover */
        }
        .song-item-hover:hover .play-icon {
          display: inline-block !important; /* Show play icon on hover, use important if needed */
        }
        .action-icon-button:hover { /* General hover for action icons like add/remove/close playlist */
           filter: brightness(0.8);
        }
        .add-button-hover:hover {
           color: #27ae60 !important; 
           background-color: rgba(39, 174, 96, 0.1) !important;
        }
        .remove-button-hover:hover {
           color: #e74c3c !important; 
           background-color: rgba(231, 76, 60, 0.1) !important;
        }
        .base-button-class:hover:not(:disabled) {
            filter: brightness(1.1);
            transform: translateY(-1px);
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .base-button-class:active:not(:disabled) {
            transform: translateY(0px);
            filter: brightness(0.95);
        }
        .mini-player-button-hover:hover:not(:disabled) {
            background-color: rgba(0, 0, 0, 0.06);
        }
        .mini-player-button-hover:disabled {
            opacity: 0.5;
            cursor: default;
            background-color: transparent;
        }

        @keyframes dotFlashing {
          0% { opacity: 0.2; }
          50% { opacity: 1; }
          100% { opacity: 0.2; }
        }
        .dotFlashing {
          position: relative;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #7f8c8d;
          color: #7f8c8d;
          animation: dotFlashing 1.4s infinite linear;
          animation-delay: 0.35s;
          margin-left: 5px; /* Added margin */
        }
        .dotFlashing::before, .dotFlashing::after {
          content: '';
          display: inline-block;
          position: absolute;
          top: 0;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #7f8c8d;
          color: #7f8c8d;
          animation: dotFlashing 1.4s infinite linear;
        }
        .dotFlashing::before {
          left: -10px;
          animation-delay: 0s;
        }
        .dotFlashing::after {
          left: 10px;
          animation-delay: 0.7s;
        }
      `}</style>
    </div>
  );
}

// --- Enhanced Styles (Mostly Unchanged, with minor additions for hover classes) ---
const styles = {
  appContainer: {
    fontFamily: "'Nunito Sans', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
    fontWeight: 400,
    backgroundColor: '#f4f7f9',
    color: '#333',
    minHeight: '100vh',
    position: 'relative',
    transition: 'padding-bottom 0.3s ease',
  },
  mainContent: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '25px 20px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
    paddingBottom: '20px',
    borderBottom: '1px solid #e1e5e8',
  },
  appTitle: {
    fontSize: '2rem',
    fontWeight: 700,
    margin: 0,
    color: '#2c3e50',
    letterSpacing: '-0.5px',
  },
  headerButtons: {
    display: 'flex',
    gap: '15px',
  },
  baseButton: { 
      padding: '10px 18px', border: 'none', borderRadius: '6px', 
      cursor: 'pointer', fontSize: '0.95em', fontWeight: 600, 
      transition: 'background-color 0.2s ease, transform 0.1s ease, box-shadow 0.2s ease',
      display: 'inline-flex', alignItems: 'center', gap: '6px', 
      textDecoration: 'none', lineHeight: '1.2',
      // Hover/active/disabled will be handled by .base-button-class in <style jsx global>
  },
  adminButton: {
      // ...styles.baseButton, // Spread baseButton if needed, or rely on className
      backgroundColor: '#34495e', color: 'white',
      padding: '10px 18px', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '0.95em', fontWeight: 600, transition: 'background-color 0.2s ease, transform 0.1s ease, box-shadow 0.2s ease', display: 'inline-flex', alignItems: 'center', gap: '6px', textDecoration: 'none', lineHeight: '1.2',
  },
  playlistButton: {
      // ...styles.baseButton,
      backgroundColor: '#1abc9c', color: 'white',
      padding: '10px 18px', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '0.95em', fontWeight: 600, transition: 'background-color 0.2s ease, transform 0.1s ease, box-shadow 0.2s ease', display: 'inline-flex', alignItems: 'center', gap: '6px', textDecoration: 'none', lineHeight: '1.2',

  },
  backButton: {
      // ...styles.baseButton,
      backgroundColor: '#e9ecef', color: '#495057', marginBottom: '20px',
      padding: '8px 14px', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '0.9em', fontWeight: 600, transition: 'background-color 0.2s ease, transform 0.1s ease, box-shadow 0.2s ease', display: 'inline-flex', alignItems: 'center', gap: '6px', textDecoration: 'none', lineHeight: '1.2',
  },
  playAlbumButton: {
     // ...styles.baseButton,
      backgroundColor: '#2ecc71', color: 'white', marginTop: '15px',
      textTransform: 'uppercase', letterSpacing: '0.5px',
      padding: '12px 22px', border: 'none', borderRadius: '50px', cursor: 'pointer', fontSize: '1em', fontWeight: 700, transition: 'background-color 0.2s ease, transform 0.1s ease, box-shadow 0.2s ease', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none', lineHeight: '1.2',

  },
   actionIcon: { 
      background: 'none', border: 'none', color: '#7f8c8d', 
      fontSize: '1.4em', cursor: 'pointer', padding: '5px 8px',
      borderRadius: '50%', lineHeight: '1',
      transition: 'color 0.2s ease, background-color 0.2s ease',
  },
  errorBox: {
    backgroundColor: '#fdeded', color: '#b71c1c', border: '1px solid #fcc',
    borderLeft: '4px solid #e57373', padding: '15px 20px', margin: '20px 0',
    borderRadius: '6px', display: 'flex', justifyContent: 'space-between',
    alignItems: 'center', fontSize: '0.95em',
  },
  errorDismiss: {
    background: 'none', border: 'none', fontSize: '1.3em', fontWeight: 'bold',
    color: '#e57373', cursor: 'pointer', padding: '0 5px',
  },
  loadingBox: {
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    padding: '50px 20px', color: '#7f8c8d', fontSize: '1.1em', textAlign: 'center',
  },
  infoText: {
    textAlign: 'center', color: '#7f8c8d', padding: '40px 20px', fontSize: '1.1em',
  },
  viewTitle: {
    fontSize: '1.8em', fontWeight: 700, margin: '35px 0 20px 0',
    color: '#34495e', paddingBottom: '8px', borderBottom: '2px solid #e1e5e8',
    position: 'relative', paddingLeft: '15px', borderLeft: '5px solid #1abc9c',
  },
  albumGrid: {
    display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
    gap: '25px',
  },
  albumCard: {
    backgroundColor: '#ffffff', borderRadius: '8px', overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
    cursor: 'pointer', display: 'flex', flexDirection: 'column',
  },
  albumCover: {
    width: '100%', aspectRatio: '1 / 1', objectFit: 'cover',
    display: 'block', borderBottom: '1px solid #eee',
  },
  albumInfo: {
    padding: '15px', flexGrow: 1, display: 'flex', flexDirection: 'column',
  },
  albumTitle: {
    fontSize: '1.05em', fontWeight: 600, margin: '0 0 5px 0', color: '#34495e',
    whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
  },
  albumArtist: {
    fontSize: '0.9em', color: '#7f8c8d', margin: '0 0 8px 0',
    whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
  },
  albumYear: {
    fontSize: '0.8em', color: '#95a5a6', margin: '0', marginTop: 'auto',
  },
  albumDetailHeader: {
    display: 'flex', alignItems: 'flex-end', gap: '25px', marginBottom: '30px',
    padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: '8px',
  },
  albumDetailCover: {
    width: '180px', height: '180px', objectFit: 'cover',
    borderRadius: '6px', boxShadow: '0 4px 10px rgba(0,0,0,0.15)', flexShrink: 0,
  },
  albumDetailInfo: {
     display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flexGrow: 1,
  },
  albumDetailType: {
    fontSize: '0.75em', fontWeight: 700, color: '#7f8c8d',
    margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '1px',
  },
  albumDetailTitle: {
    margin: '0 0 8px 0', fontSize: '2.2em', fontWeight: 700,
    color: '#2c3e50', lineHeight: 1.2,
  },
  albumDetailArtist: {
    margin: '0 0 15px 0', color: '#555', fontSize: '1.1em',
  },
  songList: {
    marginTop: '20px', border: '1px solid #e1e5e8', borderRadius: '6px',
    overflow: 'hidden', backgroundColor: '#fff',
  },
  songItem: {
    display: 'flex', alignItems: 'center', padding: '10px 15px',
    borderBottom: '1px solid #f0f2f5', transition: 'background-color 0.2s ease',
    cursor: 'pointer', // Make the whole item clickable
  },
  songItemActive: {
    backgroundColor: '#e8f5e9', color: '#1b5e20',
  },
  trackNumberContainer: {
     width: '40px', flexShrink: 0, textAlign: 'center',
     marginRight: '10px', display: 'flex',
     alignItems: 'center', justifyContent: 'center',
  },
  trackNumber: { // Class .track-number-display is used in JSX
    fontSize: '0.9em', color: '#95a5a6', display: 'inline-block', // Default show
  },
  playIcon: { // Will be controlled by .song-item-hover:hover .play-icon via CSS
    fontSize: '1.1em', color: '#1abc9c', display: 'none', // Default hide
  },
  songContent: {
    flexGrow: 1, display: 'flex', alignItems: 'center',
    gap: '15px', overflow: 'hidden',
  },
  playlistThumbnail: {
    width: '45px', height: '45px', objectFit: 'cover',
    borderRadius: '4px', flexShrink: 0,
  },
  songInfo: {
    flexGrow: 1, overflow: 'hidden',
  },
  songTitle: {
    fontSize: '1em', fontWeight: 600, margin: '0 0 2px 0',
    color: '#34495e', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
  },
  songArtist: {
    fontSize: '0.85em', color: '#7f8c8d', margin: 0,
    whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
  },
   songAlbum: {
    fontSize: '0.8em', color: '#95a5a6', margin: '2px 0 0 0',
    whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
  },
  songActions: {
    marginLeft: '15px', flexShrink: 0, display: 'flex', alignItems: 'center',
  },
  playlistContainer: {
    backgroundColor: '#ffffff', borderRadius: '8px', padding: '20px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.07)',
  },
  playlistHeader: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    marginBottom: '10px',
  },
  playlistHeaderActions: {
      display: 'flex', gap: '10px',
  },
  playlistActionButton: {
      // ...styles.baseButton, // Rely on className
      backgroundColor: '#ecf0f1', color: '#34495e',
      padding: '8px 12px', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '0.9em', fontWeight: 600, transition: 'background-color 0.2s ease, transform 0.1s ease, box-shadow 0.2s ease', display: 'inline-flex', alignItems: 'center', gap: '6px', textDecoration: 'none', lineHeight: '1.2',
  },
  playlistCloseButton: {
     background: 'none', border: 'none', borderRadius: '50%', cursor: 'pointer',
     fontSize: '1.5em', fontWeight: 'bold', 
     transition: 'background-color 0.2s ease, color 0.2s ease',
     display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
     textDecoration: 'none', lineHeight: '1', padding: '5px',
     width: '30px', height: '30px', color: '#95a5a6',
  },
  emptyPlaylistMessage: {
    textAlign: 'center', padding: '40px 20px', color: '#7f8c8d',
    fontSize: '1.1em', display: 'flex', flexDirection: 'column', alignItems: 'center',
  },
  hiddenIframe: {
    position: 'absolute', top: '-9999px', left: '-9999px',
    width: '1px', height: '1px', opacity: 0, border: 'none', visibility: 'hidden',
  },
  miniPlayer: {
    position: 'fixed', bottom: 0, left: 0, right: 0,
    height: '75px', backgroundColor: '#ffffff',
    borderTop: '1px solid #e1e5e8', boxShadow: '0 -3px 12px rgba(0, 0, 0, 0.1)',
    display: 'flex', alignItems: 'center', padding: '0 15px', zIndex: 1000,
  },
  miniPlayerThumbnail: {
    width: '50px', height: '50px', objectFit: 'cover',
    borderRadius: '4px', marginRight: '15px', flexShrink: 0,
  },
  miniPlayerInfo: {
    flexGrow: 1, overflow: 'hidden', marginRight: '15px',
  },
  miniPlayerTitle: {
    fontSize: '1em', fontWeight: 600, color: '#34495e',
    whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginBottom: '2px',
  },
  miniPlayerArtist: {
    fontSize: '0.85em', color: '#7f8c8d', whiteSpace: 'nowrap',
    overflow: 'hidden', textOverflow: 'ellipsis',
  },
  miniPlayerControls: {
    display: 'flex', alignItems: 'center', gap: '5px', flexShrink: 0,
  },
  miniPlayerButton: {
    background: 'none', border: 'none', color: '#34495e',
    fontSize: '1.6em', cursor: 'pointer', padding: '8px',
    borderRadius: '50%', lineHeight: 0,
    transition: 'background-color 0.2s ease, color 0.2s ease',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    // Hover/disabled states will be handled by .mini-player-button-hover in <style jsx global>
  },
  miniPlayerStopButton: {
    color: '#e74c3c', fontSize: '1.4em',
    // Hover handled by className in global style
  },
};
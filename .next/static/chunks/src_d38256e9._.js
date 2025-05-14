(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/firebase.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// lib/firebase.js (หรือ src/lib/firebase.js)
__turbopack_context__.s({
    "app": (()=>app),
    "auth": (()=>auth),
    "db": (()=>db)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm2017.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$9ae71ce3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__p__as__getAuth$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm2017/index-9ae71ce3.js [app-client] (ecmascript) <export p as getAuth>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
;
;
;
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjKfFO7maPIOF8BspiU1wkLNgV9ipffNs",
    authDomain: "testmusic-79383.firebaseapp.com",
    projectId: "testmusic-79383",
    storageBucket: "testmusic-79383.firebasestorage.app",
    messagingSenderId: "198991673510",
    appId: "1:198991673510:web:0a16a620d9b5d1805adc67",
    measurementId: "G-5EW3XYPVR5"
};
// Initialize Firebase App (ป้องกันการ init ซ้ำ)
const app = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getApps"])().length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initializeApp"])(firebaseConfig) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getApp"])();
// Initialize Firebase Services
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2d$9ae71ce3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__p__as__getAuth$3e$__["getAuth"])(app);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
 // -------------------------------------
}}),
"[project]/src/app/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MusicPlayer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// --- Firebase Imports ---
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function MusicPlayer() {
    _s();
    // --- State Declarations ---
    const [allAlbums, setAllAlbums] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [albumSongs, setAlbumSongs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedAlbum, setSelectedAlbum] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [playlist, setPlaylist] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Player State
    const [activeYoutubeId, setActiveYoutubeId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // The ID of the video to be loaded/played
    const [currentSongInfo, setCurrentSongInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isPlayingFromPlaylist, setIsPlayingFromPlaylist] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentPlaylistIndex, setCurrentPlaylistIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1);
    const [isPlayerPlaying, setIsPlayerPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // True if YT player is actually playing
    // --- YouTube Player API State ---
    const [youtubeApiReady, setYoutubeApiReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const playerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null); // To store the YT.Player instance
    // UI State
    const [isLoadingAlbums, setIsLoadingAlbums] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoadingSongs, setIsLoadingSongs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showPlaylistView, setShowPlaylistView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const getYoutubeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MusicPlayer.useCallback[getYoutubeId]": (url)=>{
            if (!url || typeof url !== 'string') return null;
            const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
            const match = url.match(regExp);
            if (match && match[1]) return match[1];
            if (!url.includes("http") && url.length >= 11 && !url.includes(" ")) return url;
            return null;
        }
    }["MusicPlayer.useCallback[getYoutubeId]"], []);
    const getThumbnailUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MusicPlayer.useCallback[getThumbnailUrl]": (youtubeId, size = 'default')=>{
            if (!youtubeId) return `/api/placeholder/${size === 'mqdefault' ? '320/180' : '120/90'}`;
            return `https://img.youtube.com/vi/${youtubeId}/${size}.jpg`;
        }
    }["MusicPlayer.useCallback[getThumbnailUrl]"], []);
    // --- Effects ---
    // Effect 1: Fetch Albums & Load Playlist on initial mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MusicPlayer.useEffect": ()=>{
            const fetchAlbums = {
                "MusicPlayer.useEffect.fetchAlbums": async ()=>{
                    setIsLoadingAlbums(true);
                    setError(null);
                    try {
                        const albumsCollectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'albums');
                        const albumSnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(albumsCollectionRef);
                        const albumList = albumSnapshot.docs.map({
                            "MusicPlayer.useEffect.fetchAlbums.albumList": (doc)=>({
                                    id: doc.id,
                                    ...doc.data()
                                })
                        }["MusicPlayer.useEffect.fetchAlbums.albumList"]);
                        if (Array.isArray(albumList)) {
                            albumList.sort({
                                "MusicPlayer.useEffect.fetchAlbums": (a, b)=>(a.title || '').localeCompare(b.title || '')
                            }["MusicPlayer.useEffect.fetchAlbums"]);
                            setAllAlbums(albumList);
                        } else {
                            throw new Error("Invalid album data format.");
                        }
                    } catch (err) {
                        console.error("Firebase fetch albums error:", err);
                        setError(err.message || "Failed to load albums.");
                        setAllAlbums([]);
                    } finally{
                        setIsLoadingAlbums(false);
                    }
                }
            }["MusicPlayer.useEffect.fetchAlbums"];
            const loadPlaylist = {
                "MusicPlayer.useEffect.loadPlaylist": ()=>{
                    const savedPlaylist = localStorage.getItem("musicPlaylist");
                    if (savedPlaylist) {
                        try {
                            const parsedPlaylist = JSON.parse(savedPlaylist);
                            if (Array.isArray(parsedPlaylist)) {
                                const validated = parsedPlaylist.filter({
                                    "MusicPlayer.useEffect.loadPlaylist.validated": (item)=>item && typeof item === 'object' && item.youtubeLink && item.songTitle && getYoutubeId(item.youtubeLink)
                                }["MusicPlayer.useEffect.loadPlaylist.validated"]).map({
                                    "MusicPlayer.useEffect.loadPlaylist.validated": (item)=>({
                                            ...item,
                                            songTitle: item.songTitle || 'Unknown Title',
                                            bandName: item.bandName || 'Unknown Artist'
                                        })
                                }["MusicPlayer.useEffect.loadPlaylist.validated"]);
                                setPlaylist(validated);
                            } else {
                                localStorage.removeItem("musicPlaylist");
                            }
                        } catch (e) {
                            localStorage.removeItem("musicPlaylist");
                        }
                    }
                }
            }["MusicPlayer.useEffect.loadPlaylist"];
            fetchAlbums();
            loadPlaylist();
        }
    }["MusicPlayer.useEffect"], [
        getYoutubeId
    ]);
    // Effect 2: Fetch Songs when an album is selected
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MusicPlayer.useEffect": ()=>{
            const fetchSongsForAlbum = {
                "MusicPlayer.useEffect.fetchSongsForAlbum": async ()=>{
                    if (!selectedAlbum || !selectedAlbum.id) {
                        setAlbumSongs([]);
                        return;
                    }
                    setIsLoadingSongs(true);
                    setError(null);
                    try {
                        const songsCollectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], 'songs');
                        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(songsCollectionRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])("albumId", "==", selectedAlbum.id), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])("trackNumber", "asc"));
                        const songSnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
                        const songList = songSnapshot.docs.map({
                            "MusicPlayer.useEffect.fetchSongsForAlbum.songList": (doc)=>({
                                    id: doc.id,
                                    ...doc.data()
                                })
                        }["MusicPlayer.useEffect.fetchSongsForAlbum.songList"]);
                        if (Array.isArray(songList)) {
                            setAlbumSongs(songList);
                        } else {
                            throw new Error("Invalid song data format for album.");
                        }
                    } catch (err) {
                        console.error(`Firebase fetch songs error for album ${selectedAlbum.id}:`, err);
                        setError(err.message || `Failed to load songs for album "${selectedAlbum.title}".`);
                        setAlbumSongs([]);
                    } finally{
                        setIsLoadingSongs(false);
                    }
                }
            }["MusicPlayer.useEffect.fetchSongsForAlbum"];
            fetchSongsForAlbum();
        }
    }["MusicPlayer.useEffect"], [
        selectedAlbum
    ]);
    // Effect 3: Save personal playlist to localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MusicPlayer.useEffect": ()=>{
            if (Array.isArray(playlist)) {
                if (playlist.length > 0) {
                    localStorage.setItem("musicPlaylist", JSON.stringify(playlist));
                } else {
                    localStorage.removeItem("musicPlaylist");
                }
            }
        }
    }["MusicPlayer.useEffect"], [
        playlist
    ]);
    // Effect 4: Update current song info for the mini player
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MusicPlayer.useEffect": ()=>{
            if (!activeYoutubeId) {
                setCurrentSongInfo(null);
                return;
            }
            let foundSong = null;
            if (isPlayingFromPlaylist && currentPlaylistIndex >= 0 && currentPlaylistIndex < playlist.length) {
                const plSong = playlist[currentPlaylistIndex];
                if (plSong && getYoutubeId(plSong.youtubeLink) === activeYoutubeId) foundSong = plSong;
            }
            if (!foundSong && selectedAlbum && Array.isArray(albumSongs)) {
                foundSong = albumSongs.find({
                    "MusicPlayer.useEffect": (song)=>song && song.youtubeLink && getYoutubeId(song.youtubeLink) === activeYoutubeId
                }["MusicPlayer.useEffect"]);
            }
            // Fallback to searching entire playlist if not found yet (e.g., song played from album then added to playlist)
            if (!foundSong && Array.isArray(playlist)) {
                foundSong = playlist.find({
                    "MusicPlayer.useEffect": (song)=>song && song.youtubeLink && getYoutubeId(song.youtubeLink) === activeYoutubeId
                }["MusicPlayer.useEffect"]);
            }
            setCurrentSongInfo(foundSong ? {
                id: foundSong.id || null,
                songTitle: foundSong.songTitle || 'Unknown Title',
                bandName: foundSong.bandName || selectedAlbum?.album_name || 'Unknown Artist',
                youtubeLink: foundSong.youtubeLink,
                albumTitle: foundSong.albumTitle || selectedAlbum?.title || null,
                coverUrl: foundSong.coverUrl || selectedAlbum?.coverUrl || null
            } : null);
        }
    }["MusicPlayer.useEffect"], [
        activeYoutubeId,
        selectedAlbum,
        albumSongs,
        playlist,
        isPlayingFromPlaylist,
        currentPlaylistIndex,
        getYoutubeId
    ]);
    // Effect 5: Load YouTube IFrame API
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MusicPlayer.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                if (!window.YT || !window.YT.Player) {
                    const tag = document.createElement('script');
                    tag.src = "https://www.youtube.com/iframe_api";
                    const firstScriptTag = document.getElementsByTagName('script')[0];
                    if (firstScriptTag && firstScriptTag.parentNode) {
                        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                    } else {
                        document.head.appendChild(tag);
                    }
                    window.onYouTubeIframeAPIReady = ({
                        "MusicPlayer.useEffect": ()=>{
                            setYoutubeApiReady(true);
                        }
                    })["MusicPlayer.useEffect"];
                } else {
                    setYoutubeApiReady(true);
                }
            }
            return ({
                "MusicPlayer.useEffect": ()=>{
                    // Clean up global callback if component unmounts before API loads
                    if ("object" !== 'undefined' && window.onYouTubeIframeAPIReady && !youtubeApiReady) {
                    // window.onYouTubeIframeAPIReady = null; // Avoid issues if multiple instances or fast remounts
                    }
                }
            })["MusicPlayer.useEffect"];
        }
    }["MusicPlayer.useEffect"], []); // Removed youtubeApiReady from dependency array as it's what this effect sets
    // --- Action Handlers ---
    const handleSelectAlbum = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MusicPlayer.useCallback[handleSelectAlbum]": (album)=>{
            setSelectedAlbum(album);
            setShowPlaylistView(false);
            setError(null);
            window.scrollTo(0, 0);
        }
    }["MusicPlayer.useCallback[handleSelectAlbum]"], []);
    const handleBackToAlbums = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MusicPlayer.useCallback[handleBackToAlbums]": ()=>{
            setSelectedAlbum(null);
            setAlbumSongs([]);
            setError(null);
            window.scrollTo(0, 0);
        }
    }["MusicPlayer.useCallback[handleBackToAlbums]"], []);
    const handlePlaySong = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MusicPlayer.useCallback[handlePlaySong]": (songData, fromPlaylist = false, index = -1)=>{
            if (!songData || !songData.youtubeLink) {
                setError("Missing song data or YouTube link.");
                return;
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
        }
    }["MusicPlayer.useCallback[handlePlaySong]"], [
        getYoutubeId
    ]); // Dependencies ของ handlePlaySong ควรจะครบถ้วน
    const handleTogglePlayPause = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MusicPlayer.useCallback[handleTogglePlayPause]": ()=>{
            if (playerRef.current && typeof playerRef.current.getPlayerState === 'function') {
                const playerState = playerRef.current.getPlayerState();
                if (playerState === window.YT.PlayerState.PLAYING) {
                    playerRef.current.pauseVideo();
                    setIsPlayerPlaying(false);
                } else if (playerState === window.YT.PlayerState.PAUSED || playerState === window.YT.PlayerState.CUED) {
                    playerRef.current.playVideo();
                    setIsPlayerPlaying(true);
                } else if (activeYoutubeId && (playerState === window.YT.PlayerState.UNSTARTED || playerState === window.YT.PlayerState.ENDED)) {
                    // If unstarted or ended, and we have an active ID, try to play it.
                    // This might happen if the player was stopped or a song ended and user hits play.
                    playerRef.current.loadVideoById(activeYoutubeId); // loadVideoById often autoplays due to playerVars
                    playerRef.current.playVideo(); // Ensure it plays
                    setIsPlayerPlaying(true);
                }
            }
        }
    }["MusicPlayer.useCallback[handleTogglePlayPause]"], [
        activeYoutubeId
    ]);
    const handleStopPlayback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MusicPlayer.useCallback[handleStopPlayback]": ()=>{
            if (playerRef.current && typeof playerRef.current.stopVideo === 'function') {
                playerRef.current.stopVideo();
            }
            // setActiveYoutubeId(null); // This would remove the mini-player. Let's keep it so user can resume.
            setIsPlayerPlaying(false);
        // Optionally:
        // setCurrentSongInfo(null);
        // setIsPlayingFromPlaylist(false);
        // setCurrentPlaylistIndex(-1);
        }
    }["MusicPlayer.useCallback[handleStopPlayback]"], []);
    const handleClosePlayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MusicPlayer.useCallback[handleClosePlayer]": ()=>{
            if (playerRef.current && typeof playerRef.current.stopVideo === 'function') {
                playerRef.current.stopVideo();
            }
            setActiveYoutubeId(null);
            setCurrentSongInfo(null);
            setIsPlayerPlaying(false);
            setIsPlayingFromPlaylist(false);
            setCurrentPlaylistIndex(-1);
        }
    }["MusicPlayer.useCallback[handleClosePlayer]"], []);
    const handlePlayNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MusicPlayer.useCallback[handlePlayNext]": ()=>{
            if (!isPlayingFromPlaylist || playlist.length === 0) return;
            const nextIndex = (currentPlaylistIndex + 1) % playlist.length;
            if (playlist[nextIndex]) {
                handlePlaySong(playlist[nextIndex], true, nextIndex);
            }
        }
    }["MusicPlayer.useCallback[handlePlayNext]"], [
        isPlayingFromPlaylist,
        playlist,
        currentPlaylistIndex,
        handlePlaySong
    ]);
    // ... ภายใน Component MusicPlayer ...
    const handlePlayNextInAlbum = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MusicPlayer.useCallback[handlePlayNextInAlbum]": ()=>{
            if (isPlayingFromPlaylist || !selectedAlbum || !albumSongs || albumSongs.length <= 1) return;
            const currentPlayingId = activeYoutubeId;
            if (!currentPlayingId) return;
            const currentIndex = albumSongs.findIndex({
                "MusicPlayer.useCallback[handlePlayNextInAlbum].currentIndex": (song)=>song && getYoutubeId(song.youtubeLink) === currentPlayingId
            }["MusicPlayer.useCallback[handlePlayNextInAlbum].currentIndex"]);
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
        }
    }["MusicPlayer.useCallback[handlePlayNextInAlbum]"], [
        activeYoutubeId,
        selectedAlbum,
        albumSongs,
        isPlayingFromPlaylist,
        handlePlaySong,
        getYoutubeId
    ]);
    const handlePlayPreviousInAlbum = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MusicPlayer.useCallback[handlePlayPreviousInAlbum]": ()=>{
            if (isPlayingFromPlaylist || !selectedAlbum || !albumSongs || albumSongs.length <= 1) return;
            const currentPlayingId = activeYoutubeId;
            if (!currentPlayingId) return;
            const currentIndex = albumSongs.findIndex({
                "MusicPlayer.useCallback[handlePlayPreviousInAlbum].currentIndex": (song)=>song && getYoutubeId(song.youtubeLink) === currentPlayingId
            }["MusicPlayer.useCallback[handlePlayPreviousInAlbum].currentIndex"]);
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
        }
    }["MusicPlayer.useCallback[handlePlayPreviousInAlbum]"], [
        activeYoutubeId,
        selectedAlbum,
        albumSongs,
        isPlayingFromPlaylist,
        handlePlaySong,
        getYoutubeId
    ]);
    const handlePlayPrevious = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MusicPlayer.useCallback[handlePlayPrevious]": ()=>{
            if (!isPlayingFromPlaylist || playlist.length === 0) return;
            const prevIndex = (currentPlaylistIndex - 1 + playlist.length) % playlist.length;
            if (playlist[prevIndex]) {
                handlePlaySong(playlist[prevIndex], true, prevIndex);
            }
        }
    }["MusicPlayer.useCallback[handlePlayPrevious]"], [
        isPlayingFromPlaylist,
        playlist,
        currentPlaylistIndex,
        handlePlaySong
    ]);
    // --- YouTube Player Effect (Creation and Control) ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MusicPlayer.useEffect": ()=>{
            // Player Event Handlers (defined inside so they have access to current state/props)
            const onPlayerReadyInternal = {
                "MusicPlayer.useEffect.onPlayerReadyInternal": (event)=>{
                    // console.log("Player is ready. Autoplay is ON in playerVars.");
                    // PlayerVars autoplay: 1 should handle this.
                    // If a video ID was set before player was ready, play it.
                    if (activeYoutubeId) {
                        event.target.playVideo(); // Ensure playback if activeYoutubeId already set
                    }
                }
            }["MusicPlayer.useEffect.onPlayerReadyInternal"];
            const onPlayerErrorInternal = {
                "MusicPlayer.useEffect.onPlayerErrorInternal": (event)=>{
                    console.error("YouTube Player Error:", event.data, "for videoId:", playerRef.current?.getVideoData?.().video_id || activeYoutubeId);
                    setError(`Playback error (Code: ${event.data}). Trying next...`);
                    setIsPlayerPlaying(false);
                    // Automatically try to play the next song
                    if (isPlayingFromPlaylist) {
                        if (playlist.length > 1) handlePlayNext();
                        else handleClosePlayer(); // Stop if it was the only song or last
                    } else if (selectedAlbum && albumSongs.length > 0) {
                        const currentActualId = playerRef.current?.getVideoData?.().video_id || activeYoutubeId;
                        const currentIndex = albumSongs.findIndex({
                            "MusicPlayer.useEffect.onPlayerErrorInternal.currentIndex": (s)=>getYoutubeId(s.youtubeLink) === currentActualId
                        }["MusicPlayer.useEffect.onPlayerErrorInternal.currentIndex"]);
                        if (currentIndex !== -1 && currentIndex < albumSongs.length - 1) {
                            handlePlaySong(albumSongs[currentIndex + 1], false);
                        } else {
                            handleClosePlayer();
                        }
                    } else {
                        handleClosePlayer();
                    }
                }
            }["MusicPlayer.useEffect.onPlayerErrorInternal"];
            const onPlayerStateChangeInternal = {
                "MusicPlayer.useEffect.onPlayerStateChangeInternal": (event)=>{
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
                            const currentIndex = albumSongs.findIndex({
                                "MusicPlayer.useEffect.onPlayerStateChangeInternal.currentIndex": (s)=>getYoutubeId(s.youtubeLink) === currentActualId
                            }["MusicPlayer.useEffect.onPlayerStateChangeInternal.currentIndex"]);
                            const endedSongId = playerRef.current?.getVideoData?.().video_id || activeYoutubeId;
                            if (!endedSongId) {
                                handleClosePlayer(); // ไม่มี ID ให้หยุด
                                return;
                            }
                            // 2. หา index ของเพลงที่เพิ่งจบใน albumSongs
                            const currentIndexInAlbum = albumSongs.findIndex({
                                "MusicPlayer.useEffect.onPlayerStateChangeInternal.currentIndexInAlbum": (song)=>song && getYoutubeId(song.youtubeLink) === endedSongId
                            }["MusicPlayer.useEffect.onPlayerStateChangeInternal.currentIndexInAlbum"]);
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
                }
            }["MusicPlayer.useEffect.onPlayerStateChangeInternal"];
            // Initialize Player or Load New Video
            if (youtubeApiReady && document.getElementById('youtube-player-container')) {
                if (!playerRef.current) {
                    if (window.YT && window.YT.Player) {
                        playerRef.current = new window.YT.Player('youtube-player-container', {
                            height: '0',
                            width: '0',
                            videoId: activeYoutubeId || '',
                            playerVars: {
                                'autoplay': 1,
                                'controls': 0,
                                'showinfo': 0,
                                'rel': 0,
                                'modestbranding': 1,
                                'iv_load_policy': 3,
                                'playsinline': 1
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
                } else {
                    const currentVideoUrl = playerRef.current.getVideoUrl();
                    const currentVideoId = currentVideoUrl ? getYoutubeId(currentVideoUrl) : null;
                    if (activeYoutubeId && activeYoutubeId !== currentVideoId) {
                        playerRef.current.loadVideoById(activeYoutubeId);
                        // Autoplay is handled by playerVars, but playVideo() can be called in onPlayerStateChange CUED or onReady if needed.
                        setIsPlayerPlaying(true); // Assume it will play
                    } else if (!activeYoutubeId && currentVideoId) {
                        playerRef.current.stopVideo();
                        setIsPlayerPlaying(false);
                    }
                }
            }
            // Cleanup on component unmount
            return ({
                "MusicPlayer.useEffect": ()=>{
                // Don't destroy the player on every re-render, only on unmount.
                // If we want to destroy and recreate the player (e.g. if some fundamental config changes),
                // this cleanup would run before the effect re-runs.
                // For now, we assume the player instance is persistent for the component's lifecycle.
                // To destroy on unmount:
                // if (playerRef.current && typeof playerRef.current.destroy === 'function') {
                //   playerRef.current.destroy();
                //   playerRef.current = null;
                // }
                }
            })["MusicPlayer.useEffect"];
        }
    }["MusicPlayer.useEffect"], [
        youtubeApiReady,
        activeYoutubeId,
        // Callbacks that are stable but listed for completeness if player logic depends on their latest versions
        isPlayingFromPlaylist,
        playlist,
        albumSongs,
        selectedAlbum,
        handlePlayNext,
        handlePlaySong,
        handleClosePlayer,
        getYoutubeId,
        setError
    ]);
    // --- Playlist Handlers ---
    const handleAddToPlaylist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MusicPlayer.useCallback[handleAddToPlaylist]": (songToAdd)=>{
            if (!songToAdd || typeof songToAdd !== 'object' || !songToAdd.youtubeLink || !songToAdd.songTitle) {
                // Consider using a more user-friendly notification system than alert
                alert("Cannot add invalid song data to playlist.");
                return;
            }
            const songYoutubeId = getYoutubeId(songToAdd.youtubeLink);
            if (!songYoutubeId) {
                alert("Invalid YouTube link, cannot add.");
                return;
            }
            const alreadyExists = playlist.some({
                "MusicPlayer.useCallback[handleAddToPlaylist].alreadyExists": (item)=>item && item.youtubeLink && getYoutubeId(item.youtubeLink) === songYoutubeId
            }["MusicPlayer.useCallback[handleAddToPlaylist].alreadyExists"]);
            const title = songToAdd.songTitle || 'Unknown Title';
            if (!alreadyExists) {
                const entry = {
                    id: songToAdd.id || `local-${Date.now()}-${Math.random().toString(36).substring(7)}`,
                    songTitle: title,
                    bandName: songToAdd.bandName || selectedAlbum?.album_name || 'Unknown Artist',
                    youtubeLink: songToAdd.youtubeLink,
                    albumTitle: songToAdd.albumTitle || selectedAlbum?.title || null,
                    coverUrl: songToAdd.coverUrl || selectedAlbum?.coverUrl || getThumbnailUrl(songYoutubeId, 'mqdefault')
                };
                setPlaylist({
                    "MusicPlayer.useCallback[handleAddToPlaylist]": (prev)=>[
                            ...prev,
                            entry
                        ]
                }["MusicPlayer.useCallback[handleAddToPlaylist]"]);
            // alert(`Added "${title}" to playlist.`); // Consider toast notification
            } else {
                alert(`"${title}" is already in the playlist.`);
            }
        }
    }["MusicPlayer.useCallback[handleAddToPlaylist]"], [
        playlist,
        selectedAlbum,
        getYoutubeId,
        getThumbnailUrl
    ]);
    const handleRemoveFromPlaylist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MusicPlayer.useCallback[handleRemoveFromPlaylist]": (index)=>{
            if (index < 0 || index >= playlist.length) return;
            const songToRemove = playlist[index];
            const title = songToRemove?.songTitle || 'This song';
            const newPlaylist = playlist.filter({
                "MusicPlayer.useCallback[handleRemoveFromPlaylist].newPlaylist": (_, i)=>i !== index
            }["MusicPlayer.useCallback[handleRemoveFromPlaylist].newPlaylist"]);
            setPlaylist(newPlaylist);
            // alert(`Removed "${title}" from playlist.`); // Consider toast notification
            // If the removed song was playing or affected the current playing index
            if (isPlayingFromPlaylist) {
                const removedSongYoutubeId = getYoutubeId(songToRemove.youtubeLink);
                if (activeYoutubeId === removedSongYoutubeId && currentPlaylistIndex === index) {
                    if (newPlaylist.length > 0) {
                        // Play the song that takes its place, or the first if it was the last
                        const nextPlayIndex = Math.min(index, newPlaylist.length - 1);
                        handlePlaySong(newPlaylist[nextPlayIndex], true, nextPlayIndex);
                    } else {
                        handleClosePlayer(); // Playlist is now empty
                    }
                } else if (index < currentPlaylistIndex) {
                    // If a song before the current one was removed, adjust the index
                    setCurrentPlaylistIndex({
                        "MusicPlayer.useCallback[handleRemoveFromPlaylist]": (prev)=>prev - 1
                    }["MusicPlayer.useCallback[handleRemoveFromPlaylist]"]);
                } else if (newPlaylist.length === 0) {
                    handleClosePlayer();
                }
            }
        }
    }["MusicPlayer.useCallback[handleRemoveFromPlaylist]"], [
        playlist,
        isPlayingFromPlaylist,
        currentPlaylistIndex,
        activeYoutubeId,
        handlePlaySong,
        handleClosePlayer,
        getYoutubeId
    ]);
    const handleClearPlaylist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MusicPlayer.useCallback[handleClearPlaylist]": ()=>{
            if (playlist.length > 0 && confirm("Are you sure you want to clear the entire playlist? This cannot be undone.")) {
                setPlaylist([]);
                if (isPlayingFromPlaylist) handleClosePlayer();
            // alert("Playlist cleared.");
            }
        }
    }["MusicPlayer.useCallback[handleClearPlaylist]"], [
        playlist,
        isPlayingFromPlaylist,
        handleClosePlayer
    ]);
    const handleShufflePlay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MusicPlayer.useCallback[handleShufflePlay]": ()=>{
            if (playlist.length === 0) return;
            if (playlist.length === 1) {
                handlePlaySong(playlist[0], true, 0);
                return;
            }
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * playlist.length);
            }while (playlist.length > 1 && activeYoutubeId && getYoutubeId(playlist[randomIndex].youtubeLink) === activeYoutubeId)
            // The above condition tries to pick a DIFFERENT song if one is already playing from the playlist.
            // If it's the only song or no song is playing, it will pick it.
            handlePlaySong(playlist[randomIndex], true, randomIndex);
        }
    }["MusicPlayer.useCallback[handleShufflePlay]"], [
        playlist,
        activeYoutubeId,
        handlePlaySong,
        getYoutubeId
    ]);
    // --- Render Logic ---
    const renderAlbumList = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    style: styles.viewTitle,
                    children: "Discover Albums"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 578,
                    columnNumber: 7
                }, this),
                isLoadingAlbums && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: styles.loadingBox,
                    children: [
                        "Loading albums... ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: styles.dotFlashing
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 579,
                            columnNumber: 76
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 579,
                    columnNumber: 27
                }, this),
                !isLoadingAlbums && allAlbums.length === 0 && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: styles.infoText,
                    children: "No albums found. Add some in the admin section!"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 580,
                    columnNumber: 64
                }, this),
                !isLoadingAlbums && error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: styles.infoText,
                    children: [
                        "Could not load albums: ",
                        error
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 581,
                    columnNumber: 37
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: styles.albumGrid,
                    children: allAlbums.map((album)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: styles.albumCard,
                            className: "album-card-hover",
                            onClick: ()=>handleSelectAlbum(album),
                            title: `View album: ${album.title}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: album.coverUrl || getThumbnailUrl(getYoutubeId(album.sampleTrackLink), 'mqdefault') || '/api/placeholder/200/200',
                                    alt: album.title || 'Album cover',
                                    style: styles.albumCover,
                                    loading: "lazy",
                                    onError: (e)=>e.target.src = '/api/placeholder/200/200'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 585,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: styles.albumInfo,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: styles.albumTitle,
                                            title: album.title,
                                            children: album.title || 'Untitled Album'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 593,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: styles.albumArtist,
                                            title: album.album_name,
                                            children: album.album_name || 'Unknown Artist'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 594,
                                            columnNumber: 15
                                        }, this),
                                        album.releaseYear && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: styles.albumYear,
                                            children: album.releaseYear
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 595,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 592,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, album.id, true, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 584,
                            columnNumber: 11
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 582,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 577,
            columnNumber: 5
        }, this);
    const renderAlbumSongs = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleBackToAlbums,
                    style: styles.backButton,
                    className: "base-button-class",
                    children: "← Back to Albums"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 605,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: styles.albumDetailHeader,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: selectedAlbum.coverUrl || '/api/placeholder/200/200',
                            alt: selectedAlbum.title || '',
                            style: styles.albumDetailCover,
                            onError: (e)=>e.target.src = '/api/placeholder/200/200'
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 609,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: styles.albumDetailInfo,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: styles.albumDetailType,
                                    children: "ALBUM"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 616,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: styles.albumDetailTitle,
                                    title: selectedAlbum.title,
                                    children: selectedAlbum.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 617,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: styles.albumDetailArtist,
                                    children: [
                                        selectedAlbum.album_name || 'Unknown Artist',
                                        selectedAlbum.releaseYear && ` • ${selectedAlbum.releaseYear}`,
                                        albumSongs.length > 0 && ` • ${albumSongs.length} song${albumSongs.length > 1 ? 's' : ''}`
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 618,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>albumSongs.length > 0 && handlePlaySong(albumSongs[0], false, 0),
                                    // Start with index 0 for album play
                                    style: styles.playAlbumButton,
                                    className: "base-button-class",
                                    disabled: albumSongs.length === 0 || isLoadingSongs,
                                    title: albumSongs.length > 0 ? `Play album: ${selectedAlbum.title}` : "No songs available to play",
                                    children: "▶️ Play Album"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 623,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 615,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 608,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    style: styles.viewTitle,
                    children: "Tracklist"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 636,
                    columnNumber: 7
                }, this),
                isLoadingSongs && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: styles.loadingBox,
                    children: [
                        "Loading songs... ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: styles.dotFlashing
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 637,
                            columnNumber: 74
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 637,
                    columnNumber: 26
                }, this),
                !isLoadingSongs && albumSongs.length === 0 && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: styles.infoText,
                    children: "No songs found in this album."
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 638,
                    columnNumber: 64
                }, this),
                !isLoadingSongs && error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: styles.infoText,
                    children: [
                        "Could not load songs: ",
                        error
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 639,
                    columnNumber: 36
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: styles.songList,
                    children: albumSongs.map((song, index)=>{
                        if (!song || !song.youtubeLink || !song.songTitle) return null;
                        const youtubeId = getYoutubeId(song.youtubeLink);
                        const isCurrentlyPlayingSong = activeYoutubeId === youtubeId;
                        const isActive = isCurrentlyPlayingSong && !isPlayingFromPlaylist;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                ...styles.songItem,
                                ...isActive ? styles.songItemActive : {}
                            },
                            className: "song-item-hover",
                            onClick: ()=>handlePlaySong(song, false, index),
                            title: `Play ${song.songTitle}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: styles.trackNumberContainer,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: styles.trackNumber,
                                            className: "track-number-display",
                                            children: song.trackNumber || index + 1
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 658,
                                            columnNumber: 18
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "play-icon",
                                            style: styles.playIcon,
                                            children: isCurrentlyPlayingSong && isPlayerPlaying ? '❚❚' : '▶'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 659,
                                            columnNumber: 18
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 657,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: styles.songContent,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: styles.songInfo,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            style: {
                                                ...styles.songTitle,
                                                color: isActive ? styles.songItemActive.color : styles.songTitle.color
                                            },
                                            children: song.songTitle
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 665,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 664,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 663,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: styles.songActions,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            handleAddToPlaylist({
                                                ...song,
                                                albumTitle: selectedAlbum.title,
                                                coverUrl: selectedAlbum.coverUrl
                                            });
                                        },
                                        style: styles.actionIcon,
                                        title: "Add to Playlist",
                                        className: "add-button-hover action-icon-button",
                                        children: "+"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 669,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 668,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, song.id || `albumsong-${index}`, true, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 650,
                            columnNumber: 13
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 641,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 604,
            columnNumber: 5
        }, this);
    const renderPersonalPlaylist = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: styles.playlistContainer,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: styles.playlistHeader,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: styles.viewTitle,
                            children: "My Playlist"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 688,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: styles.playlistHeaderActions,
                            children: [
                                playlist.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleShufflePlay,
                                            style: styles.playlistActionButton,
                                            className: "base-button-class",
                                            title: "Shuffle Play Playlist",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    role: "img",
                                                    "aria-label": "Shuffle",
                                                    children: "🔀"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.js",
                                                    lineNumber: 693,
                                                    columnNumber: 17
                                                }, this),
                                                " Shuffle"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 692,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleClearPlaylist,
                                            style: styles.playlistActionButton,
                                            className: "base-button-class",
                                            title: "Clear Entire Playlist",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    role: "img",
                                                    "aria-label": "Trash Can",
                                                    children: "🗑️"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.js",
                                                    lineNumber: 696,
                                                    columnNumber: 17
                                                }, this),
                                                " Clear All"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 695,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowPlaylistView(false),
                                    style: styles.playlistCloseButton,
                                    className: "action-icon-button",
                                    title: "Close Playlist View",
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 700,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 689,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 687,
                    columnNumber: 7
                }, this),
                playlist.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: styles.emptyPlaylistMessage,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontSize: '2em',
                                marginBottom: '10px'
                            },
                            children: "🎧"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 706,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Your playlist is feeling lonely!"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 707,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Find albums you like and click the '+' button on songs to add them here."
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 708,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 705,
                    columnNumber: 9
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: styles.songList,
                    children: playlist.map((song, index)=>{
                        if (!song || !song.youtubeLink || !song.songTitle) return null;
                        const youtubeId = getYoutubeId(song.youtubeLink);
                        const isCurrentlyPlayingSong = activeYoutubeId === youtubeId;
                        const isActive = isCurrentlyPlayingSong && isPlayingFromPlaylist && currentPlaylistIndex === index;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                ...styles.songItem,
                                ...isActive ? styles.songItemActive : {}
                            },
                            className: "song-item-hover",
                            onClick: ()=>handlePlaySong(song, true, index),
                            title: `Play ${song.songTitle}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: styles.songContent,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: song.coverUrl || getThumbnailUrl(youtubeId, 'default') || '/api/placeholder/50/50',
                                            alt: "",
                                            style: styles.playlistThumbnail,
                                            loading: "lazy",
                                            onError: (e)=>e.target.src = '/api/placeholder/50/50'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 727,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "play-icon-playlist",
                                            style: {
                                                ...styles.playIcon,
                                                display: 'block',
                                                marginRight: '10px',
                                                marginLeft: '5px',
                                                fontSize: '1.3em',
                                                color: isActive && isPlayerPlaying ? '#1abc9c' : isActive ? '#34495e' : '#bdc3c7'
                                            },
                                            children: isActive && isPlayerPlaying ? '❚❚' : '▶'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 734,
                                            columnNumber: 20
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: styles.songInfo,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    style: {
                                                        ...styles.songTitle,
                                                        color: isActive ? styles.songItemActive.color : styles.songTitle.color
                                                    },
                                                    children: song.songTitle
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.js",
                                                    lineNumber: 738,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: styles.songArtist,
                                                    children: song.bandName || 'Unknown Artist'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.js",
                                                    lineNumber: 739,
                                                    columnNumber: 21
                                                }, this),
                                                song.albumTitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: styles.songAlbum,
                                                    title: `From album: ${song.albumTitle}`,
                                                    children: song.albumTitle
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.js",
                                                    lineNumber: 740,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.js",
                                            lineNumber: 737,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 726,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: styles.songActions,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            handleRemoveFromPlaylist(index);
                                        },
                                        style: styles.actionIcon,
                                        title: "Remove from Playlist",
                                        className: "remove-button-hover action-icon-button",
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 744,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 743,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, song.id || `playlist-${index}-${youtubeId}`, true, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 719,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 711,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 686,
            columnNumber: 5
        }, this);
    // --- Main Return ---
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            ...styles.appContainer,
            paddingBottom: activeYoutubeId && currentSongInfo ? styles.miniPlayer.height : '20px'
        },
        className: "jsx-8723903c134a3568",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "youtube-player-container",
                style: styles.hiddenIframe,
                className: "jsx-8723903c134a3568"
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 757,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.mainContent,
                className: "jsx-8723903c134a3568",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        style: styles.header,
                        className: "jsx-8723903c134a3568",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: styles.appTitle,
                                className: "jsx-8723903c134a3568",
                                children: "My Favorite Songs"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 761,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: styles.headerButtons,
                                className: "jsx-8723903c134a3568",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setShowPlaylistView(!showPlaylistView);
                                            if (!showPlaylistView) setSelectedAlbum(null);
                                        },
                                        style: styles.playlistButton,
                                        title: showPlaylistView ? "Hide Playlist" : "Show My Playlist",
                                        "aria-pressed": showPlaylistView,
                                        className: "jsx-8723903c134a3568" + " " + "base-button-class",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                role: "img",
                                                "aria-label": "playlist icon",
                                                className: "jsx-8723903c134a3568",
                                                children: "🎼"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.js",
                                                lineNumber: 770,
                                                columnNumber: 15
                                            }, this),
                                            " ",
                                            showPlaylistView ? "Albums" : "My Playlist",
                                            " ",
                                            playlist.length > 0 && !showPlaylistView && `(${playlist.length})`
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 763,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/login",
                                        style: styles.adminButton,
                                        className: "base-button-class",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                role: "img",
                                                "aria-label": "lock icon",
                                                className: "jsx-8723903c134a3568",
                                                children: "🔐"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.js",
                                                lineNumber: 773,
                                                columnNumber: 15
                                            }, this),
                                            " Admin"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 772,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 762,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 760,
                        columnNumber: 9
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: styles.errorBox,
                        className: "jsx-8723903c134a3568",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-8723903c134a3568",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        role: "img",
                                        "aria-label": "warning sign",
                                        style: {
                                            marginRight: '8px'
                                        },
                                        className: "jsx-8723903c134a3568",
                                        children: "⚠️"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 780,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "jsx-8723903c134a3568",
                                        children: "Error:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 781,
                                        columnNumber: 17
                                    }, this),
                                    " ",
                                    error
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 779,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setError(null),
                                style: styles.errorDismiss,
                                title: "Dismiss Error",
                                className: "jsx-8723903c134a3568",
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 783,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 778,
                        columnNumber: 20
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "jsx-8723903c134a3568",
                        children: showPlaylistView ? renderPersonalPlaylist() : selectedAlbum ? renderAlbumSongs() : renderAlbumList()
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 786,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 759,
                columnNumber: 7
            }, this),
            activeYoutubeId && currentSongInfo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.miniPlayer,
                role: "region",
                "aria-label": "Music Player Controls",
                className: "jsx-8723903c134a3568",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: currentSongInfo.coverUrl || getThumbnailUrl(activeYoutubeId, 'default') || '/api/placeholder/60/60',
                        alt: `${currentSongInfo.songTitle} cover`,
                        style: styles.miniPlayerThumbnail,
                        onError: (e)=>e.target.src = '/api/placeholder/60/60',
                        className: "jsx-8723903c134a3568"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 797,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: styles.miniPlayerInfo,
                        className: "jsx-8723903c134a3568",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: styles.miniPlayerTitle,
                                title: currentSongInfo.songTitle,
                                className: "jsx-8723903c134a3568",
                                children: currentSongInfo.songTitle
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 804,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: styles.miniPlayerArtist,
                                title: currentSongInfo.bandName,
                                className: "jsx-8723903c134a3568",
                                children: currentSongInfo.bandName
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 805,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 803,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: styles.miniPlayerControls,
                        className: "jsx-8723903c134a3568",
                        children: [
                            isPlayingFromPlaylist && playlist.length > 1 || !isPlayingFromPlaylist && selectedAlbum && albumSongs && albumSongs.length > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: isPlayingFromPlaylist ? handlePlayPrevious : handlePlayPreviousInAlbum,
                                style: styles.miniPlayerButton,
                                title: "Previous",
                                className: "jsx-8723903c134a3568" + " " + "mini-player-button-hover",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    role: "img",
                                    "aria-label": "Previous Track",
                                    className: "jsx-8723903c134a3568",
                                    children: "⏮️"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 816,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 810,
                                columnNumber: 9
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: {
                                    ...styles.miniPlayerButton,
                                    opacity: 0.5,
                                    cursor: 'not-allowed'
                                },
                                title: "Previous (Unavailable)",
                                disabled: true,
                                className: "jsx-8723903c134a3568",
                                children: "⏮️"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 819,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleTogglePlayPause,
                                style: styles.miniPlayerButton,
                                title: isPlayerPlaying ? "Pause" : "Play",
                                className: "jsx-8723903c134a3568" + " " + "mini-player-button-hover",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    role: "img",
                                    "aria-label": isPlayerPlaying ? "Pause" : "Play",
                                    className: "jsx-8723903c134a3568",
                                    children: isPlayerPlaying ? '❚❚' : '▶️'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 824,
                                    columnNumber: 9
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 823,
                                columnNumber: 7
                            }, this),
                            isPlayingFromPlaylist && playlist.length > 1 || !isPlayingFromPlaylist && selectedAlbum && albumSongs && albumSongs.length > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: isPlayingFromPlaylist ? handlePlayNext : handlePlayNextInAlbum,
                                style: styles.miniPlayerButton,
                                title: "Next",
                                className: "jsx-8723903c134a3568" + " " + "mini-player-button-hover",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    role: "img",
                                    "aria-label": "Next Track",
                                    className: "jsx-8723903c134a3568",
                                    children: "⏭️"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 835,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 829,
                                columnNumber: 9
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: {
                                    ...styles.miniPlayerButton,
                                    opacity: 0.5,
                                    cursor: 'not-allowed'
                                },
                                title: "Next (Unavailable)",
                                disabled: true,
                                className: "jsx-8723903c134a3568",
                                children: "⏭️"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 838,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleClosePlayer,
                                style: {
                                    ...styles.miniPlayerButton,
                                    ...styles.miniPlayerStopButton
                                },
                                title: "Stop and Close Player",
                                className: "jsx-8723903c134a3568" + " " + "mini-player-button-hover",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    role: "img",
                                    "aria-label": "Stop",
                                    className: "jsx-8723903c134a3568",
                                    children: "⏹️"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 843,
                                    columnNumber: 9
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 842,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 807,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 796,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "8723903c134a3568",
                children: '.album-card-hover:hover{transform:translateY(-4px);box-shadow:0 8px 16px #0000001f}.song-item-hover:hover{background-color:#f8f9fa}.song-item-hover:hover .track-number-display{display:none}.song-item-hover:hover .play-icon{display:inline-block!important}.action-icon-button:hover{filter:brightness(.8)}.add-button-hover:hover{color:#27ae60!important;background-color:#27ae601a!important}.remove-button-hover:hover{color:#e74c3c!important;background-color:#e74c3c1a!important}.base-button-class:hover:not(:disabled){filter:brightness(1.1);transform:translateY(-1px);box-shadow:0 2px 4px #0000001a}.base-button-class:active:not(:disabled){filter:brightness(.95);transform:translateY(0)}.mini-player-button-hover:hover:not(:disabled){background-color:#0000000f}.mini-player-button-hover:disabled{opacity:.5;cursor:default;background-color:#0000}@keyframes dotFlashing{0%{opacity:.2}50%{opacity:1}to{opacity:.2}}.dotFlashing{color:#7f8c8d;background-color:#7f8c8d;border-radius:50%;width:6px;height:6px;margin-left:5px;animation:1.4s linear .35s infinite dotFlashing;position:relative}.dotFlashing:before,.dotFlashing:after{content:"";color:#7f8c8d;background-color:#7f8c8d;border-radius:50%;width:6px;height:6px;animation:1.4s linear infinite dotFlashing;display:inline-block;position:absolute;top:0}.dotFlashing:before{animation-delay:0s;left:-10px}.dotFlashing:after{animation-delay:.7s;left:10px}'
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 756,
        columnNumber: 5
    }, this);
}
_s(MusicPlayer, "s+9TIQvM4fI2/yGXDF06vt0BdiE=");
_c = MusicPlayer;
// --- Enhanced Styles (Mostly Unchanged, with minor additions for hover classes) ---
const styles = {
    appContainer: {
        fontFamily: "'Nunito Sans', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
        fontWeight: 400,
        backgroundColor: '#f4f7f9',
        color: '#333',
        minHeight: '100vh',
        position: 'relative',
        transition: 'padding-bottom 0.3s ease'
    },
    mainContent: {
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '25px 20px'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px',
        paddingBottom: '20px',
        borderBottom: '1px solid #e1e5e8'
    },
    appTitle: {
        fontSize: '2rem',
        fontWeight: 700,
        margin: 0,
        color: '#2c3e50',
        letterSpacing: '-0.5px'
    },
    headerButtons: {
        display: 'flex',
        gap: '15px'
    },
    baseButton: {
        padding: '10px 18px',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '0.95em',
        fontWeight: 600,
        transition: 'background-color 0.2s ease, transform 0.1s ease, box-shadow 0.2s ease',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        textDecoration: 'none',
        lineHeight: '1.2'
    },
    adminButton: {
        // ...styles.baseButton, // Spread baseButton if needed, or rely on className
        backgroundColor: '#34495e',
        color: 'white',
        padding: '10px 18px',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '0.95em',
        fontWeight: 600,
        transition: 'background-color 0.2s ease, transform 0.1s ease, box-shadow 0.2s ease',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        textDecoration: 'none',
        lineHeight: '1.2'
    },
    playlistButton: {
        // ...styles.baseButton,
        backgroundColor: '#1abc9c',
        color: 'white',
        padding: '10px 18px',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '0.95em',
        fontWeight: 600,
        transition: 'background-color 0.2s ease, transform 0.1s ease, box-shadow 0.2s ease',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        textDecoration: 'none',
        lineHeight: '1.2'
    },
    backButton: {
        // ...styles.baseButton,
        backgroundColor: '#e9ecef',
        color: '#495057',
        marginBottom: '20px',
        padding: '8px 14px',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '0.9em',
        fontWeight: 600,
        transition: 'background-color 0.2s ease, transform 0.1s ease, box-shadow 0.2s ease',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        textDecoration: 'none',
        lineHeight: '1.2'
    },
    playAlbumButton: {
        // ...styles.baseButton,
        backgroundColor: '#2ecc71',
        color: 'white',
        marginTop: '15px',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        padding: '12px 22px',
        border: 'none',
        borderRadius: '50px',
        cursor: 'pointer',
        fontSize: '1em',
        fontWeight: 700,
        transition: 'background-color 0.2s ease, transform 0.1s ease, box-shadow 0.2s ease',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        textDecoration: 'none',
        lineHeight: '1.2'
    },
    actionIcon: {
        background: 'none',
        border: 'none',
        color: '#7f8c8d',
        fontSize: '1.4em',
        cursor: 'pointer',
        padding: '5px 8px',
        borderRadius: '50%',
        lineHeight: '1',
        transition: 'color 0.2s ease, background-color 0.2s ease'
    },
    errorBox: {
        backgroundColor: '#fdeded',
        color: '#b71c1c',
        border: '1px solid #fcc',
        borderLeft: '4px solid #e57373',
        padding: '15px 20px',
        margin: '20px 0',
        borderRadius: '6px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '0.95em'
    },
    errorDismiss: {
        background: 'none',
        border: 'none',
        fontSize: '1.3em',
        fontWeight: 'bold',
        color: '#e57373',
        cursor: 'pointer',
        padding: '0 5px'
    },
    loadingBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '50px 20px',
        color: '#7f8c8d',
        fontSize: '1.1em',
        textAlign: 'center'
    },
    infoText: {
        textAlign: 'center',
        color: '#7f8c8d',
        padding: '40px 20px',
        fontSize: '1.1em'
    },
    viewTitle: {
        fontSize: '1.8em',
        fontWeight: 700,
        margin: '35px 0 20px 0',
        color: '#34495e',
        paddingBottom: '8px',
        borderBottom: '2px solid #e1e5e8',
        position: 'relative',
        paddingLeft: '15px',
        borderLeft: '5px solid #1abc9c'
    },
    albumGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
        gap: '25px'
    },
    albumCard: {
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column'
    },
    albumCover: {
        width: '100%',
        aspectRatio: '1 / 1',
        objectFit: 'cover',
        display: 'block',
        borderBottom: '1px solid #eee'
    },
    albumInfo: {
        padding: '15px',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column'
    },
    albumTitle: {
        fontSize: '1.05em',
        fontWeight: 600,
        margin: '0 0 5px 0',
        color: '#34495e',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    albumArtist: {
        fontSize: '0.9em',
        color: '#7f8c8d',
        margin: '0 0 8px 0',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    albumYear: {
        fontSize: '0.8em',
        color: '#95a5a6',
        margin: '0',
        marginTop: 'auto'
    },
    albumDetailHeader: {
        display: 'flex',
        alignItems: 'flex-end',
        gap: '25px',
        marginBottom: '30px',
        padding: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: '8px'
    },
    albumDetailCover: {
        width: '180px',
        height: '180px',
        objectFit: 'cover',
        borderRadius: '6px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
        flexShrink: 0
    },
    albumDetailInfo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        flexGrow: 1
    },
    albumDetailType: {
        fontSize: '0.75em',
        fontWeight: 700,
        color: '#7f8c8d',
        margin: '0 0 8px 0',
        textTransform: 'uppercase',
        letterSpacing: '1px'
    },
    albumDetailTitle: {
        margin: '0 0 8px 0',
        fontSize: '2.2em',
        fontWeight: 700,
        color: '#2c3e50',
        lineHeight: 1.2
    },
    albumDetailArtist: {
        margin: '0 0 15px 0',
        color: '#555',
        fontSize: '1.1em'
    },
    songList: {
        marginTop: '20px',
        border: '1px solid #e1e5e8',
        borderRadius: '6px',
        overflow: 'hidden',
        backgroundColor: '#fff'
    },
    songItem: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px 15px',
        borderBottom: '1px solid #f0f2f5',
        transition: 'background-color 0.2s ease',
        cursor: 'pointer'
    },
    songItemActive: {
        backgroundColor: '#e8f5e9',
        color: '#1b5e20'
    },
    trackNumberContainer: {
        width: '40px',
        flexShrink: 0,
        textAlign: 'center',
        marginRight: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    trackNumber: {
        fontSize: '0.9em',
        color: '#95a5a6',
        display: 'inline-block'
    },
    playIcon: {
        fontSize: '1.1em',
        color: '#1abc9c',
        display: 'none'
    },
    songContent: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        overflow: 'hidden'
    },
    playlistThumbnail: {
        width: '45px',
        height: '45px',
        objectFit: 'cover',
        borderRadius: '4px',
        flexShrink: 0
    },
    songInfo: {
        flexGrow: 1,
        overflow: 'hidden'
    },
    songTitle: {
        fontSize: '1em',
        fontWeight: 600,
        margin: '0 0 2px 0',
        color: '#34495e',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    songArtist: {
        fontSize: '0.85em',
        color: '#7f8c8d',
        margin: 0,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    songAlbum: {
        fontSize: '0.8em',
        color: '#95a5a6',
        margin: '2px 0 0 0',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    songActions: {
        marginLeft: '15px',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center'
    },
    playlistContainer: {
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.07)'
    },
    playlistHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '10px'
    },
    playlistHeaderActions: {
        display: 'flex',
        gap: '10px'
    },
    playlistActionButton: {
        // ...styles.baseButton, // Rely on className
        backgroundColor: '#ecf0f1',
        color: '#34495e',
        padding: '8px 12px',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '0.9em',
        fontWeight: 600,
        transition: 'background-color 0.2s ease, transform 0.1s ease, box-shadow 0.2s ease',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        textDecoration: 'none',
        lineHeight: '1.2'
    },
    playlistCloseButton: {
        background: 'none',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
        fontSize: '1.5em',
        fontWeight: 'bold',
        transition: 'background-color 0.2s ease, color 0.2s ease',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        lineHeight: '1',
        padding: '5px',
        width: '30px',
        height: '30px',
        color: '#95a5a6'
    },
    emptyPlaylistMessage: {
        textAlign: 'center',
        padding: '40px 20px',
        color: '#7f8c8d',
        fontSize: '1.1em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    hiddenIframe: {
        position: 'absolute',
        top: '-9999px',
        left: '-9999px',
        width: '1px',
        height: '1px',
        opacity: 0,
        border: 'none',
        visibility: 'hidden'
    },
    miniPlayer: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: '75px',
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e1e5e8',
        boxShadow: '0 -3px 12px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 15px',
        zIndex: 1000
    },
    miniPlayerThumbnail: {
        width: '50px',
        height: '50px',
        objectFit: 'cover',
        borderRadius: '4px',
        marginRight: '15px',
        flexShrink: 0
    },
    miniPlayerInfo: {
        flexGrow: 1,
        overflow: 'hidden',
        marginRight: '15px'
    },
    miniPlayerTitle: {
        fontSize: '1em',
        fontWeight: 600,
        color: '#34495e',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        marginBottom: '2px'
    },
    miniPlayerArtist: {
        fontSize: '0.85em',
        color: '#7f8c8d',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    miniPlayerControls: {
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        flexShrink: 0
    },
    miniPlayerButton: {
        background: 'none',
        border: 'none',
        color: '#34495e',
        fontSize: '1.6em',
        cursor: 'pointer',
        padding: '8px',
        borderRadius: '50%',
        lineHeight: 0,
        transition: 'background-color 0.2s ease, color 0.2s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    miniPlayerStopButton: {
        color: '#e74c3c',
        fontSize: '1.4em'
    }
};
var _c;
__turbopack_context__.k.register(_c, "MusicPlayer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_d38256e9._.js.map
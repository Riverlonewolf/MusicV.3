module.exports = {

"[project]/src/app/layout.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
// สไตล์แบบง่ายๆ
const styles = {
    container: {
        fontFamily: "'Kanit', sans-serif",
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#121212',
        color: 'white',
        minHeight: '100vh',
        position: 'relative'
    },
    header: {
        marginBottom: '30px',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/api/placeholder/1200/300)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '60px 20px',
        borderRadius: '10px'
    },
    mainTitle: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '20px'
    },
    searchContainer: {
        position: 'relative',
        marginBottom: '30px'
    },
    searchIcon: {
        position: 'absolute',
        left: '15px',
        top: '50%',
        transform: 'translateY(-50%)',
        color: '#777',
        fontSize: '1.2rem' // ปรับขนาดไอคอนค้นหา
    },
    searchInput: {
        width: '100%',
        padding: '15px 15px 15px 45px',
        borderRadius: '30px',
        border: 'none',
        backgroundColor: '#282828',
        color: 'white',
        fontSize: '1rem',
        outline: 'none',
        boxSizing: 'border-box' // เพิ่มเพื่อให้ padding ไม่ทำให้เกิน width 100%
    },
    title: {
        fontSize: '1.8rem',
        marginBottom: '20px'
    },
    subtitle: {
        fontSize: '1.5rem',
        marginBottom: '15px'
    },
    buttonContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '15px',
        marginBottom: '30px'
    },
    button: {
        padding: '15px 25px',
        backgroundColor: '#282828',
        border: 'none',
        borderRadius: '8px',
        color: 'white',
        fontSize: '1.1rem',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease'
    },
    'button:hover': {
        backgroundColor: '#383838'
    },
    backButton: {
        padding: '10px 20px',
        backgroundColor: '#282828',
        border: 'none',
        borderRadius: '5px',
        color: 'white',
        marginBottom: '20px',
        cursor: 'pointer'
    },
    songList: {
        listStyleType: 'none',
        padding: 0
    },
    songItem: {
        padding: '12px 10px',
        borderBottom: '1px solid #282828',
        fontSize: '1.1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    playSongButton: {
        background: 'none',
        border: 'none',
        color: '#b3b3b3',
        cursor: 'pointer',
        fontSize: '1.2rem',
        padding: '5px'
    },
    // --- Styles สำหรับ Player Bar ---
    playerBar: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#181818',
        borderTop: '1px solid #282828',
        padding: '10px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxSizing: 'border-box',
        zIndex: 1000 // ให้แสดงทับ content อื่นๆ
    },
    playerControls: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
        marginBottom: '8px'
    },
    controlButton: {
        background: 'none',
        border: 'none',
        color: '#b3b3b3',
        cursor: 'pointer',
        padding: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'color 0.2s ease'
    },
    'controlButton:hover': {
        color: 'white'
    },
    playPauseButton: {
        background: '#b3b3b3',
        border: 'none',
        borderRadius: '50%',
        color: 'black',
        width: '36px',
        height: '36px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'transform 0.1s ease, background-color 0.2s ease'
    },
    'playPauseButton:hover': {
        backgroundColor: 'white',
        transform: 'scale(1.05)'
    },
    progressBarContainer: {
        display: 'flex',
        alignItems: 'center',
        width: '60%',
        maxWidth: '700px',
        gap: '10px'
    },
    timeLabel: {
        fontSize: '0.75rem',
        color: '#b3b3b3',
        minWidth: '40px',
        textAlign: 'center'
    },
    progressBarWrapper: {
        flexGrow: 1,
        position: 'relative',
        height: '12px',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer'
    },
    progressBarBackground: {
        position: 'absolute',
        left: 0,
        top: '4px',
        width: '100%',
        height: '4px',
        backgroundColor: '#535353',
        borderRadius: '2px'
    },
    progressBarForeground: {
        position: 'absolute',
        left: 0,
        top: '4px',
        width: '15%',
        height: '4px',
        backgroundColor: 'white',
        borderRadius: '2px',
        zIndex: 1
    },
    progressBarHandle: {
        position: 'absolute',
        left: '15%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '12px',
        height: '12px',
        backgroundColor: 'white',
        borderRadius: '50%',
        border: 'none',
        padding: 0,
        opacity: 0,
        zIndex: 2,
        cursor: 'pointer',
        transition: 'opacity 0.2s ease'
    }
};
}}),

};

//# sourceMappingURL=src_app_layout_70c6e3a5.js.map
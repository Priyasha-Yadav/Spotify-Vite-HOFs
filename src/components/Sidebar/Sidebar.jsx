import './Sidebar.css'
function Sidebar() {
    return (
    <>
        <div className="sidebar">
            <div className="logo">

            </div>
            <div className="menu">
                <a href=""><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Home.png?raw=true" alt="" />Home</a>
                <br />
                <a href=""><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Search.png?raw=true" alt="" /> Search</a>
                <br />
                <a href=""><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Your%20library.png?raw=true" alt="" /> Your Library</a>
            </div>
            <div className="menu">
                <a href=""><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Create.png?raw=true" alt="" />Create Playlist</a><br />
                <a href=""><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Group%202.png?raw=true" alt="" />Liked Songs</a><br />
                <a href=""><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/your%20episodes.png?raw=true" alt="" />Your Episodes</a>
            </div>
            <div className="menu">
                <a href="">FAV</a>
                <br />
                <a href="">Daily Mix 1</a><br />
                <a href="">Discover Weekly</a>
                <br /><a href="">Malayalam</a><br />
                <a href="">Dance/ Electronic Mix</a><br /><a href="">EDM/ Popular</a>
            </div>
            <div className="install menu">
                <a href="">
                    <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/grommet-icons_install-option.png?raw=true" alt="" />
                    <p>Install App</p>
                </a>
            </div>
        </div>
        </>
        )
}
export default Sidebar
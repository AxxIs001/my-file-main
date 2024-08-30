import React, { useState } from "react";
import './mainPage.css';
import { Link } from "react-router-dom";

function LeftSideBar() {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [showSearch, setShowSearch] = useState(false)


    const handleInstLogo = () => {
        window.location.reload()

    }

    const handleButtonClick = (buttonName) => {
        // Handle click for individual buttons
        if (buttonName === 'search' /*|| buttonName === 'notifications' || buttonName === 'messages'*/) {
            setSidebarOpen(!isSidebarOpen);
        }

        if (isSidebarOpen) {
            document.querySelector(".instImg-main").src = "/src/component/Main_Page/inst icons/inst-icon.png"
            document.querySelector(".logo").style = " height: 30px; margin-bottom: 45px;"
            document.querySelector(".instImg-main").style = " width: 22px; height: 22px;  margin-left: 5px; "
            document.getElementById("mySidepanel").style.width = "385px";
        }
        else {
            document.querySelector(".instImg-main").src = "https://i.imgur.com/zqpwkLQ.png"
            document.querySelector(".instImg-main").style = " width: 105px; margin-left: 0;transition: 0.3s ease-in-out;"
            document.getElementById("mySidepanel").style.width = "0";
        }
    };




    return (
        <div className="sidebar-container">
            <aside className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
                <div className="logo">
                    <img
                        className="instImg-main"
                        src="https://i.imgur.com/zqpwkLQ.png"
                        alt="Instagram logo"
                        onClick={handleInstLogo} // Clicking the logo reopens the sidebar
                    />
                </div>
                <nav>
                    <ul>
                        <li id="home">
                            <Link to="/home" >
                                <img
                                    src="/src/component/Main_Page/inst icons/home-white.png"
                                    alt="Home"
                                    id="home-img"
                                />
                                <span className="closeSidebar">Home</span>
                            </Link>
                        </li>
                        <li id="search">
                            <a onClick={() => handleButtonClick('search')}>
                                <img
                                    src="/src/component/Main_Page/inst icons/search.png"
                                    alt="Search"
                                    id="search-img"
                                />
                                <span className="closeSidebar">Search</span>
                            </a>
                        </li>
                        <li id="explore">
                            <Link to="/explore">
                                <img
                                    src="/src/component/Main_Page/inst icons/explore-icon-512x512-znt7vcm6.png"
                                    alt="Explore"
                                    id="explore-img"
                                />
                                <span className="closeSidebar">Explore</span>
                            </Link>
                        </li>
                        <li id="reels">
                            <Link to="/reels">
                                <img
                                    src="/src/component/Main_Page/inst icons/reels.png"
                                    alt="Reels"
                                    id="reels-img"
                                />
                                <span className="closeSidebar">Reels</span>
                            </Link>
                        </li>
                        <li id="messages" onClick={() => handleButtonClick('messages')}>
                            <Link to="/messages">
                                <img
                                    src="/src/component/Main_Page/inst icons/messenger.png"
                                    alt="Messages"
                                    id="messages-img"
                                />
                                <span className="closeSidebar">Messages</span>
                            </Link>
                        </li>
                        <li id="notifications">
                            <a onClick={() => handleButtonClick('notifications')}>
                                <img
                                    src="/src/component/Main_Page/inst icons/like-white.png"
                                    alt="Notifications"
                                    id="notifications-img"
                                />
                                <span className="closeSidebar">Notifications</span>
                            </a>
                        </li>
                        <li id="create">
                            <a>
                                <img
                                    src="/src/component/Main_Page/inst icons/more.png"
                                    alt="Create"
                                    id="create-img"
                                />
                                <span className="closeSidebar">Create</span>
                            </a>
                        </li>
                        <li id="profile">
                            <Link to="/profile">
                                <img
                                    src="/src/component/Main_Page/inst icons/avatar.png"
                                    alt="Profile"
                                    className="profile-avatar"
                                    id="profile-img"
                                />
                                <span className="closeSidebar">Profile</span>
                            </Link>
                        </li>
                    </ul>
                    <ul className="bottom-navbar">
                        <li>
                            <a href="https://www.threads.net/?xmt=AQGzm_WWeKkt_n6CWNn3YJgPPTB7AwoEcbtlTmlDww1TDmc">
                                <img
                                    src="/src/component/Main_Page/inst icons/Threads_(app)_logo.svg.png"
                                    alt="Threads"
                                />
                                <span className="closeSidebar">Threads</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img
                                    src="/src/component/Main_Page/inst icons/menu-icon-png-3-lines-11552744388mj3lxt5xwv.png"
                                    alt="More"
                                />
                                <span className="closeSidebar">More</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </aside>
            <div id="mySidepanel" class="sidepanel">
                <div className="sidepanel-top">
                    <h1>Search</h1>
                    <div className="sidepanel-search">
                        <input type="search" id="gsearch" name="gsearch" placeholder="Search" />
                        <button> <span>&#10005;</span></button>
                    </div>
                    <h3>Recent</h3>
                </div>
                <p>No recent searches.</p>
            </div>

        </div>
    );
}

export default LeftSideBar;

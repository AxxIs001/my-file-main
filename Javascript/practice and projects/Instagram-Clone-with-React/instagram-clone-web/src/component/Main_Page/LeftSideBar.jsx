import React, { useState, useEffect } from "react";
import './mainPage.css';
import '/src/component/Main_Page/css-files/search-notification-sidepanel.css'
import '/src/component/Main_Page/css-files/sidebar.css'
import '/src/component/Main_Page/css-files/story-section.css'
import '/src/component/Main_Page/css-files/rightside-suggestion.css'
import '/src/component/Main_Page/css-files/newPost.css';
import '/src/component/Main_Page/css-files/dropup.css'
import { Link, useNavigate } from "react-router-dom";
import NewPost from "./NewPost";


function LeftSideBar() {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [activeButton, setActiveButton] = useState('home');

    /*Reload  */
    const handleInstLogo = () => {
        window.location.reload()

    }

    useEffect(() => {
        if (location.pathname === '/messages') {


            //Change the Logo Size 
            document.querySelector(".instImg-main").src = "/src/component/Main_Page/inst icons/inst-icon.png";
            document.querySelector(".logo").style = "height: 30px; margin-bottom: 45px;";
            document.querySelector(".instImg-main").style = "width: 22px; height: 22px; margin-left: 5px;";
        }
    }, [location.pathname]);




    // Change size of Instagram Icon
    const instImgMain = document.querySelector(".instImg-main");

    if (instImgMain) {
        if (isSidebarOpen === true) {
            instImgMain.src = "https://i.imgur.com/zqpwkLQ.png";
            instImgMain.style = "width: 105px; margin-left: 0; transition: 0.3s ease-in-out;";

        }
        else {
            instImgMain.src = "/src/component/Main_Page/inst icons/inst-icon.png";
            instImgMain.style = "width: 22px; height: 22px; margin-left: 5px;";
        }

        const logo = document.querySelector(".logo");
        if (logo && !isSidebarOpen) {
            logo.style = "height: 30px; margin-bottom: 45px;";
        }
    }




    const handleButtonClick = (buttonName) => {

        if (buttonName === 'search') {
            if (activeButton !== 'messages') {
                setSidebarOpen(!isSidebarOpen);
            }


            if (isSidebarOpen || activeButton === 'messages') {
                // Open side panel
                document.getElementById("mySidepanel").style.width = "395px";

            } else {
                // Close the side panel
                document.getElementById("mySidepanel").style.width = "0";

            }

            //When is Notification sidePanel is opened
            if (activeButton === 'notifications') {
                setSidebarOpen(false);
                document.getElementById("myNotification").style.width = "0";
                document.getElementById("mySidepanel").style.width = "395px";
            }



        } else if (buttonName === 'messages') {
            if (isSidebarOpen) {
                setSidebarOpen(false);
            }
            // Close the side panel
            document.getElementById("mySidepanel").style.width = "0";
            document.getElementById("myNotification").style.width = "0";
        }



        /*Notification */
        else if (buttonName === 'notifications') {

            if (activeButton !== 'messages') {
                setSidebarOpen(!isSidebarOpen);
            }


            if (isSidebarOpen || activeButton === 'messages') {
                // Open side panel
                document.getElementById("myNotification").style.width = "395px";
            } else {
                // Close the side panel
                document.getElementById("myNotification").style.width = "0";
            }

            //When is Search side Panel is opened
            if (activeButton === 'search') {
                setSidebarOpen(false);
                document.getElementById("mySidepanel").style.width = "0";
                document.getElementById("myNotification").style.width = "395px";
            }
        }

        else {
            // Handle other buttons (home, explore, reels)
            if (!isSidebarOpen) {
                setSidebarOpen(true);
            }
            document.getElementById("mySidepanel").style.width = "0";
            document.getElementById("myNotification").style.width = "0";
        }

        setActiveButton(buttonName);

    };



    //Show Create New Post
    function openCreateNewPost() {
        document.querySelector(".NewPost-overlay").style.display = "flex";

    }


    //Log Out

    const navigate = useNavigate();

    const handleLogOut = () => {
        navigate('/logOut');
    };



    return (
        <div className="sidebar-container">
            <aside className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
                <div className="logo">
                    <img
                        className="instImg-main"
                        src="https://i.imgur.com/zqpwkLQ.png"
                        alt="Instagram logo"
                        onClick={handleInstLogo}
                    />
                </div>
                <nav>
                    <ul>
                        <li id="home">
                            <Link to="/home" onClick={() => handleButtonClick('home')}>
                                <img
                                    src={activeButton === 'home' ? "/src/component/Main_Page/inst icons/home-black.png" : "/src/component/Main_Page/inst icons/home-white.png"}
                                    alt="Home"
                                    id="home-img"
                                />
                                <span className="closeSidebar">Home</span>
                            </Link>
                        </li>
                        <li id="search">
                            <a onClick={() => handleButtonClick('search')}>
                                <img
                                    src={activeButton === 'search' ? "/src/component/Main_Page/inst icons/search-black.png" : "/src/component/Main_Page/inst icons/search.png"}
                                    alt="Search"
                                    id="search-img"
                                />
                                <span className="closeSidebar">Search</span>
                            </a>
                        </li>
                        <li id="explore">
                            <Link to="/explore" onClick={() => handleButtonClick('explore')} >
                                <img
                                    src={activeButton === 'explore' ? "/src/component/Main_Page/inst icons/explore-icon-512x512-znt7vcm6-black.png" : "/src/component/Main_Page/inst icons/explore-icon-512x512-znt7vcm6.png"}
                                    alt="Explore"
                                    id="explore-img"
                                />
                                <span className="closeSidebar">Explore</span>
                            </Link>
                        </li>
                        <li id="reels">
                            <Link to="/reels" onClick={() => handleButtonClick('reels')}>
                                <img
                                    src={activeButton === 'reels' ? "/src/component/Main_Page/inst icons/reels-black.png" : "/src/component/Main_Page/inst icons/reels.png"}
                                    alt="Reels"
                                    id="reels-img"
                                />
                                <span className="closeSidebar">Reels</span>
                            </Link>
                        </li>
                        <li id="messages" onClick={() => handleButtonClick('messages')}>
                            <Link to="/messages" >
                                <img
                                    src={activeButton === "messages" ? "/src/component/Main_Page/inst icons/messenger-black.png" : "/src/component/Main_Page/inst icons/messenger.png"}
                                    alt="Messages"
                                    id="messages-img"
                                />
                                <span className="closeSidebar">Messages</span>
                            </Link>
                        </li>
                        <li id="notifications">
                            <a onClick={() => handleButtonClick('notifications')}>
                                <img
                                    src={activeButton === "notifications" ? "/src/component/Main_Page/inst icons/like-black.png" : "/src/component/Main_Page/inst icons/like-white.png"}
                                    alt="Notifications"
                                    id="notifications-img"
                                />
                                <span className="closeSidebar">Notifications</span>
                            </a>
                        </li>
                        <li id="create" onClick={openCreateNewPost}>
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
                        <li className="more-btn" onClick={() => {
                            const dropupContent = document.querySelector(".dropup-content");

                            if (dropupContent.style.display === "none" || dropupContent.style.display === "") {
                                dropupContent.style.display = "block";
                            } else {
                                dropupContent.style.display = "none";
                            }

                        }}>
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



            {/*Search Side Panel*/}
            <div id="mySidepanel" className="sidepanel">
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


            <div id="myNotification" className="notification">
                <div className="notification-header">

                    <div className="notification-image">
                        <img src=" /src/component/Main_Page/inst icons/like-white.png" alt="" />
                    </div>
                    <a>Activity On Your Posts</a>
                    <a className="notification-text"><span>When someone likes or comments on one of</span> your posts, you'll see it here.</a>
                </div>






                <div className="notification-suggestion">
                    <h3>Suggested for you</h3>
                    <div class="suggestions-section">
                        <ul class="suggestions-list">
                            <li class="suggestion">
                                <img src="https://via.placeholder.com/40" alt="Suggestion Avatar" />
                                <div class="suggestion-info">
                                    <span class="username">phuonggnhiii_</span>
                                    <span className="user-name">Trần Phương Nhi</span>
                                    <span class="followed-by">Followed by ntnguyeet + 1 more</span>
                                </div>
                                <a href="#" class="notification-follow-btn">Follow</a>
                            </li>
                            <li class="suggestion">
                                <img src="https://via.placeholder.com/40" alt="Suggestion Avatar" />
                                <div class="suggestion-info">
                                    <span class="username">ig.cheese_</span>
                                    <span className="user-name">Trúc</span>
                                    <span class="followed-by">Followed by ntnguyeet + 1 more</span>
                                </div>
                                <a href="#" class="notification-follow-btn">Follow</a>
                            </li>
                            <li class="suggestion">
                                <img src="https://via.placeholder.com/40" alt="Suggestion Avatar" />
                                <div class="suggestion-info">
                                    <span class="username">machthuu</span>
                                    <span className="user-name">Mạch Thư</span>
                                    <span class="followed-by">Followed by ninixinh_</span>
                                </div>
                                <a href="#" class="notification-follow-btn">Follow</a>
                            </li>
                            <li class="suggestion">
                                <img src="https://via.placeholder.com/40" alt="Suggestion Avatar" />
                                <div class="suggestion-info">
                                    <span class="username">phuonggnhiii_</span>
                                    <span className="user-name">Trần Phương Nhi</span>
                                    <span class="followed-by">Followed by ntnguyeet + 3 more</span>
                                </div>
                                <a href="#" class="notification-follow-btn">Follow</a>
                            </li>
                            <li class="suggestion">
                                <img src="https://via.placeholder.com/40" alt="Suggestion Avatar" />
                                <div class="suggestion-info">
                                    <span class="username">lybaongocxinh</span>
                                    <span className="user-name">🐰</span>
                                    <span class="followed-by">Followed by ninixinh_</span>
                                </div>
                                <a href="#" class="notification-follow-btn">Follow</a>
                            </li>




                            <li class="suggestion">
                                <img src="https://via.placeholder.com/40" alt="Suggestion Avatar" />
                                <div class="suggestion-info">
                                    <span class="username">phuonggnhiii_</span>
                                    <span className="user-name">Trần Phương Nhi</span>
                                    <span class="followed-by">Followed by ntnguyeet + 1 more</span>
                                </div>
                                <a href="#" class="notification-follow-btn">Follow</a>
                            </li>
                            <li class="suggestion">
                                <img src="https://via.placeholder.com/40" alt="Suggestion Avatar" />
                                <div class="suggestion-info">
                                    <span class="username">ig.cheese_</span>
                                    <span className="user-name">Trúc</span>
                                    <span class="followed-by">Followed by ntnguyeet + 1 more</span>
                                </div>
                                <a href="#" class="notification-follow-btn">Follow</a>
                            </li>
                            <li class="suggestion">
                                <img src="https://via.placeholder.com/40" alt="Suggestion Avatar" />
                                <div class="suggestion-info">
                                    <span class="username">machthuu</span>
                                    <span className="user-name">Mạch Thư</span>
                                    <span class="followed-by">Followed by ninixinh_</span>
                                </div>
                                <a href="#" class="notification-follow-btn">Follow</a>
                            </li>
                            <li class="suggestion">
                                <img src="https://via.placeholder.com/40" alt="Suggestion Avatar" />
                                <div class="suggestion-info">
                                    <span class="username">phuonggnhiii_</span>
                                    <span className="user-name">Trần Phương Nhi</span>
                                    <span class="followed-by">Followed by ntnguyeet + 3 more</span>
                                </div>
                                <a href="#" class="notification-follow-btn">Follow</a>
                            </li>
                            <li class="suggestion">
                                <img src="https://via.placeholder.com/40" alt="Suggestion Avatar" />
                                <div class="suggestion-info">
                                    <span class="username">lybaongocxinh</span>
                                    <span className="user-name">🐰</span>
                                    <span class="followed-by">Followed by ninixinh_</span>
                                </div>
                                <a href="#" class="notification-follow-btn">Follow</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            {/*Create New Post  */}
            <NewPost />

            {/*Dropup */}
            <div class="menu-container">
                <div class="dropup-content">
                    <div className="dropup-up">
                        <a href="#"><img src="/src/component/Main_Page/inst icons/setting.png" alt="" />Settings</a>
                        <a href="#"><img src="/src/component/Main_Page/inst icons/setting.png" alt="" />Your activity</a>
                        <a href="#"><img src="/src/component/Main_Page/inst icons/setting.png" alt="" />Saved</a>
                        <a href="#"><img src="/src/component/Main_Page/inst icons/setting.png" alt="" />Switch appearance</a>
                        <a href="#"><img src="/src/component/Main_Page/inst icons/setting.png" alt="" />Report a problem</a>
                    </div>
                    <a href="#" className="switchs" >Switch accounts</a>
                    <a className="logOut" onClick={handleLogOut}>Log out</a>
                </div>
            </div>

        </div>
    );
}

export default LeftSideBar;

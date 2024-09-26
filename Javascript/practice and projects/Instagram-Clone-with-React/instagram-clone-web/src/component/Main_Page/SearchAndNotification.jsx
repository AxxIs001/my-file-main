import React, { useState, useEffect } from "react";



function SeacrhAndNotification() {
    const [activeButton, setActiveButton] = useState('home');


    const handleButtonClick = (buttonName) => {

        if (buttonName === 'search') {
            if (activeButton !== 'messages') {
                setSidebarOpen(!isSidebarOpen);
            }



            if (isSidebarOpen || activeButton === 'messages') {
                // Open side panel
                document.getElementById("mySidepanel").style.width = "395px";


                //Change the Logo Size 
                document.querySelector(".instImg-main").src = "/src/component/Main_Page/inst icons/inst-icon.png";
                document.querySelector(".logo").style = "height: 30px; margin-bottom: 45px;";
                document.querySelector(".instImg-main").style = "width: 22px; height: 22px; margin-left: 5px;";

            } else {

                //Change the Logo Size 
                document.querySelector(".instImg-main").src = "https://i.imgur.com/zqpwkLQ.png";
                document.querySelector(".instImg-main").style = "width: 105px; margin-left: 0; transition: 0.3s ease-in-out;";
                // Close the side panel
                document.getElementById("mySidepanel").style.width = "0";

            }

            //When is Notification side Panel is opened
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

            //Change the Logo Size 
            document.querySelector(".instImg-main").src = "/src/component/Main_Page/inst icons/inst-icon.png";
            document.querySelector(".logo").style = "height: 30px; margin-bottom: 45px;";
            document.querySelector(".instImg-main").style = "width: 22px; height: 22px; margin-left: 5px;";
        }



        /*Notification */
        else if (buttonName === 'notifications') {

            if (activeButton !== 'messages') {
                setSidebarOpen(!isSidebarOpen);
            }


            if (isSidebarOpen || activeButton === 'messages') {
                // Open side panel
                document.getElementById("myNotification").style.width = "395px";
                //Change the Logo Size
                document.querySelector(".instImg-main").src = "/src/component/Main_Page/inst icons/inst-icon.png";
                document.querySelector(".logo").style = "height: 30px; margin-bottom: 45px;";
                document.querySelector(".instImg-main").style = "width: 22px; height: 22px; margin-left: 5px;";

            } else {
                //Change the Logo Size /
                document.querySelector(".instImg-main").src = "https://i.imgur.com/zqpwkLQ.png";
                document.querySelector(".instImg-main").style = "width: 105px; margin-left: 0; transition: 0.3s ease-in-out;";
                // Close the side panel
                document.getElementById("myNotification").style.width = "0";
            }

            //When is Search side Panel is opened
            if (activeButton === 'search') {
                setSidebarOpen(false);
                document.getElementById("mySidepanel").style.width = "0";
                document.getElementById("myNotification").style.width = "395px";
            }
        } else {
            // Handle other buttons (home, explore, reels)
            if (!isSidebarOpen) {
                setSidebarOpen(true);
            }
            //Change the Logo Size 
            document.querySelector(".instImg-main").src = "https://i.imgur.com/zqpwkLQ.png";
            document.querySelector(".instImg-main").style = "width: 105px; margin-left: 0; transition: 0.3s ease-in-out;";
            document.getElementById("mySidepanel").style.width = "0";
            document.getElementById("myNotification").style.width = "0";
        }

        setActiveButton(buttonName);

    };

    return (
        <>
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
        </>
    )

}


export default SeacrhAndNotification;
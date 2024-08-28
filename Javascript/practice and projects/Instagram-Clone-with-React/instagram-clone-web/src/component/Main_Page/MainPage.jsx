import React from "react";
import './mainPage.css'


function MainPage() {
    return (
        <div className="main-page-body">
            <div class="container">
                <aside class="sidebar">
                    <div class="logo">
                        <img className="instImg-main" src="https://i.imgur.com/zqpwkLQ.png" alt="Instagram logo" />
                    </div>
                    <nav>
                        <ul>
                            <li><a href="#"><img src="/src/component/Main_Page/inst icons/home-white.png" alt="Home" />Home</a></li>
                            <li><a href="#"><img src="/src/component/Main_Page/inst icons/search.png" alt="Search" />Search</a></li>
                            <li><a href="#"><img src="/src/component/Main_Page/inst icons/explore-icon-512x512-znt7vcm6.png" alt="Explore" />Explore</a></li>
                            <li><a href="#"><img src="/src/component/Main_Page/inst icons/reels.png" alt="Reels" />Reels</a></li>
                            <li><a href="#"><img src="/src/component/Main_Page/inst icons/messenger.png" alt="Messages" />Messages</a></li>
                            <li><a href="#"><img src="/src/component/Main_Page/inst icons/like-white.png" alt="Notifications" />Notifications</a></li>
                            <li><a href="#"><img src="/src/component/Main_Page/inst icons/more.png" alt="Create" />Create</a></li>
                            <li><a href="#"><img src="/src/component/Main_Page/inst icons/avatar.png" alt="Profile" className="profile-avatar" />Profile</a></li>
                        </ul>
                        <ul className="bottom-navbar">
                            <li><a href="#"><img src="/src/component/Main_Page/inst icons/Threads_(app)_logo.svg.png" alt="Create" />Threads</a></li>
                            <li ><a href="#"><img src="/src/component/Main_Page/inst icons/menu-icon-png-3-lines-11552744388mj3lxt5xwv.png" alt="Create" />More</a></li>
                        </ul>
                    </nav>
                </aside>

                <div className="story-mainContent">
                    {/* Story Section */}
                    <div className="story-section">

                        <div className="story">
                            <div className="story-border">
                                <img src="/src/component/Main_Page/inst icons/1Chika.jpg" alt="User Story" className="story-pic" />
                            </div>
                            <span className="story-username">ntrhi2706</span>
                        </div>
                        <div className="story">
                            <div className="story-border">
                                <img src="/src/component/Main_Page/inst icons/1Chika.jpg" alt="User Story" className="story-pic" />
                            </div>
                            <span className="story-username"> phuonggnhiii_</span>
                        </div>
                        <div className="story">
                            <div className="story-border">
                                <img src="/src/component/Main_Page/inst icons/1Chika.jpg" alt="User Story" className="story-pic" />
                            </div>
                            <span className="story-username">phuonggnhiii_</span>
                        </div>
                        <div className="story">
                            <div className="story-border">
                                <img src="/src/component/Main_Page/inst icons/1Chika.jpg" alt="User Story" className="story-pic" />
                            </div>
                            <span className="story-username">phuonggnhiii_</span>
                        </div>
                        <div className="story">
                            <div className="story-border">
                                <img src="/src/component/Main_Page/inst icons/1Chika.jpg" alt="User Story" className="story-pic" />
                            </div>
                            <span className="story-username">phuonggnhiii_</span>
                        </div>
                        <div className="story">
                            <div className="story-border">
                                <img src="/src/component/Main_Page/inst icons/1Chika.jpg" alt="User Story" className="story-pic" />
                            </div>
                            <span className="story-username">phuonggnhiii_</span>
                        </div>
                        <div className="story">
                            <div className="story-border">
                                <img src="/src/component/Main_Page/inst icons/1Chika.jpg" alt="User Story" className="story-pic" />
                            </div>
                            <span className="story-username">phuonggnhiii_</span>
                        </div>
                        <div className="story">
                            <div className="story-border">
                                <img src="/src/component/Main_Page/inst icons/1Chika.jpg" alt="User Story" className="story-pic" />
                            </div>
                            <span className="story-username">ntrhi2706</span>
                        </div>
                        <div className="story">
                            <div className="story-border">
                                <img src="/src/component/Main_Page/inst icons/1Chika.jpg" alt="User Story" className="story-pic" />
                            </div>
                            <span className="story-username">ntrhi2706</span>
                        </div>
                        <div className="story">
                            <div className="story-border">
                                <img src="/src/component/Main_Page/inst icons/1Chika.jpg" alt="User Story" className="story-pic" />
                            </div>
                            <span className="story-username">ntrhi2706</span>
                        </div>

                        {/* Add more stories here */}

                    </div>

                    <main class="main-content">



                        <div class="feed">
                            {/* Post  1*/}
                            <div class="post">
                                <div class="post-header">
                                    <img src="/src/component/Main_Page/inst icons/1Chika.jpg" alt="Profile Picture" class="profile-pic" />
                                    <div class="post-user-info">
                                        <a class="username">ntrhi2706</a>
                                        <span class="post-time"><li><span>2w</span></li></span>
                                    </div>
                                </div>
                                <div class="post-image">
                                    <img src="/src/component/Main_Page/inst icons/1Chika.jpg" alt="Post Image" className="posted-img" />
                                </div>
                                <div className="post-bottom">
                                    <div class="post-actions">
                                        <span><img src="/src/component/Main_Page/inst icons/heart-white.png" alt="" className="heart-white" /></span>
                                        <span><img src="/src/component/Main_Page/inst icons/chat.png" alt="" className="sendBtn-popup" /></span>
                                        <span><img src="/src/component/Main_Page/inst icons/send.png" alt="" className="sendBtn" /></span>
                                        <span><img src="/src/component/Main_Page/inst icons/bookmark-white.png" alt="" className="bookmarkBtn" /></span>
                                    </div>
                                    <span className="likes-amount"> 10 likes</span>
                                    <div className="autor-comment">
                                        <p><span>confinonbe </span>A lion pair will mate every 20 minutes for 4 days and nights, with each session lasting 1 minute! </p>
                                        <p className="comment-translation">See transation</p>
                                        <p className="view-comments">View all 26 comments </p>
                                    </div>

                                </div>

                                <div class="comment-section">
                                    <input type="text" placeholder="Add a comment..." />
                                    <button className="postBtn">Post</button>
                                    <button className="emojiBtn"><img src="/src/component/Main_Page/inst icons/emoji.png" alt="" /></button>
                                </div>
                            </div>

                            {/* Post  2*/}

                            <div class="post">
                                <div class="post-header">
                                    <img src="/src/component/Main_Page/inst icons/1Chika.jpg" alt="Profile Picture" class="profile-pic" />
                                    <div class="post-user-info">
                                        <a class="username">ntrhi2706</a>
                                        <span class="post-time"><li><span>2w</span></li></span>
                                    </div>
                                </div>
                                <div class="post-image">
                                    <img src="/src/component/Main_Page/inst icons/me.jpg" alt="Post Image" className="posted-img" />
                                </div>
                                <div className="post-bottom">
                                    <div class="post-actions">
                                        <span><img src="/src/component/Main_Page/inst icons/heart-white.png" alt="" className="heart-white" /></span>
                                        <span><img src="/src/component/Main_Page/inst icons/chat.png" alt="" /></span>
                                        <span><img src="/src/component/Main_Page/inst icons/send.png" alt="" /></span>
                                        <span><img src="/src/component/Main_Page/inst icons/bookmark-white.png" alt="" className="bookmarkBtn" /></span>

                                    </div>
                                    <span className="likes-amount"> 10 likes</span>
                                    <div className="autor-comment">
                                        <p><span>confinonbe </span>A lion pair will mate every 20 minutes for 4 days and nights, with each session lasting 1 minute! </p>
                                        <p className="comment-translation">See transation</p>
                                        <p className="view-comments">View all 26 comments </p>
                                    </div>

                                </div>

                                <div class="comment-section">
                                    <input type="text" placeholder="Add a comment..." />
                                    <button className="postBtn">Post</button>
                                    <button className="emojiBtn"><img src="/src/component/Main_Page/inst icons/emoji.png" alt="" /></button>
                                </div>
                            </div>

                            {/* Post  3*/}

                            <div class="post">
                                <div class="post-header">
                                    <img src="/src/component/Main_Page/inst icons/1Chika.jpg" alt="Profile Picture" class="profile-pic" />
                                    <div class="post-user-info">
                                        <a class="username">ntrhi2706</a>
                                        <span class="post-time"><li><span>2w</span></li></span>
                                    </div>
                                </div>
                                <div class="post-image">
                                    <video className="posted-img" controls>
                                        <source src="/src/component/Main_Page/inst icons/dota-2-windranger-arcana-desktop-wallpaperwaifu-com.mp4" type="video/mp4" />
                                    </video>
                                </div>
                                <div className="post-bottom">
                                    <div class="post-actions">
                                        <span><img src="/src/component/Main_Page/inst icons/heart-white.png" alt="" className="heart-white" /></span>
                                        <span><img src="/src/component/Main_Page/inst icons/chat.png" alt="" /></span>
                                        <span><img src="/src/component/Main_Page/inst icons/send.png" alt="" /></span>
                                        <span><img src="/src/component/Main_Page/inst icons/bookmark-white.png" alt="" className="bookmarkBtn" /></span>
                                    </div>
                                    <span className="likes-amount"> 10 likes</span>
                                    <div className="autor-comment">
                                        <p><span>confinonbe </span>A lion pair will mate every 20 minutes for 4 days and nights, with each session lasting 1 minute! </p>
                                        <p className="comment-translation">See transation</p>
                                        <p className="view-comments">View all 26 comments </p>
                                    </div>

                                </div>

                                <div class="comment-section">
                                    <input type="text" placeholder="Add a comment..." />
                                    <button className="postBtn">Post</button>
                                    <button className="emojiBtn"><img src="/src/component/Main_Page/inst icons/emoji.png" alt="" /></button>
                                </div>
                            </div>
                        </div>

                        <div >
                            <div class="right-sidebar">
                                <div class="profile-section">
                                    <img src="/src/component/Main_Page/inst icons/avatar.png" alt="Profile Avatar" class="profile-avatar" />
                                    <div class="profile-info">
                                        <span class="username">confinonbe</span>
                                        <span class="fullname">Axis Abken</span>

                                    </div>
                                    <a href="#" class="switch-link">Switch</a>
                                </div>

                                <div class="suggestions-section">
                                    <div class="suggestions-header">
                                        <span>Suggested for you</span>
                                        <a href="#" class="see-all">See All</a>
                                    </div>

                                    <ul class="suggestions-list">
                                        <li class="suggestion">
                                            <img src="https://via.placeholder.com/40" alt="Suggestion Avatar" />
                                            <div class="suggestion-info">
                                                <span class="username">phuonggnhiii_</span>
                                                <span class="followed-by">Followed by ntnguyeet + 1 more</span>
                                            </div>
                                            <a href="#" class="follow-btn">Follow</a>
                                        </li>
                                        <li class="suggestion">
                                            <img src="https://via.placeholder.com/40" alt="Suggestion Avatar" />
                                            <div class="suggestion-info">
                                                <span class="username">ig.cheese_</span>
                                                <span class="followed-by">Followed by ntnguyeet + 1 more</span>
                                            </div>
                                            <a href="#" class="follow-btn">Follow</a>
                                        </li>
                                        <li class="suggestion">
                                            <img src="https://via.placeholder.com/40" alt="Suggestion Avatar" />
                                            <div class="suggestion-info">
                                                <span class="username">machthuu</span>
                                                <span class="followed-by">Followed by ninixinh_</span>
                                            </div>
                                            <a href="#" class="follow-btn">Follow</a>
                                        </li>
                                        <li class="suggestion">
                                            <img src="https://via.placeholder.com/40" alt="Suggestion Avatar" />
                                            <div class="suggestion-info">
                                                <span class="username">phuonggnhiii_</span>
                                                <span class="followed-by">Followed by ntnguyeet + 3 more</span>
                                            </div>
                                            <a href="#" class="follow-btn">Follow</a>
                                        </li>
                                        <li class="suggestion">
                                            <img src="https://via.placeholder.com/40" alt="Suggestion Avatar" />
                                            <div class="suggestion-info">
                                                <span class="username">lybaongocxinh</span>
                                                <span class="followed-by">Followed by ninixinh_</span>
                                            </div>
                                            <a href="#" class="follow-btn">Follow</a>
                                        </li>

                                    </ul>
                                </div>

                                <div class="side-footer">
                                    <ul class="side-footer-links">
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">Help</a></li>
                                        <li><a href="#">Press</a></li>
                                        <li><a href="#">API</a></li>
                                        <li><a href="#">Jobs</a></li>
                                        <li><a href="#">Privacy</a></li>
                                        <li><a href="#">Terms</a></li>
                                        <li><a href="#">Locations</a></li>
                                        <li><a href="#">Language</a></li>
                                        <li><a href="#">Meta Verified</a></li>
                                    </ul>
                                    <span>© 2024 INSTAGRAM FROM META</span>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>

    )
}


export default MainPage;
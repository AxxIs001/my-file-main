import React from "react";
import './mainPage.css'


function Feed() {
    return (
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
                        <span><img src="/src/component/Main_Page/inst icons/bookmark.png" alt="" className="bookmarkBtn" /></span>
                    </div>
                    <span className="likes-amount"> 10 likes</span>
                    <div className="autor-comment">
                        <p><span>confinonbe </span>A lion pair will mate every 20 minutes for 4 days and nights, with each session lasting 1 minute! </p>
                        <p className="comment-translation">See translation</p>
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
                        <span><img src="/src/component/Main_Page/inst icons/bookmark.png" alt="" className="bookmarkBtn" /></span>

                    </div>
                    <span className="likes-amount"> 10 likes</span>
                    <div className="autor-comment">
                        <p><span>confinonbe </span>A lion pair will mate every 20 minutes for 4 days and nights, with each session lasting 1 minute! </p>
                        <p className="comment-translation">See translation</p>
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
                        <span><img src="/src/component/Main_Page/inst icons/bookmark.png" alt="" className="bookmarkBtn" /></span>
                    </div>
                    <span className="likes-amount"> 10 likes</span>
                    <div className="autor-comment">
                        <p><span>confinonbe </span>A lion pair will mate every 20 minutes for 4 days and nights, with each session lasting 1 minute! </p>
                        <p className="comment-translation">See translation</p>
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


    )

}

export default Feed;
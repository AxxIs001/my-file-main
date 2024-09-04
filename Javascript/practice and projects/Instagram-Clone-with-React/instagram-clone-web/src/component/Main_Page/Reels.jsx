import React, { useState } from "react";
import '/src/component/Main_Page/css-files/reels.css'


function Reels() {

    window.addEventListener("wheel", function (event) {

        event.preventDefault();

        if (event.deltaY > 0) {
            window.scrollBy({ top: 820, left: 0, behavior: 'smooth' });
        } else {
            window.scrollBy({ top: -820, left: 0, behavior: 'smooth' });
        }
    }, { passive: false });



    return (
        <>
            <div class="reel-interface">
                <div class="video-container">
                    <video autoplay loop controls>
                        <source src="/src/component/Main_Page/inst icons/dota-2-windranger-arcana-desktop-wallpaperwaifu-com.mp4" type="video/mp4" />
                    </video>
                </div>
                <div class="actions">
                    <div class="action-button">
                        <img className="like-icon" src="/src/component/Main_Page/inst icons/like-white.png" alt="Like" />
                        <span>91.4K</span>
                    </div>
                    <div class="action-button">
                        <img src="/src/component/Main_Page/inst icons/chat.png" alt="Comment" />
                        <span>2,459</span>
                    </div>
                    <div class="share-button" >
                        <img src="/src/component/Main_Page/inst icons/bookmark.png" alt="Share" />
                    </div>
                    <div class="action-button">
                        <img className="dot-menu" src="/src/component/Main_Page/inst icons/3-dot-menu.png" alt="Comment" />

                    </div>
                </div>
                <div class="reel-footer">
                    <div class="user-info">
                        <img src="/src/component/Main_Page/inst icons/1Chika.jpg" alt="User Avatar" class="avatar" />
                        <p class="username">sapphirefires</p>
                        <button class="follow-btn">Follow</button>

                    </div>
                    <div class="comment-info">
                        <p class="comment">#Awwwh!</p>

                    </div>
                    <div class="location-music">
                        <p class="music">🎵 Final audio prince_rajasthan</p>
                        <p className="location">⚲ Encino</p>
                    </div>
                </div>
            </div>



            <div class="reel-interface">
                <div class="video-container">
                    <video autoplay loop controls>
                        <source src="/src/component/Main_Page/inst icons/dota-2-windranger-arcana-desktop-wallpaperwaifu-com.mp4" type="video/mp4" />
                    </video>


                </div>
                <div class="actions">
                    <div class="action-button">
                        <img className="like-icon" src="/src/component/Main_Page/inst icons/like-white.png" alt="Like" />
                        <span>91.4K</span>
                    </div>
                    <div class="action-button">
                        <img src="/src/component/Main_Page/inst icons/chat.png" alt="Comment" />
                        <span>2,459</span>
                    </div>
                    <div class="share-button" >
                        <img src="/src/component/Main_Page/inst icons/bookmark.png" alt="Share" />
                    </div>
                    <div class="action-button">
                        <img className="dot-menu" src="/src/component/Main_Page/inst icons/3-dot-menu.png" alt="Comment" />

                    </div>
                </div>
                <div class="reel-footer">
                    <div class="user-info">
                        <img src="/src/component/Main_Page/inst icons/1Chika.jpg" alt="User Avatar" class="avatar" />
                        <p class="username">sapphirefires</p>
                        <button class="follow-btn">Follow</button>

                    </div>
                    <div class="comment-info">
                        <p class="comment">#Awwwh!</p>

                    </div>
                    <div class="location-music">
                        <p class="music">🎵 Final audio prince_rajasthan</p>
                        <p className="location">⚲ Encino</p>
                    </div>
                </div>
            </div>



            {/*Not necessary, will be deleted, just for check */}

            <div class="reel-interface">
                <div class="video-container">
                    <video autoplay loop controls>
                        <source src="/src/component/Main_Page/inst icons/dota-2-windranger-arcana-desktop-wallpaperwaifu-com.mp4" type="video/mp4" />
                    </video>
                </div>
                <div class="actions">
                    <div class="action-button">
                        <img className="like-icon" src="/src/component/Main_Page/inst icons/like-white.png" alt="Like" />
                        <span>91.4K</span>
                    </div>
                    <div class="action-button">
                        <img src="/src/component/Main_Page/inst icons/chat.png" alt="Comment" />
                        <span>2,459</span>
                    </div>
                    <div class="share-button" >
                        <img src="/src/component/Main_Page/inst icons/bookmark.png" alt="Share" />
                    </div>
                    <div class="action-button">
                        <img className="dot-menu" src="/src/component/Main_Page/inst icons/3-dot-menu.png" alt="Comment" />

                    </div>
                </div>
                <div class="reel-footer">
                    <div class="user-info">
                        <img src="/src/component/Main_Page/inst icons/1Chika.jpg" alt="User Avatar" class="avatar" />
                        <p class="username">sapphirefires</p>
                        <button class="follow-btn">Follow</button>

                    </div>
                    <div class="comment-info">
                        <p class="comment">#Awwwh!</p>

                    </div>
                    <div class="location-music">
                        <p class="music">🎵 Final audio prince_rajasthan</p>
                        <p className="location">⚲ Encino</p>
                    </div>
                </div>
            </div>

        </>

    )

}

export default Reels;
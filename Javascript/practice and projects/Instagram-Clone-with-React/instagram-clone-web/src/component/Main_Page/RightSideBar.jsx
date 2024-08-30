import React from "react";
import './mainPage.css'

function RightSideBar() {
    return (

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
                    <li><a href="https://about.instagram.com/">About</a></li>
                    <li><a href="https://help.instagram.com/">Help</a></li>
                    <li><a href="https://about.instagram.com/blog">Press</a></li>
                    <li><a href="https://developers.facebook.com/docs/instagram-platform">API</a></li>
                    <li><a href="https://about.instagram.com/about-us/careers">Jobs</a></li>
                    <li><a href="https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect">Privacy</a></li>
                    <li><a href="https://help.instagram.com/581066165581870/">Terms</a></li>
                    <li><a href="#">Locations</a></li>
                    <li><a href="#">Language</a></li>
                    <li><a href="https://www.instagram.com/accounts/meta_verified/?entrypoint=web_footer">Meta Verified</a></li>
                </ul>
                <span>© 2024 INSTAGRAM FROM META</span>
            </div>
        </div>

    )
}

export default RightSideBar;
import React from "react";
import '/src/component/Main_Page/css-files/profile.css'
import { Footer } from "../login_components/LoginPage";


function Profile() {
    return (
        <div class="profile-body">
            <div class="profile-container">
                <main class="profile-content">

                    <div class="profile-information">
                        <div class="profile-picture"><img src="/src/component/Main_Page/inst icons/profile-avatar.png" alt="" /></div>
                        <div className="profile-header">
                            <div class="profile-details">
                                <p>confinonbe</p>
                                <button>Edit profile</button>
                                <button>View archive</button>
                                <img src="/src/component/Main_Page/inst icons/setting.png" alt="" />
                            </div>
                            <div class="profile-stats">
                                <p><span>0</span> posts</p>
                                <p className="followers"><span>0</span> followers</p>
                                <p className="following"><span>34</span> following</p>
                            </div>
                            <div class="profile-name">
                                <p>Axis Abken</p>
                            </div>
                        </div>
                    </div>
                    <div className="plus-icon">
                        <span><img src="/src/component/Main_Page/inst icons/plus-icon.png" alt="" />  <p>New</p></span>
                    </div>

                    <div className="post-saved-tagged">
                        <span><img src="/src/component/Main_Page/inst icons/gallery.png" alt="" />Posts</span>
                        <span><img src="/src/component/Main_Page/inst icons/bookmark.png" alt="" />Saved</span>
                        <span><img src="/src/component/Main_Page/inst icons/tagged.png" alt="" />Tagged</span>
                    </div>
                    <section class="profile-photo-share">
                        <div className="profile-photo-share-background">
                            <img src="/src/component/Main_Page/inst icons/share-photos.png" alt="" />
                            <h1>Share Photos</h1>
                            <p>When you share photos, they will appear on your profile.</p>
                            <button>Share your first photo</button>
                        </div>

                    </section>
                    <div className="profile-footer"><Footer /></div>

                </main>
            </div>
        </div>


    )


}

export default Profile;
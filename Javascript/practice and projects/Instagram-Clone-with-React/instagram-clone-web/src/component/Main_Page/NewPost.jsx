import React from "react";
import '/src/component/Main_Page/css-files/newPost.css';

function NewPost() {



    function closeCreateNewPost() {
        document.querySelector(".NewPost-overlay").style.display = "none";
    }

    return (
        <div>
            <div className="NewPost-overlay">
                <button className="close-NewPost-button" onClick={closeCreateNewPost}>✖</button>
                <div className="NewPost-container">
                    <div className="NewPost-header">
                        <p>Create new post</p>
                    </div>
                    <div className="NewPost-body">
                        <img src="/src/component/Main_Page/inst icons/drag-photos-videos.png" alt="" />
                        <p>Drag photos and videos here</p>
                        <button className="NewPost-button">Select from computer</button>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default NewPost;
import React from "react";
import '/src/component/Main_Page/css-files/messages.css'


function Messages() {


    function openModalBtn() {
        document.querySelector(".modal-overlay").style.display = "flex";
    }

    function closeModalBtn() {
        document.querySelector(".modal-overlay").style.display = "none";
    }

    return (
        <div>
            <div className="message-container">
                <div className="message-leftBorder">
                    <header className="message-header">
                        <div className="user-info">
                            <span className="username">confinonbe <img src="/src/component/Main_Page/inst icons/down-arrow.png" alt="" /></span>
                            <button className="new-message-button" onClick={openModalBtn}>
                                <img src="/src/component/Main_Page/inst icons/new-message.png" alt="New Message" />
                            </button>
                        </div>
                    </header>

                    <div className="messages-list" >
                        <div className="note-section">
                            <div className="note-icon">
                                <img src="/src/component/Main_Page/inst icons/avatar.png" alt="Avatar" />
                            </div>
                            <span>Your note</span>
                        </div>
                        <div className="message-requests">
                            <h3>Messages</h3>
                            <p>Requests</p>
                        </div>
                        <div className="message">
                            <div className="message-avatar">
                                <img src="/src/component/Main_Page/inst icons/avatar.png" alt="Kill System" />
                            </div>
                            <div className="message-info">
                                <span className="message-name">KILL SYSTEM ®</span>
                                <span className="message-text">You sent an attachment · 2d</span>
                            </div>
                        </div>

                        <div className="message">
                            <div className="message-avatar">
                                <img src="/src/component/Main_Page/inst icons/avatar.png" alt="DA" />
                            </div>
                            <div className="message-info">
                                <span className="message-name">DA</span>
                                <span className="message-text">You sent an attachment · 2d</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="message-content">
                <div className="message-image">
                    <img src=" /src/component/Main_Page/inst icons/messenger.png" alt="" />
                </div>
                <h3>Your messages</h3>
                <p>Send a message to start a chat.</p>
                <button onClick={openModalBtn}>Send message</button>
            </div>


            <div className="modal-overlay">
                <div className="modal-container">
                    <div className="modal-header">
                        <p>New message</p>
                        <button className="close-button" onClick={closeModalBtn}>X</button>
                    </div>
                    <div className="modal-body">
                        <label htmlFor="search">To: </label>
                        <input type="text" placeholder="Search..." />
                    </div>

                    <div className="modal-footer">
                        <p>No account found.</p>
                        <button className="chat-button" disabled>Chat</button>
                    </div>
                </div>
            </div>


            <div className="switch-accounts">
                <div className="switch-container">
                    <div className="switch-header">
                        <p>Switch accounts</p>
                        <button className="close-button" onClick={closeModalBtn}>X</button>
                    </div>
                    <div className="switch-body">
                        <span className="username">confinonbe <img src="/src/component/Main_Page/inst icons/down-arrow.png" alt="" /></span>
                    </div>

                    <div className="switch-footer">
                        <button className="switch-button" disabled>Chat</button>
                    </div>
                </div>
            </div>



        </div>

    )


}

export default Messages;
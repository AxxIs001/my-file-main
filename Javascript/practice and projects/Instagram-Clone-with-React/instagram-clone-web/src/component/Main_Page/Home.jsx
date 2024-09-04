import React from "react";
import './mainPage.css'
import Feed from "./Feed";
import RightSideBar from "./RightSideBar";
import StorySection from "./StorySection";


function Home() {


    return (
        <>
            <StorySection />

            <main class="main-content">
                <Feed />
                <RightSideBar />
            </main>

        </>
    )

}

export default Home
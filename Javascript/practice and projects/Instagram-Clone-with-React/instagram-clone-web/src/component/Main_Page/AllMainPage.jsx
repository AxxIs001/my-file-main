import React from "react";
import LeftFideBar from "./LeftSideBar";
import Home from "./Home";
import './mainPage.css'

import { Outlet, Navigate, useLocation } from "react-router-dom";

function AllMainPage() {
    const location = useLocation();

    // Redirect to Home as default
    if (location.pathname === "/logInBtn") {
        return <Navigate to="/home" />;
    }

    return (
        <div className="main-page-body">
            <div className="container">
                <LeftFideBar />

                <div className="story-mainContent">
                    <Outlet />

                </div>
            </div>
        </div>

    )
}

export default AllMainPage;
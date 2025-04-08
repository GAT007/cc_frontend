import React from "react";
import {Link} from "react-router-dom";
import "../styles/SecondaryNavbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function SecondaryNavbar() {
    return (
        <>
            <nav className="secondary-navbar">
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/network">Network</Link>
                    <Link to="/resources">Resources</Link>
                    <Link to="/about">About</Link>
                </div>
                <div className="auth-buttons">
                    <button className="login-btn">Login</button>
                    <button className="join-btn">Join Now</button>
                </div>
            </nav>
            <div>
                <h1 className="display-6 mx-3" style={{color: "#EAAA00"}}> Find a collaborator</h1>
            </div>
        </>
    );
}

export default SecondaryNavbar;

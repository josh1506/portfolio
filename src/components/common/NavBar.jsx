import React from "react";
import { Link } from "react-router-dom";

import "../assets/styles/common/navbar.css";

const NavBar = () => {
    return (
        <nav>
            <div>
                <Link to="/" className="nav-link">
                    Landing
                </Link>
                <Link to="/about" className="nav-link">
                    About
                </Link>
                <Link to="/projects" className="nav-link">
                    Projects
                </Link>
                <Link to="/contact" className="nav-link">
                    Contact
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;

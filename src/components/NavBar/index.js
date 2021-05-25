import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";  
import "./style.css";

export default function NavBar() {
    return (
        <ul class="nav justify-content-center">
            <li className="nav-item">
                <Link to="/works" className="nav-link">
                    Works
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/about" className="nav-link">
                    About
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/resume" className="nav-link">
                    Resume
                </Link>
            </li>
            <li className="nav-item">
                <Link to="#footer" className="nav-link">
                    Contact
                </Link>
            </li>
        </ul>
    );
}

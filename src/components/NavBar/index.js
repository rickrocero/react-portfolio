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

           //     <ul className="nav justify-content-center">
    //         <li className="nav-item">
    //             <a className="nav-link disabled" aria-current="page" href="#">Phone | 360.724.8730</a>
    //         </li>
    //         <li className="nav-item">
    //             <a className="nav-link disabled" href="#">Email | rickrocero@gmail.com</a>
    //         </li>
    //         <li className="nav-item">
    //             <a className="nav-link" href="https://github.com/rickrocero" target="_blank">GitHub</a>
    //         </li>
    //         <li className="nav-item">
    //             <a className="nav-link" href="https://www.linkedin.com/in/rick-rocero-b8a795202/" target="_blank">LinkedIn</a>
    //         </li>
    //   </ul>
    );
}

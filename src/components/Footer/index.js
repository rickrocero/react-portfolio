import React from 'react';
import "./style.css";

export default function Footer() {
    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <a className="nav-link disabled" aria-current="page" href="#">Phone | 360.724.8730</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" href="#">Email | rickrocero@gmail.com</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="https://github.com/rickrocero" target="_blank">GitHub</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="https://www.linkedin.com/in/rick-rocero-b8a795202/" target="_blank">LinkedIn</a>
            </li>
      </ul>
    );
}

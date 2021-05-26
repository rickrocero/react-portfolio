import React from 'react';
import "./style.css";

export default function Footer() {
    return (
        <div className="footer container-fluid">
            <div className="row">
                <div className="footer-body col-md-3">
                    <h6>Phone | 360.724.8730</h6>
                </div>
                <div className="footer-body col-md-3">
                    <h6>Email | rickrocero@gmail.com</h6>
                </div>
                <div className="footer-body col-md-3">
                    <a className="nav-link" href="https://github.com/rickrocero" target="_blank">GitHub</a>
                </div>
                <div className="footer-body col-md-3">
                    <a className="nav-link" href="https://www.linkedin.com/in/rick-rocero-b8a795202/" target="_blank">LinkedIn</a>
                </div>
            </div>
        </div>
    );
}

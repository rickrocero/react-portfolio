import React from 'react';
import './ProjectCard.css';

export default function ProjectCard(props) {
    console.log(props);
    return (
        <div id="project-card" className="card">
            <img src={props.project.image_link} className="card-img-top" alt={props.project.image_link}  />
            <div className="card-body">
                <h5 className="card-title">{props.project.title}</h5>
                <p className="card-text">{props.project.description}</p>
            </div>
            <div class="card-body">
                <a href={props.project.github} className="card-link" target="_blank">GitHub</a>
                <a href={props.project.website} className="card-link" target="_blank">Website</a>
            </div>
      </div>
    );
}

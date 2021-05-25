import React from 'react';

export default function ProjectCard(props) {
    return (
        <div className="card" style="width: 18rem;">
            <img src={props.image} className="card-img-top" alt={props.title}/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.github} className="btn btn-primary">Github Repository</a>
                <a href={props.website} className="btn btn-primary">Visit Website</a>
            </div>
        </div>
    )
}

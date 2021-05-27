import React from 'react';
import projects from '../../projects.json';
import ProjectCard from '../ProjectCard';

export default function Project() {
    return (
        <section>
            <div>
                <h3 className="text-center">My Recent Works</h3>
                <p className="text-center">Here are a handful of projects I've worked on recently.</p>
            </div>
            <div>
                {projects.map(projectObj => <ProjectCard key={projectObj.id} project={projectObj}/>)}
            </div>
        </section>
    );
}

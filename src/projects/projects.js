import React, { Component } from 'react';
import './projects.css'
import ProjectCard from '../custom-components/project-card/project-card';

export default class Projects extends Component {
    render() {
        return (
            <div className="project-card-holder">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        )
    }
}
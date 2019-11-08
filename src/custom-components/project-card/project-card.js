import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import './project-card.css'
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';

export default class ProjectCard extends Component {
    render() {
        const { project } = this.props
        return (
            <div className="card">
                <img src="https://i2.wp.com/www.softwaretestingmaterial.com/wp-content/uploads/2019/06/Web-Application-Testing-Tutorial.png?fit=1280%2C720&ssl=1" alt="Avatar" style={{ width: '100%' }} />
                <div className="container">
                    <h4><b>{project.title}</b></h4>
                    <p>{project.description}</p>
                </div>
                <div className="btn-holder">
                    <a className="btn" href={project.githubLink} target="_blank">
                        <FontAwesomeIcon icon={faGithub} /> | Github
                    </a>
                    <a className="btn" href={project.releaseLink} target="_blank">
                        <FontAwesomeIcon icon={faFolderOpen} /> | Open Demo
                    </a>
                </div>
            </div>
        )
    }
}
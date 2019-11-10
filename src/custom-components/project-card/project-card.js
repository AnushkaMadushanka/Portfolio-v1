import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import './project-card.css'
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';

export default class ProjectCard extends Component {

    constructor(props){
        super(props);
        this.state = {
            isHovering: false
        }
    }

    render() {
        const { project } = this.props
        return (
            <div className="card" onMouseEnter={()=> this.setState({isHovering: true})} onMouseLeave={()=> this.setState({isHovering: false})}>
                <div className="imgContainer">
                    {!this.state.isHovering && project.staticImageUrl && <img src={project.staticImageUrl} alt="thumbnail" />}
                    {this.state.isHovering && project.gifUrl && <img src={project.gifUrl} alt="thumbnail" />}
                    {!project.staticImageUrl && <img src="https://i2.wp.com/www.softwaretestingmaterial.com/wp-content/uploads/2019/06/Web-Application-Testing-Tutorial.png?fit=1280%2C720&ssl=1" alt="Avatar" />}
                </div>
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
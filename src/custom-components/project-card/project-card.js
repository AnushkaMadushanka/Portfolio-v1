import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import './project-card.css'
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';

export default class ProjectCard extends Component {
    render() {
        return (
            <div className="card">
                <img src="https://i2.wp.com/www.softwaretestingmaterial.com/wp-content/uploads/2019/06/Web-Application-Testing-Tutorial.png?fit=1280%2C720&ssl=1" alt="Avatar" style={{ width: '100%' }} />
                <div className="container">
                    <h4><b>John Doe</b></h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit harum voluptatum tempore, cupiditate earum iste libero sed? Molestiae dicta expedita officia ab dolore eligendi numquam
                    </p>
                </div>
                <div className="btn-holder">
                    <button className="btn">
                        <FontAwesomeIcon icon={faGithub} /> | Github
                    </button>
                    <button className="btn">
                        <FontAwesomeIcon icon={faFolderOpen} /> | Open Demo
                    </button>
                </div>
            </div>
        )
    }
}
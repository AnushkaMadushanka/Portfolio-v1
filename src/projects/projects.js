import React, { Component } from 'react';
import './projects.css'
import ProjectCard from '../custom-components/project-card/project-card';

export default class Projects extends Component {

    constructor(props){
        super(props);
        this.projects = [
            {
                title: "SQL Dummy Data Generator",
                description: "A C# program that creates dummy data for your SQL databases. With few clicks you can create sample databases with data for your specific needs",
                githubLink: "https://github.com/AnushkaMadushanka/SQL-Dummy-Data-Generator",
                releaseLink: "https://github.com/AnushkaMadushanka/SQL-Dummy-Data-Generator/releases",
                languages: ["C#"]
            },
            {
                title: "Auto Extension Reloader",
                description: "this plugin allows developers to see the current status of the building process of their specific extension. get notification when the status change and it will reload the extension after a build",
                githubLink: "https://github.com/AnushkaMadushanka/auto-extension-reloader",
                releaseLink: "https://www.npmjs.com/package/auto-extension-reloader",
                languages: ["React", "javascript"]
            },
            {
                title: "Audio Visualization Project",
                description: "",
                githubLink: "",
                releaseLink: ""
            },
            {
                title: "Operation Alone",
                description: "",
                githubLink: "",
                releaseLink: "https://anushka-madushanka.itch.io/operation-alone"
            }
        ]
    }
    
    render() {
        return (
            <div className="project-card-holder">
                {this.projects.map((i)=> <ProjectCard project={i}/>)}
            </div>
        )
    }
}
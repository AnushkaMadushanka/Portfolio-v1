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
                title: "Audio Visualization Project #1",
                description: "Testing the broads of audio visualization in unity 3d",
                githubLink: "",
                staticImageUrl: "https://i.ytimg.com/vi/NCvmuG4uP6A/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDJSSHGVk9pimq1GAMT8RkbCn_ZNg",
                gifUrl: "https://media.giphy.com/media/LS8t57onY5rKf2K9mf/giphy.gif",
                releaseLink: "https://www.youtube.com/watch?v=NCvmuG4uP6A",
                languages: ["Unity", "C#"]
            },
            {
                title: "Audio Visualization Project #2",
                description: "Testing the broads of audio visualization in unity 3d",
                staticImageUrl: "https://i.ytimg.com/vi/ll_8dB-HIwE/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAcpXmH6M7rbgv2Hwura7T0xdknqg",
                gifUrl: "https://media.giphy.com/media/lQVI37MjhY4yqaMDW0/giphy.gif",
                githubLink: "",
                releaseLink: "https://www.youtube.com/watch?v=ll_8dB-HIwE",
                languages: ["Unity", "C#"]
            },
            {
                title: "Operation Alone",
                description: "A top-down shooter game about finding your way out through tunnels filled with zombies",
                githubLink: "",
                releaseLink: "https://anushka-madushanka.itch.io/operation-alone",
                languages: ["Unity", "C#"]
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
import React, { Component } from 'react';
import './projects.css'
import ProjectCard from '../custom-components/project-card/project-card';

export default class Projects extends Component {

    constructor(props) {
        super(props);
        this.projects = [
            {
                title: "SQL Dummy Data Generator",
                description: "A C# program that creates dummy data for your SQL databases. With few clicks you can create sample databases with data for your specific needs",
                staticImageUrl: "http://i3.ytimg.com/vi/b3AlZ1YqNBw/maxresdefault.jpg",
                gifUrl: "https://j.gifs.com/P7G4q4.gif",
                githubLink: "https://github.com/AnushkaMadushanka/SQL-Dummy-Data-Generator",
                releaseLink: "https://github.com/AnushkaMadushanka/SQL-Dummy-Data-Generator/releases",
                youtubeEmbedSource: "https://www.youtube.com/embed/b3AlZ1YqNBw",
                languages: ["C#"]
            },
            {
                title: "Auto Extension Reloader",
                description: "This plugin allows developers to see the current status of the building process of their specific extension. get notification when the status change and it will reload the extension after a build",
                githubLink: "https://github.com/AnushkaMadushanka/auto-extension-reloader",
                releaseLink: "https://www.npmjs.com/package/auto-extension-reloader",
                staticImageUrl: "http://i3.ytimg.com/vi/gczjrjCIrVU/maxresdefault.jpg",
                gifUrl: "https://media.giphy.com/media/VgC7Mk7vqUIUl63tOP/giphy.gif",
                youtubeEmbedSource: "https://www.youtube.com/embed/gczjrjCIrVU",
                languages: ["React", "javascript"]
            },
            {
                title: "Audio Visualization Project #1",
                description: "Testing the broads of audio visualization in unity 3d",
                githubLink: "https://github.com/AnushkaMadushanka/Audio-Visualization",
                staticImageUrl: "https://i.ytimg.com/vi/NCvmuG4uP6A/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDJSSHGVk9pimq1GAMT8RkbCn_ZNg",
                gifUrl: "https://media.giphy.com/media/LS8t57onY5rKf2K9mf/giphy.gif",
                releaseLink: "https://www.youtube.com/watch?v=NCvmuG4uP6A",
                youtubeEmbedSource: "https://www.youtube.com/embed/NCvmuG4uP6A",
                languages: ["Unity", "C#"]
            },
            {
                title: "Audio Visualization Project #2",
                description: "Testing the broads of audio visualization in unity 3d",
                staticImageUrl: "https://i.ytimg.com/vi/ll_8dB-HIwE/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAcpXmH6M7rbgv2Hwura7T0xdknqg",
                gifUrl: "https://media.giphy.com/media/lQVI37MjhY4yqaMDW0/giphy.gif",
                githubLink: "https://github.com/AnushkaMadushanka/Audio-Visualization",
                releaseLink: "https://www.youtube.com/watch?v=ll_8dB-HIwE",
                youtubeEmbedSource: "https://www.youtube.com/embed/ll_8dB-HIwE",
                languages: ["Unity", "C#"]
            },
            {
                title: "Operation Alone",
                description: "A top-down shooter game about finding your way out through tunnels filled with zombies",
                githubLink: "https://github.com/AnushkaMadushanka/Operation-Alone",
                staticImageUrl: "http://i3.ytimg.com/vi/b6FQ_OjQ8X0/maxresdefault.jpg",
                releaseLink: "https://anushka-madushanka.itch.io/operation-alone",
                gifUrl: "https://j.gifs.com/zvAGOr.gif",
                youtubeEmbedSource: "https://www.youtube.com/embed/b6FQ_OjQ8X0",
                languages: ["Unity", "C#"]
            }
        ]
        this.modal = React.createRef();
        this.openModal = this.openModal.bind(this)
        this.state = {
            showModal: false,
            youtubeEmbedSource: ""
        }
    }

    openModal(youtubeEmbedSource) {
        this.setState({
            showModal: true,
            youtubeEmbedSource
        })
    }

    render() {
        return (
            <div>
                <div className="project-card-holder">
                    {this.projects.map((i) => <ProjectCard project={i} openModal={this.openModal} key={i.gifUrl}/>)}
                </div>
                {this.state.showModal &&
                    <div ref={this.modal} className="modal" onClick={(event) => {
                        if (event.target === this.modal.current) {
                            this.setState({ showModal: false })
                        }
                    }}>
                        <div className="modal-content">
                            <iframe width="100%" height="100%" title="How it Works" src={this.state.youtubeEmbedSource} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>}
            </div>
        )
    }
}
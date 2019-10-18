import React, { Component } from 'react';
import './home.css'
import angular from '../assets/icons/angular.png'
import react from '../assets/icons/react.png'
import csharp from '../assets/icons/c#.png'
import js from '../assets/icons/js.png'
import node from '../assets/icons/node.png'
import unity from '../assets/icons/unity.png'
import sqlserver from '../assets/icons/sqlserver.jpg'


export default class Home extends Component {
    render() {
        return (
            <div className="details-holder-home">
                <div>
                    <section className="details-background">
                        <section className="details">
                            <div className="details-name">
                                Hi, <br />
                                I'm Anushka
                            </div>
                            <div className="details-shortdes">
                                Desktop/Web/Game Developer
                            </div>
                        </section>
                        <section className="details">
                            <div className="details-name">
                                About Me
                            </div>
                            <div className="details-shortdes">
                                <p>
                                    I am a software engineer with Excellent problem solving skills. I am open to learn new technologies depending on project needs, friendly concerning client needs/changes and always love to learn and help.
                                </p>
                                <p>
                                    I love what I do, spend hours doing it, I always look for challenges and apply the best practices for the code I write.
                                </p>
                            </div>
                        </section>
                    </section>
                    <section className="details-background" style={{textAlign: "center"}}>
                        <section className="details">
                        <img src={angular} className="ts-icon"/>
                        <img src={react} className="ts-icon"/>
                        <img src={js} className="ts-icon"/>
                        <img src={node} className="ts-icon"/>
                        <img src={csharp} className="ts-icon"/>
                        <img src={sqlserver} className="ts-icon"/>
                        <img src={unity} className="ts-icon"/>
                        </section>
                    </section>
                </div>
            </div>
        )
    }
}
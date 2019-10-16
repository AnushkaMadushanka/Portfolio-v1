import React, { Component } from 'react';
import './home.css'

export default class Home extends Component {
    render() {
        return (
            <div className="details-holder-home">
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
            </div>
        )
    }
}
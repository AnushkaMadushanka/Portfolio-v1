import React, { Component } from 'react';
import './home.css'

export default class Home extends Component {
    render() {
        return (
            <div className="details-holder">
                <section className="details">
                    <div className="details-name">
                        Hi, <br />
                        I'm Anushka
                    </div>
                    <div className="details-shortdes">
                        Desktop/Web/Game Developer
                    </div>
                </section>
                <section className="background-section" />
            </div> 
        )
    }
}
import React, { Component } from 'react';
import './contacts.css'

export default class Contacts extends Component {
    render() {
        return (
            <div className="details-holder-contact">
                <section className="details">
                    <div className="details-name">
                        Contact me
                    </div>
                    <div className="details-shortdes">
                        Have a question or want to work together?
                    </div>
                    <div className="input-section">
                        <label className="input-label">Your Name</label>
                        <input className="input" placeholder="Enter your name"></input>
                    </div>
                    <div className="input-section">
                        <label className="input-label">Your Email</label>
                        <input className="input" placeholder="Enter your email"></input>
                    </div>
                    <div className="input-section">
                        <label className="input-label">Subject</label>
                        <input className="input" placeholder="Enter the subject"></input>
                    </div>
                    <div className="input-section">
                        <label className="input-label">Message</label>
                        <textarea className="input" rows="5"></textarea>
                    </div>
                </section>
                <section className="background-section" />
            </div> 
        )
    }
}
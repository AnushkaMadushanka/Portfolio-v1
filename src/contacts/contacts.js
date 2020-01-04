import React, { Component } from 'react';
import './contacts.css'
import axios from 'axios'
import { string, object } from 'yup';
export default class Contacts extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            messages: [],
            success: false
        }

        this.sendEmail = this.sendEmail.bind(this)
        this.contactUsValidationSchema = object().shape({
            name: string()
                .required('Name is required'),
            email: string()
                .email('Email is invaid')
                .required('Email is required'),
            subject: string()
                .required('Subject is required'),
            message: string()
                .required('Message is required'),
        });
    }

    sendEmail() {
        this.contactUsValidationSchema.validate({
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message
        }, { abortEarly: false }).then((value) => {
            axios.post('https://anushka-portfolio-backend.herokuapp.com/api/sendmail', value)
                .then((response) => {
                    this.setState({
                        messages: ['Email was sent successfully'],
                        success: true
                    })
                })
                .catch((error) => {
                    this.setState({
                        messages: ['Something went wrong. Please try again later'],
                        success: false
                    })
                });

        }).catch((err) => {
            this.setState({
                messages: err.errors,
                success: false
            })
        })

    }

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
                    {this.state.messages && this.state.messages.length > 0 &&
                        <div className="input-section">
                            <div className={this.state.success ? "success-box" : "error-message-box"}>
                                {this.state.messages.length > 1 &&
                                    <ul>
                                        {this.state.messages.map(i => <li>{i}</li>)}
                                    </ul>}
                                {this.state.messages.length == 1 && this.state.messages.map(i => <span>{i}</span>)}
                            </div>
                        </div>}
                    <div className="input-section">
                        <label className="input-label">Your Name</label>
                        <div>
                            <input className="input" placeholder="Enter your name" value={this.state.name} onChange={(event) => { this.setState({ name: event.target.value }) }} />
                        </div>
                    </div>
                    <div className="input-section">
                        <label className="input-label">Your Email</label>
                        <div>
                            <input className="input" placeholder="Enter your email" value={this.state.email} onChange={(event) => { this.setState({ email: event.target.value }) }} />
                        </div>
                    </div>
                    <div className="input-section">
                        <label className="input-label">Subject</label>
                        <div>
                            <input className="input" placeholder="Enter the subject" value={this.state.subject} onChange={(event) => { this.setState({ subject: event.target.value }) }} />
                        </div>
                    </div>
                    <div className="input-section">
                        <label className="input-label">Message</label>
                        <div>
                            <textarea className="input" rows="5" value={this.state.message} onChange={(event) => { this.setState({ message: event.target.value }) }}></textarea>
                        </div>
                    </div>
                    <div className="input-section">
                        <button className="submit" onClick={this.sendEmail}>Submit</button>
                    </div>
                </section>
                <section className="background-section" />
            </div>
        )
    }
}
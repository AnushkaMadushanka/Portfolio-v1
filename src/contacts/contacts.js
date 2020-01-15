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
                <div className="details-background">
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
                <section className="details">
                <iframe src="https://www.google.com/maps/embed?pb=!1m22!1m12!1m3!1d1980.7907686464778!2d79.9396452878108!3d6.820640263620854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m7!3e0!4m0!4m4!2s6.820632318530686%2C%2079.93930661200797!3m2!1d6.8206323!2d79.9393066!5e0!3m2!1sen!2slk!4v1579073669899!5m2!1sen!2slk" width="600" height="450" frameborder="0" className="map" allowfullscreen=""></iframe>
                </section>
                </div>
            </div>
        )
    }
}
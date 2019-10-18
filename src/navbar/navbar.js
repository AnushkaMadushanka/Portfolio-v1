import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faTasks, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { NavLink, Link } from 'react-router-dom'
import './navbar.css'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import avatar from '../assets/logo.svg'

export default function Navbar() {
    return (
        <header className="navbar">
            <img className="avatar" src={avatar} alt="Avatar" />
            <div className="icon-set">
                <NavLink exact to="/" activeClassName="active-icon">
                    <FontAwesomeIcon className="icon" icon={faHome} />
                </NavLink>
                <NavLink exact to="/projects" activeClassName="active-icon">
                    <FontAwesomeIcon className="icon" icon={faTasks} />
                </NavLink>
                <NavLink exact to="/contacts" activeClassName="active-icon">
                    <FontAwesomeIcon className="icon" icon={faEnvelope} />
                </NavLink>
            </div>
            <div className="icon-set">
                <a href="https://github.com/AnushkaMadushanka" target="_blank">
                    <FontAwesomeIcon className="icon" icon={faGithub} />
                </a>
            </div>
        </header>
    )
}
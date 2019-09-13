import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faTasks, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { NavLink, Link } from 'react-router-dom'
import './navbar.css'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Navbar() {
    return (
        <header className="navbar">
            <div>
                <img className="avatar" src="./img_avatar.png" alt="Avatar" />
            </div>
            <div className="icon-set">
                <NavLink exact to="/" activeClassName="active-icon">
                    <FontAwesomeIcon className="icon" icon={faHome} />
                </NavLink>
                <NavLink exact to="/projects" activeClassName="active-icon">
                    <FontAwesomeIcon className="icon" icon={faTasks} />
                </NavLink>
                <NavLink exact to="/contact" activeClassName="active-icon">
                    <FontAwesomeIcon className="icon" icon={faEnvelope} />
                </NavLink>
            </div>
            <div className="icon-set">
                <Link exact to="/projects">
                    <FontAwesomeIcon className="icon" icon={faGithub} />
                </Link>
            </div>
        </header>
    )
}
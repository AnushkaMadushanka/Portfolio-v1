import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faTasks, faEnvelope, faFilePdf, faTimes, faUser } from '@fortawesome/free-solid-svg-icons'
import { CSSTransition } from 'react-transition-group'
import { NavLink, Link } from 'react-router-dom'
import './navbar.css'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import avatar from '../assets/logo.svg'
import Media from 'react-media';

export default function Navbar() {
    const [showLinks, setShowLinks] = useState(false);

    return (
        <div>
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
                <Media query="(min-width: 600px)" render={() =>
                    (
                        <div className="icon-set">
                            <a href="https://www.linkedin.com/in/anushka-madushanka-6b215515a/" target="_blank">
                                <FontAwesomeIcon className="icon" icon={faFilePdf} />
                            </a>
                            <a href="https://www.linkedin.com/in/anushka-madushanka-6b215515a/" target="_blank">
                                <FontAwesomeIcon className="icon" icon={faLinkedin} />
                            </a>
                            <a href="https://github.com/AnushkaMadushanka" target="_blank">
                                <FontAwesomeIcon className="icon" icon={faGithub} />
                            </a>
                        </div>
                    )}
                />

                <Media query="(max-width: 600px)" render={() =>
                    (
                        <div className="icon-set">
                            <a onClick={() => { setShowLinks(true) }}>
                                <FontAwesomeIcon className="icon" icon={faUser} />
                            </a>
                        </div>
                    )}
                />

            </header>

            <Media query="(max-width: 600px)" render={() =>
                (
                    <CSSTransition
                        in={showLinks}
                        timeout={300}
                        classNames="alert"
                        unmountOnExit
                    >
                        <header className="navbar">
                            <div className="icon-set">
                                <a href="https://www.linkedin.com/in/anushka-madushanka-6b215515a/" target="_blank">
                                    <FontAwesomeIcon className="icon" icon={faFilePdf} />
                                </a>
                                <a href="https://www.linkedin.com/in/anushka-madushanka-6b215515a/" target="_blank">
                                    <FontAwesomeIcon className="icon" icon={faLinkedin} />
                                </a>
                                <a href="https://github.com/AnushkaMadushanka" target="_blank">
                                    <FontAwesomeIcon className="icon" icon={faGithub} />
                                </a>
                            </div>
                            <div className="icon-set">
                                <a onClick={() => { setShowLinks(false) }}>
                                    <FontAwesomeIcon className="icon" icon={faTimes} />
                                </a>
                            </div>
                        </header>
                    </CSSTransition>
                )}
            />

        </div>

    )
}
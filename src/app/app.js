import React from 'react';
import { HashRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import AnimationCanvas from '../custom-components/animation-canvas/animation-canvas';
import P5Wrapper from 'react-p5-wrapper';
import "./app.css"

import Navbar from "../navbar/navbar"
import Home from '../home/home';
import Projects from '../projects/projects';
import Contacts from '../contacts/contacts';

function App() {
    return (
        <div className="router">
            <Router>
                <div className="navbar-parent">
                    <Navbar />
                </div>
                <div className="main">
                    <div className="details-holder">
                        <P5Wrapper sketch={AnimationCanvas} />
                    </div>
                    <AppRoutes />
                </div>
            </Router>
        </div>
    );
}

function AppRoutes() {
    let location = useLocation();
    return (
        <div>
            <TransitionGroup>
                <CSSTransition
                    key={location.pathname}
                    classNames="fade"
                    timeout={300}
                >
                    <Switch location={location}>
                        <Route path="/" exact component={Home} />
                        <Route path="/projects" exact component={Projects} />
                        <Route path="/contacts" exact component={Contacts} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </div>
    )
}
export default App;
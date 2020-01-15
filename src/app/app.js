import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import AnimationCanvas from '../custom-components/animation-canvas/animation-canvas';
import AnimationCanvas2 from '../custom-components/animation-canvas-2/animation-canvas-2';
import P5Wrapper from 'react-p5-wrapper';
import "./app.css"

import Navbar from "../navbar/navbar"
import Home from '../home/home';
import Projects from '../projects/projects';
import Contacts from '../contacts/contacts';

function App() {
    const [animation, setAnimation] = useState(0);

    return (
        <div className="router">
            <Router>
                <div className="navbar-parent">
                    <Navbar />
                </div>
                <div className="main">
                    <div className="details-holder">
                        <CSSTransition in={animation === 0} timeout={300} classNames="fade-animation" unmountOnExit><P5Wrapper sketch={AnimationCanvas} /></CSSTransition>
                        <CSSTransition in={animation === 1} timeout={300} classNames="fade-animation" unmountOnExit><P5Wrapper sketch={AnimationCanvas2} /></CSSTransition>
                    </div>
                    <AppRoutes onChangeRoute={() => {
                        setAnimation(animation === 1 ? 0 : animation + 1)
                    }} />
                </div>
            </Router>
        </div>
    );
}

function AppRoutes(props) {
    let location = useLocation();

    useEffect(
        () => {
            props.onChangeRoute()
        },
        [location]
    )

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
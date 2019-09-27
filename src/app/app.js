import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
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
                    <Route path="/" exact component={Home} />
                    <Route path="/projects" exact component={Projects} />
                    <Route path="/contacts" exact component={Contacts} />
                </div>
            </Router>
        </div>
    );
}
export default App;
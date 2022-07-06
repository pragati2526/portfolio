import React from "react";
import Home from "../Home/Home";
import About from '../About/About.jsx';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Contact from '../ContactMe/ContactMe';

function Main() {
    return (
        <>
            <Home/>
            <About/>
            <Projects/>
            <Skills/>
            <Contact/>
        </>
    );
}

export default Main;
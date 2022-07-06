import React from "react";
import Hero from "../../components/Hero/Hero";
import Navigbar from "../../components/Navbar/Navbar";

function Home()
{
    return(
        <>
        <div id="home">
        <Navigbar/>
        <Hero/>
        </div>
        </>
    );
}

export default Home;
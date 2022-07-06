import React, { useState, useEffect } from 'react'
import './App.css';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Projects from './pages/Projects/Projects';
import LoadingScreen from './components/Loader/Loader.jsx';
import Skills from './pages/Skills/Skills';
import Contact from './pages/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000)
  }, [])

  return (
    <>
    { loading === false ? (
    <div className="App">
          <Home />
          <About />
          <Projects />
          <Skills />
          <Contact />
          <Footer/>
    </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default App;

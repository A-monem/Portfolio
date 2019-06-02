import React from 'react';
import './App.css';
import Home from './components/Home'
import Nav from './components/Nav'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <Home />
      <Nav />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

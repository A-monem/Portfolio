import React from 'react';
import './App.css';
import Home from './components/Home'
import Nav from './components/Nav'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Projects from './components/Projects'

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

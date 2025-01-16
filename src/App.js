import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Hero.css';
import profile from '../assets/images/diogo.png'; 

const Hero = () => {
  return (
    <div className="hero">
      <motion.div
        className="hero-image"
        initial={{ opacity: 0, scale: 1}}
        animate={{ opacity: 1, scale: 2 , }}
        transition={{ duration: 1 }}
      >
        <img src={profile} alt="Diogo" />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Diogo!
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Junior Developer, Technician,Gym Enthusiast.
      </motion.p>
      <motion.a
        href="#projects"
        className="hero-btn"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        View My Work
      </motion.a>
    </div>
  );
};

export default Hero;
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Industries from '../components/Industries';
import Contact from './Contact';
import ProjectsCarousel from '../components/ProjectsCarousel';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <ProjectsCarousel />
      <Industries />
      <Contact />
    </>
  );
};

export default Home;

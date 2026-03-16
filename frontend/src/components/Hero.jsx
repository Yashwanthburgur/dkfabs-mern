import React from 'react';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-left">
          <h1 className="hero-title">
            Precision Metalwork.<br />
            <span className="highlight">Engineered to Perform.</span>
          </h1>
          <button className="hero-cta" onClick={scrollToContact}>Get Quote</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

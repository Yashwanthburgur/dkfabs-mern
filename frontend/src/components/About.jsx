import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-left">
            <h2>About Us</h2>
            <p className='font-p'>Based in Bangalore, we provide complete metal solutions for diverse industries. With over 20 years of experience, we deliver high-quality fabrication services to clients worldwide. Our expertise spans sheet metal fabrication, laser cutting, welding, and custom metalworking solutions.</p>
            <button className="read-more-btn">
              <a href="/about">Read Our Story →</a>
            </button>
          </div>
          <div className="about-right">
            <div className="about-stats">
              <div className="stat">
                <h3>20+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>500+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>50+</h3>
                <p>Clients Worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

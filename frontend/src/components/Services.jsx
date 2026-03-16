import React from 'react';

const Services = () => {
  const services = [
    { icon: 'hammer', title: 'Sheet Metal Fabrication', desc: 'Precision cutting, bending, and forming of sheet metal components for various industries.' },
    { icon: 'cut', title: 'Laser Cutting', desc: 'High-precision laser cutting services for complex shapes and intricate designs.' },
    { icon: 'fire', title: 'Welding & Assembly', desc: 'Expert welding services including MIG, TIG, and spot welding for strong, durable joints.' },
    { icon: 'cog', title: 'Custom Fabrication', desc: 'Bespoke metal fabrication solutions tailored to your specific requirements and specifications.' },
    { icon: 'paint-brush', title: 'Finishing Services', desc: 'Professional finishing including powder coating, painting, and surface treatments.' },
    { icon: 'drafting-compass', title: 'Design Support', desc: 'Engineering support and design optimization for manufacturability and cost efficiency.' }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                <i className={`fas fa-${service.icon}`}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

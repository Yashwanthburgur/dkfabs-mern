import React from 'react';

const Industries = () => {
  const industries = [
    { icon: 'industry', title: 'Manufacturing' },
    { icon: 'car', title: 'Automotive' },
    { icon: 'plane', title: 'Aerospace' },
    { icon: 'building', title: 'Construction' },
    { icon: 'heartbeat', title: 'Medical Devices' },
    { icon: 'microchip', title: 'Electronics' },
    { icon: 'robot', title: 'Robotics' },
    { icon: 'solar-panel', title: 'Renewable Energy' }
  ];

  return (
    <section className="industries" id="industries">
      <div className="container">
        <h2>Industries We Serve</h2>
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div className="industry-card" key={index}>
              <div className="industry-icon">
                <i className={`fas fa-${industry.icon}`}></i>
              </div>
              <h3>{industry.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;

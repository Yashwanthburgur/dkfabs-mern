import React from 'react';

const ProjectsCarousel = () => {
  const projects = [
    {
      image: "/fireExting.jpg",
      title: "Fire Extinguisher Housing",
      desc: "Custom sheet metal enclosure for high-pressure safety equipment"
    },
    {
      image: "/imgone.jpg", 
      title: "Industrial Control Panel",
      desc: "Precision laser-cut enclosure with powder-coated finish"
    },
    {
      image: "/imgonefrontview.jpg",
      title: "Front Panel Assembly",
      desc: "Multi-stage fabrication with MIG welding and assembly"
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-overlay">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="project-video-section">
          <h3 className="video-title">Behind the Scenes</h3>
          <div className="video-container">
            <video 
              className="project-video" 
              controls 
              autoPlay
              muted
              preload="metadata"  
              playsInline
              poster="/video-thumbnail.jpg"
            >
              <source src="/IMG_0938.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
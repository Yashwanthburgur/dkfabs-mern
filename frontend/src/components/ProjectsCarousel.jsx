import React, { useState } from "react";

const ProjectsCarousel = () => {
  const [activeProject, setActiveProject] = useState(0);
  const projects = [
    {
      image: "/fireExting.jpg",
      title: "Fire Extinguisher Housing",
      desc: "Custom sheet metal enclosure for high-pressure safety equipment",
    },
    {
      image: "/imgone.jpg",
      title: "Industrial Control Panel",
      desc: "Precision laser-cut enclosure with powder-coated finish",
    },
    {
      image: "/imgonefrontview.jpg",
      title: "Front Panel Assembly",
      desc: "Multi-stage fabrication with MIG welding and assembly",
    },
  ];

  const showProject = (nextIndex) => {
    setActiveProject((nextIndex + projects.length) % projects.length);
  };

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div
          className="projects-carousel"
          aria-label="Featured fabrication projects"
        >
          <button
            className="carousel-control carousel-prev"
            type="button"
            onClick={() => showProject(activeProject - 1)}
            aria-label="Previous project"
          >
            <span aria-hidden="true">←</span>
          </button>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div
                className={`project-card ${index === activeProject ? "is-active" : ""}`}
                key={project.title}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} loading="lazy" />
                </div>
                <div className="project-caption">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control carousel-next"
            type="button"
            onClick={() => showProject(activeProject + 1)}
            aria-label="Next project"
          >
            <span aria-hidden="true">→</span>
          </button>
          <div
            className="carousel-dots"
            role="tablist"
            aria-label="Choose a project"
          >
            {projects.map((project, index) => (
              <button
                className={index === activeProject ? "is-active" : ""}
                type="button"
                role="tab"
                aria-selected={index === activeProject}
                aria-label={`Show ${project.title}`}
                onClick={() => showProject(index)}
                key={project.title}
              />
            ))}
          </div>
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
              poster="/sheet-metal-img.png"
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

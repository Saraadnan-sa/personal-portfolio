import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Self-Driving Vehicle Object Detection",
      description:
        "Trained a YOLOv8 model to detect objects in real-time for autonomous vehicles, using custom datasets and visualizing bounding boxes for mask prediction.",
    },
    {
      title: "Event Calendar Application",
      description:
        "Developed a web-based event calendar with weekly and monthly views, allowing users to add and manage events using a simple and intuitive UI.",
    },
  ];

  return (
    <div>
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div className="card mb-3" key={index}>
          <div className="card-body">
            <h5 className="card-title">{project.title}</h5>
            <p className="card-text">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;

import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Chair Operations",
      organization: "ACM",
      duration: "2024-2025",
      description:
        "Managed operational aspects of student activities and events, ensuring smooth execution and engagement across multiple initiatives.",
    },
    {
      title: "General Secretary",
      organization: "Hack Club",
      duration: "2024-2025",
      description:
        "Led organizational activities, including events and workshops, focused on promoting coding culture among students.",
    },
    {
      title: "Team Lead",
      organization: "Google Developer Student Clubs (GDSC)",
      duration: "2023-2024",
      description:
        "Coordinated team projects and workshops focused on developing technical skills in web development, machine learning, and cloud technologies.",
    },
  ];

  return (
    <div>
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <div className="card mb-3" key={index}>
          <div className="card-body">
            <h5 className="card-title">{exp.title}</h5>
            <h6 className="card-subtitle text-muted">
              {exp.organization} | {exp.duration}
            </h6>
            <p className="card-text">{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;

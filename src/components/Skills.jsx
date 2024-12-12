import React from "react";

const Skills = () => {
  const skills = [
    "Programming Languages: Python, C/C++, Java",
    "Frameworks & Tools: TensorFlow, Keras, JUnit, Atmel Studio",
    "Technologies: YOLOv8, Object Detection, Assembly Language",
    "Version Control: Git, GitHub",
  ];

  return (
    <div>
      <h2>Skills</h2>
      <ul className="list-group mb-3">
        {skills.map((skill, index) => (
          <li className="list-group-item" key={index}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;

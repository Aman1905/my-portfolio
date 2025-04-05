import React from 'react'
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "Automated Technical Documentation Generator",
    description: "This repository has a solution for automating the generation of swagger technical documentation and unit test cases into comprehensive technical documents using ChatGPT to help new developers quickly understand a codebase or project.",
    techStack: ["Node.js", "ChatGPT - API", "Swagger"],
    link: "https://github.com/Aman1905/automated-technical-documentation-generator",
  },
];

const Project = () => {
  return (
    <section className="projects-section">
      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Project
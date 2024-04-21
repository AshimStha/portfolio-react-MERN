import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ProjectCard() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:8000/projects");
        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching project data:", error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (projects.length === 0) {
    return <div>No projects found</div>;
  }

  return (
    <section className="text-center my-20 py-15" id="Projects">
      <h1 className="text-4xl font-medium mb-10 py-2 text-teal-600 md:text-5xl">
        Projects
      </h1>
      <div className="flex flex-1 flex-wrap justify-center gap-10">
        {projects.map((project) => (
          <div
            key={project._id}
            className="bg-white rounded-lg shadow-lg flex-grow max-w-80"
          >
            <img
              className="rounded-t-lg object-cover w-full h-48"
              src={project.image}
              alt={project.name}
            />
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">{project.name}</h3>
              <p className="text-sm mb-2">
                Tech Stack: {project.tech_stack.join(", ")}
              </p>
              <p className="text-sm mb-2">
                <a className="text-blue-600" href={project.github_repo}>GitHub Repo Link</a>
              </p>
              <p className="text-sm">
                <a className="text-blue-600" href={project.url}>Live Preview</a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

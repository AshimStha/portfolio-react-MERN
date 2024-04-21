import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ProjectCard() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("/projects");
        setProjects(response.data);
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
      {projects.map(project => (
        <div className="basis-1/4 flex-1" key={project._id}>
          <img
            className="rounded-t-lg object-cover"
            width={"100%"}
            height={"100%"}
            src={project.image}
            alt={project.name}
          />
          <div className="p-4 bg-black bg-opacity-50 text-white rounded-b-lg">
            <h3 className="text-lg font-medium mb-2">{project.name}</h3>
            <p className="text-sm mb-2">
              Tech Stack: {project.tech_stack.join(", ")}
            </p>
            <p className="text-sm mb-2">
              GitHub Repo: <a href={project.github_repo}>Go to Link</a>
            </p>
            <p className="text-sm">
              URL: <a href={project.url}>Live Preview</a>
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

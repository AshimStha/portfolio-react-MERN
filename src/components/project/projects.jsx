import web1 from "../../../public/web1.png";
import web2 from "../../../public/web2.png";
import web3 from "../../../public/web3.png";

import ProjectCard from "./projectCard";

export default function Projects() {
  return (
    <>
      <section className="text-center my-20 py-15" id="Projects">
        <h1 className="text-4xl font-medium mb-10 py-2 text-teal-600 md:text-5xl">
          Projects
        </h1>

        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <ProjectCard
            imageSrc={web1}
            projectName="Project 1"
            techStack="React, Node.js, MongoDB"
            githubLink="#"
            url="#"
          />
          <ProjectCard
            imageSrc={web2}
            projectName="Project 2"
            techStack="React, Node.js, MongoDB"
            githubLink="#"
            url="#"
          />
          <ProjectCard
            imageSrc={web3}
            projectName="Project 3"
            techStack="React, Node.js, MongoDB"
            githubLink="#"
            url="#"
          />
        </div>
      </section>
    </>
  );
}

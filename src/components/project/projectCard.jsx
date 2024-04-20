export default function ProjectCard({
  imageSrc,
  projectName,
  techStack,
  githubLink,
  url,
}) {
  return (
    <div className="basis-1/4 flex-1">
      <img
        className="rounded-t-lg object-cover"
        width={"100%"}
        height={"100%"}
        src={imageSrc}
        alt={projectName}
      />
      <div className="p-4 bg-black bg-opacity-50 text-white rounded-b-lg">
        <h3 className="text-lg font-medium mb-2">{projectName}</h3>
        <p className="text-sm mb-2">Tech Stack: {techStack}</p>
        <p className="text-sm mb-2">
          GitHub Repo: <a href={githubLink}>Link</a>
        </p>
        <p className="text-sm">
          URL: <a href={url}>Link</a>
        </p>
      </div>
    </div>
  );
}

function ProjectCard({
  number,
  title,
  description,
  technologies,
  liveLink,
  image
}) {
  return (
    <article className="project-card">

      <img
        src={image}
        alt={`${title} project`}
        className="project-image"
      />

      <div className="project-card-content">

        <div className="project-number">
          {number}
        </div>

        <h2>{title}</h2>

        <p>{description}</p>

        <div className="project-technologies">
          {technologies.map((technology, index) => (
            <span key={index}>
              {technology}
            </span>
          ))}
        </div>

        <div className="project-links">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Site →
          </a>
        </div>

      </div>

    </article>
  );
}

export default ProjectCard;
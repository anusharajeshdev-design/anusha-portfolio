import type { Project } from "../../data/projectsData";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <article
      className="
        glass
        overflow-hidden
        rounded-3xl
        transition-all
        duration-300
        hover:-translate-y-2
      "
    >
      {/* Image */}

      <div className="aspect-video overflow-hidden bg-slate-100">

        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
        />

      </div>

      {/* Content */}

      <div className="p-8">

        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
          {project.subtitle}
        </p>

        <h3 className="mt-3 text-3xl font-bold text-[var(--text-primary)]">
          {project.title}
        </h3>

        <p className="mt-5 leading-8 text-[var(--text-secondary)]">
          {project.description}
        </p>

        {/* Tech */}

        <div className="mt-8 flex flex-wrap gap-3">

          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-[var(--border-solid)]
                bg-white/60
                px-4
                py-2
                text-sm
                font-medium
                text-[var(--primary)]
              "
            >
              {tech}
            </span>
          ))}

        </div>

        {/* Buttons */}

        <div className="mt-8 flex gap-4">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
              primary-btn
              rounded-xl
              px-6
              py-3
              font-semibold
            "
          >
            GitHub
          </a>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="
                secondary-btn
                rounded-xl
                px-6
                py-3
                font-semibold
              "
            >
              Live Demo
            </a>
          )}

        </div>

      </div>
    </article>
  );
}
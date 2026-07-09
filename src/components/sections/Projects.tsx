import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projectsData";

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 py-24 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
            Featured Projects
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
            Built for real-world business impact
          </h2>

          <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
            A collection of enterprise applications and AI-powered
            solutions showcasing modern .NET development,
            scalable architecture, and production-ready software engineering.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
import SkillCard from "./SkillCard";
import { skillsData } from "../../data/skillsData";

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-6 py-24 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        <div className="max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
            Skills
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
            Technologies I enjoy building with
          </h2>

          <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
            I specialize in modern Microsoft technologies,
            full-stack web development, cloud deployment,
            and AI-powered enterprise solutions.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {skillsData.map((category) => (

            <SkillCard
              key={category.id}
              category={category}
            />

          ))}

        </div>

      </div>
    </section>
  );
}
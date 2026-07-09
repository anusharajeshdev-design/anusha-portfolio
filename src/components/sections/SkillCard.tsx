import type { SkillCategory } from "../../data/skillsData";

interface SkillCardProps {
  category: SkillCategory;
}

export default function SkillCard({
  category,
}: SkillCardProps) {
  return (
    <div className="glass rounded-3xl p-8">

      <h3 className="text-2xl font-bold text-[var(--text-primary)]">
        {category.title}
      </h3>

      <div className="mt-6 flex flex-wrap gap-3">

        {category.skills.map((skill) => (

          <span
            key={skill}
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
            {skill}
          </span>

        ))}

      </div>

    </div>
  );
}
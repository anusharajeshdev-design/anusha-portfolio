import type { CareerExperience } from "../../data/careerData";

interface TimelineCardProps {
  experience: CareerExperience;
}

export default function TimelineCard({
  experience,
}: TimelineCardProps) {
  const isLeft = experience.side === "left";

  return (
    <div
      className="
        relative
        mb-16
        grid
        grid-cols-[40px_1fr]
        gap-6
        lg:grid-cols-[1fr_70px_1fr]
        lg:gap-0
      "
    >
      {/* ================= MOBILE TIMELINE ================= */}

      <div className="relative flex justify-center lg:hidden">

        <div className="h-5 w-5 rounded-full border-4 border-white bg-[var(--primary)] shadow-md" />

      </div>

      {/* ================= DESKTOP LEFT ================= */}

      <div
        className={`
          hidden
          lg:block
          ${isLeft ? "" : "invisible"}
          pr-12
        `}
      >
        <CardContent experience={experience} />
      </div>

      {/* ================= CENTER ================= */}

      <div className="hidden lg:flex justify-center">

        <div className="h-5 w-5 rounded-full border-4 border-white bg-[var(--primary)] shadow-md" />

      </div>

      {/* ================= DESKTOP RIGHT ================= */}

      <div
        className={`
          hidden
          lg:block
          ${isLeft ? "invisible" : ""}
          pl-12
        `}
      >
        <CardContent experience={experience} />
      </div>

      {/* ================= MOBILE CARD ================= */}

      <div className="lg:hidden">

        <CardContent experience={experience} />

      </div>
    </div>
  );
}

/* ------------------------------------------------ */

function CardContent({
  experience,
}: {
  experience: CareerExperience;
}) {
  return (
    <div className="glass rounded-3xl p-6">

      <span className="text-sm font-semibold text-[var(--primary)]">
        {experience.duration}
      </span>

      <h3 className="mt-3 text-2xl font-bold text-[var(--text-primary)]">
        {experience.title}
      </h3>

      <p className="mt-2 font-semibold text-[var(--primary)]">
        {experience.company}
      </p>

      <p className="text-sm text-[var(--text-secondary)]">
        {experience.location}
      </p>

      <div className="my-5 h-px bg-[var(--border-solid)]" />

      <ul className="space-y-3">

        {experience.highlights.map((item) => (

          <li
            key={item}
            className="
              flex
              items-start
              gap-3
              text-[15px]
              leading-7
              text-[var(--text-secondary)]
            "
          >

            <span className="mt-2 h-2 w-2 rounded-full bg-[var(--primary)] shrink-0" />

            <span>{item}</span>

          </li>

        ))}

      </ul>

    </div>
  );
}
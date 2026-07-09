import type { CareerExperience } from "../../data/careerData";

interface TimelineCardProps {
  experience: CareerExperience;
}

export default function TimelineCard({
  experience,
}: TimelineCardProps) {
  return (
    <div
      className={`
        relative
        flex
        w-full
        items-center
        ${
          experience.side === "left"
            ? "lg:flex-row"
            : "lg:flex-row-reverse"
        }
      `}
    >
      {/* Card */}

      <div
        className="
          glass
          w-full
          rounded-3xl
          p-6
          transition-all
          duration-300
          lg:w-[46%]
        "
      >
        {/* Role */}

        <h3 className="text-2xl font-bold text-[var(--text-primary)]">
          {experience.title}
        </h3>

        {/* Company */}

        <p className="mt-2 font-semibold text-[var(--primary)]">
          {experience.company}
        </p>

        {/* Location */}

        <p className="mt-1 text-sm text-[var(--text-secondary)]">
          {experience.location}
        </p>

        {/* Duration */}

        <p className="mt-1 text-sm font-medium text-[var(--text-secondary)]">
          {experience.duration}
        </p>

        {/* Divider */}

        <div className="my-5 h-px bg-[var(--border-solid)]" />

        {/* Highlights */}

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
              <span className="mt-2 h-2 w-2 rounded-full bg-[var(--primary)]" />

              <span>{item}</span>

            </li>
          ))}

        </ul>

      </div>

      {/* Desktop Timeline Dot */}

      <div
        className="
          hidden
          lg:flex
          lg:w-[8%]
          justify-center
        "
      >
        <div
          className="
            h-5
            w-5
            rounded-full
            border-4
            border-white
            bg-[var(--primary)]
            shadow-lg
          "
        />
      </div>

      {/* Empty Side */}

      <div className="hidden lg:block lg:w-[46%]" />
    </div>
  );
}
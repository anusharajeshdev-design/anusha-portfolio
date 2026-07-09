import TimelineCard from "./TimelineCard";
import { careerData } from "../../data/careerData";

export default function CareerTimeline() {
  return (
    <section
      id="career"
      className="px-6 py-24 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <div className="max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
            Professional Journey
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
            From Intern to Senior Software Engineer
          </h2>

          <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
            Over the past five years I've grown from an intern learning web
            technologies to building enterprise software, designing scalable
            backend systems and delivering production-ready business solutions.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative mt-20">

          {/* Vertical Line */}

          <div
            className="
              absolute
              left-5
              top-0
              h-full
              w-[2px]
              bg-[var(--border-solid)]
              lg:left-1/2
              lg:-translate-x-1/2
            "
          />

          {/* Items */}

          <div className="space-y-16">

            {careerData.map((experience) => (
              <TimelineCard
                key={experience.id}
                experience={experience}
              />
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
export default function Hero() {
  return (
    <section
      id="hero"
      className="
        flex
        min-h-[85vh]
        items-center
        justify-center
        px-6
        pt-28
        md:px-10
        lg:px-16
      "
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* Badge

        <span className="glass inline-flex rounded-full px-5 py-2 text-sm font-medium text-[var(--accent)]">
          Enterprise Software • AI Solutions • .NET 10
        </span> */}

        {/* Heading */}

        <h1
          className="
            mt-8
            max-w-4xl
            text-5xl
            font-extrabold
            leading-tight
            text-[var(--text-primary)]
            md:text-6xl
            lg:text-7xl
          "
        >
          Building enterprise software
          <br />
          that delivers
          <span className="text-[var(--primary)]">
            {" "}real business value.
          </span>
        </h1>

        {/* Description */}

        <p
          className="
            mt-8
            max-w-2xl
            text-lg
            leading-9
            text-[var(--text-secondary)]
          "
        >
          Senior Software Engineer with 5+ years of experience
          developing enterprise .NET applications, scalable REST APIs,
          database-driven systems and modern web applications. Currently
          building AI-powered enterprise solutions alongside production-grade
          business software.
        </p>

        {/* Buttons */}

        <div className="mt-12 flex flex-wrap gap-5">

          <a
            href="#career"
            className="primary-btn rounded-xl px-8 py-4 font-semibold"
          >
            Career Journey
          </a>

          <a
            href="#projects"
            className="secondary-btn rounded-xl px-8 py-4 font-semibold"
          >
            View Projects
          </a>

        </div>

      </div>
    </section>
  );
}
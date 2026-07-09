export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 py-24 md:px-10 lg:px-16"
    >
      <div
        className="
          glass
          mx-auto
          max-w-5xl
          rounded-[32px]
          p-10
          md:p-16
        "
      >
        <div className="max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
            Let's build something meaningful together.
          </h2>

          <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
            I'm currently open to Software Engineer opportunities,
            especially backend and full-stack roles focused on
            .NET, React, cloud technologies and AI-powered applications.
          </p>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">

          <a
            href="mailto:YOUR_EMAIL@gmail.com"
            className="glass rounded-2xl p-6 transition hover:-translate-y-1"
          >
            <p className="text-sm text-[var(--text-secondary)]">
              Email
            </p>

            <h3 className="mt-2 text-xl font-semibold text-[var(--primary)]">
              anusharajeshdev@gmail.com
            </h3>
          </a>

          <a
            href="https://www.linkedin.com/in/anusha-rajeshkannan-485a83155/"
            target="_blank"
            rel="noreferrer"
            className="glass rounded-2xl p-6 transition hover:-translate-y-1"
          >
            <p className="text-sm text-[var(--text-secondary)]">
              LinkedIn
            </p>

            <h3 className="mt-2 text-xl font-semibold text-[var(--primary)]">
              Connect with me
            </h3>
          </a>

          <a
            href="https://github.com/anusharajeshdev-design"
            target="_blank"
            rel="noreferrer"
            className="glass rounded-2xl p-6 transition hover:-translate-y-1"
          >
            <p className="text-sm text-[var(--text-secondary)]">
              GitHub
            </p>

            <h3 className="mt-2 text-xl font-semibold text-[var(--primary)]">
              View my repositories
            </h3>
          </a>

          <a
            href="/resume.pdf"
            className="glass rounded-2xl p-6 transition hover:-translate-y-1"
          >
            <p className="text-sm text-[var(--text-secondary)]">
              Resume
            </p>

            <h3 className="mt-2 text-xl font-semibold text-[var(--primary)]">
              Download Resume
            </h3>
          </a>

        </div>
      </div>
    </section>
  );
}
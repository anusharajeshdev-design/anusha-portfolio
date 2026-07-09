export default function Footer() {
  return (
    <footer className="px-6 py-10">

      <div className="mx-auto max-w-7xl border-t border-[var(--border-solid)] pt-8">

        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-[var(--text-secondary)] md:flex-row">

          <p>
            © {new Date().getFullYear()} Anusha Rajeshkannan.
            All rights reserved.
          </p>

          <p>
            Built with React · TypeScript · Tailwind CSS
          </p>

          <p>Version 1.0</p>

        </div>

      </div>

    </footer>
  );
}
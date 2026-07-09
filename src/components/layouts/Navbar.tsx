import { Menu } from "lucide-react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Journey", href: "#career" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className="
          glass
          mx-auto
          mt-4
          flex
          h-16
          sm:h-18
          lg:h-20
          w-[94%]
          max-w-7xl
          items-center
          justify-between
          px-5
          sm:px-6
          lg:px-10
        "
      >
        {/* Logo */}

        <a
          href="#hero"
          className="
            text-lg
            sm:text-xl
            lg:text-2xl
            font-bold
            tracking-tight
            text-[var(--text-primary)]
            transition-colors
            hover:text-[var(--primary)]
          "
        >
          Anusha Rajeshkannan
        </a>

        {/* Desktop Navigation */}

        <ul className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="
                  group
                  relative
                  text-sm
                  font-medium
                  text-[var(--text-secondary)]
                  transition-colors
                  hover:text-[var(--text-primary)]
                "
              >
                {item.label}

                <span
                  className="
                    absolute
                    -bottom-2
                    left-0
                    h-[2px]
                    w-0
                    rounded-full
                    bg-[var(--primary)]
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side */}

        <div className="flex items-center gap-3">

          {/* Resume */}

          <a
            href="#contact"
            className="
              primary-btn
              rounded-xl
              px-4
              py-2.5
              sm:px-5
              sm:py-3
              lg:px-6
              text-sm
              font-semibold
            "
          >
            Resume
          </a>

          {/* Mobile Menu */}

          <button
            className="
              glass
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              lg:hidden
            "
          >
            <Menu size={22} />
          </button>

        </div>
      </nav>
    </header>
  );
}
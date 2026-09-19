import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { business } from "../../config/business";
import { navItems } from "../../data/nav";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.classList.add("menu-open");

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("menu-open");
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-950/90 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between gap-6">
          <Link
            to="/"
            className="group flex min-w-0 items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
            aria-label={`${business.name} home`}
          >
            <span
              className="grid h-10 w-10 shrink-0 place-items-center border border-accent-400/40 bg-accent-500/10 text-sm font-bold tracking-tight text-accent-400 transition-colors group-hover:bg-accent-500 group-hover:text-ink-950"
              aria-hidden="true"
            >
              MA
            </span>
            <span className="min-w-0 text-left">
              <span className="block truncate text-sm font-bold uppercase tracking-[0.2em] text-bone-50">
                {business.name}
              </span>
              <span className="mt-0.5 block text-[10px] uppercase tracking-[0.24em] text-steel-400">
                {business.tagline}
              </span>
            </span>
          </Link>

          <nav className="hidden md:block" aria-label="Primary navigation">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="relative py-2 text-xs font-semibold uppercase tracking-[0.18em] text-bone-200/80 transition-colors hover:text-accent-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:block">
            <Button asChild size="sm">
              <Link to="/contact">Discuss project</Link>
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden grid h-11 w-11 place-items-center border border-white/15 text-bone-50 transition-colors hover:border-accent-400/60 hover:text-accent-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
            <span className="relative block h-5 w-5" aria-hidden="true">
              <span
                className={`absolute left-0 top-[0.35rem] h-px w-5 bg-current transition-transform duration-200 ${isMenuOpen ? "rotate-45 translate-y-[0.45rem]" : ""}`}
              />
              <span
                className={`absolute left-0 top-[1.75rem] h-px w-5 bg-current transition-transform duration-200 ${isMenuOpen ? "-rotate-45 -translate-y-[0.45rem]" : ""}`}
              />
            </span>
          </button>
        </div>
      </Container>

      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          className="border-t border-white/10 bg-ink-950 md:hidden"
          aria-label="Mobile navigation"
        >
          <Container>
            <ul className="divide-y divide-white/10 py-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    onClick={closeMenu}
                    className="flex items-center justify-between px-1 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-bone-100 transition-colors hover:text-accent-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
                  >
                    {item.label}
                    <span className="text-xs text-steel-500" aria-hidden="true">
                      0{navItems.indexOf(item) + 1}
                    </span>
                  </Link>
                </li>
              ))}
              <li className="pt-5">
                <Button asChild className="w-full" onClick={closeMenu}>
                  <Link to="/contact">Discuss project</Link>
                </Button>
              </li>
            </ul>
          </Container>
        </nav>
      )}
    </header>
  );
}
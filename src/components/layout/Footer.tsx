import { Link } from "react-router-dom";
import { business } from "../../config/business";
import { navItems } from "../../data/nav";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink-950" aria-label="Footer">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-[1.35fr_0.7fr_0.95fr] md:gap-8 lg:py-20">
          <div className="max-w-md">
            <Link
              to="/"
              className="inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
              aria-label={`${business.name} home`}
            >
              <span
                className="grid h-10 w-10 place-items-center border border-accent-400/40 bg-accent-500/10 text-sm font-bold text-accent-400"
                aria-hidden="true"
              >
                MA
              </span>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-bone-50">
                {business.name}
              </span>
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-7 text-bone-200/70">{business.tagline}</p>
            {business.location && (
              <p className="mt-3 text-xs uppercase tracking-[0.18em] text-steel-400">{business.location}</p>
            )}
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-accent-400">Explore</h2>
            <ul className="mt-6 space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-bone-200/75 transition-colors hover:text-accent-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-accent-400">Project enquiries</h2>
            <p className="mt-6 max-w-xs text-sm leading-7 text-bone-200/70">
              Share the shape of your requirement and start a focused conversation about the work ahead.
            </p>
            <div className="mt-7">
              <Button asChild variant="secondary" size="sm">
                <Link to="/contact">Discuss your project</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-bone-200/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} {business.name}. All rights reserved.</p>
          <Link to="/" className="w-fit uppercase tracking-[0.18em] transition-colors hover:text-accent-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950">
            Back to top
          </Link>
        </div>
      </Container>
    </footer>
  );
}
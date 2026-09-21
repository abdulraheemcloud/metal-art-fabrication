import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-ink-950 text-bone-50"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(199,123,63,0.12),transparent_34rem),linear-gradient(115deg,rgba(7,16,23,0.96)_0%,rgba(11,21,29,0.88)_48%,rgba(7,16,23,0.98)_100%)]" />
        <div className="absolute inset-0 opacity-[0.16] hero-grid" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-400/60 to-transparent" />
      </div>

      <Container>
        <div className="relative grid min-h-[calc(100svh-5rem)] items-center gap-16 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 border border-white/15 bg-white/5 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-bone-200">
              <span className="h-1.5 w-1.5 bg-accent-400" aria-hidden="true" />
              Metal Art Fabrication
            </div>

            <h1
              id="hero-title"
              className="mt-8 text-balance text-5xl leading-[0.98] tracking-[-0.055em] text-bone-50 sm:text-6xl lg:text-7xl xl:text-[5.25rem]"
            >
              Custom Metal Fabrication in Coimbatore
            </h1>

            <p className="mt-8 max-w-xl text-balance text-base leading-8 text-bone-200/80 sm:text-lg sm:leading-9">
              Metal Art Fabrication specializes in custom metal works including gates, grills, railings, rolling shutters,
              staircases, roofing structures and fabrication solutions for residential, commercial and industrial
              requirements.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button asChild size="lg">
                <Link to="/contact">Start an Enquiry</Link>
              </Button>
              <Button href="#gallery" variant="secondary" size="lg">
                View Our Work
              </Button>
            </div>

            <ul className="mt-14 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-bone-200/60">
              <li className="flex items-center gap-2.5">
                <span className="h-px w-6 bg-accent-400/70" aria-hidden="true" />
                Based in Coimbatore
              </li>
              <li className="flex items-center gap-2.5">
                <span className="h-px w-6 bg-accent-400/70" aria-hidden="true" />
                Custom metal fabrication
              </li>
              <li className="flex items-center gap-2.5">
                <span className="h-px w-6 bg-accent-400/70" aria-hidden="true" />
                Residential to industrial projects
              </li>
            </ul>
          </div>

          <div className="relative lg:justify-self-end">
            <div className="absolute -inset-5 rounded-full bg-accent-400/10 blur-3xl" aria-hidden="true" />
            <div
              className="hero-visual relative min-h-[24rem] overflow-hidden border border-white/15 bg-ink-900 shadow-[0_35px_90px_-35px_rgba(0,0,0,0.8)] sm:min-h-[30rem] lg:min-h-[34rem]"
              role="img"
              aria-label="Abstract steel fabrication visual placeholder, ready for verified project photography"
            >
              <div className="hero-visual-frame absolute inset-5" aria-hidden="true" />
              <div className="hero-visual-panel hero-visual-panel-one absolute" aria-hidden="true" />
              <div className="hero-visual-panel hero-visual-panel-two absolute" aria-hidden="true" />
              <div className="hero-visual-cut absolute" aria-hidden="true" />
              <div className="absolute inset-x-5 top-5 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.24em] text-bone-200/60">
                <span>Visual study</span>
                <span className="text-accent-400">01</span>
              </div>
              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between text-[10px] font-semibold uppercase tracking-[0.24em] text-bone-200/60">
                <span>Photography slot</span>
                <span className="h-px w-16 bg-white/20" aria-hidden="true" />
              </div>
            </div>
            <div className="absolute -right-3 top-8 hidden h-24 w-px bg-gradient-to-b from-transparent via-accent-400/70 to-transparent lg:block" aria-hidden="true" />
          </div>
        </div>
      </Container>
    </section>
  );
}
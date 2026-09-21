import { useScrollReveal } from "../../hooks/useScrollReveal";
import { business } from "../../config/business";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

export function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden border-y border-white/10 bg-ink-950 py-24 sm:py-28 lg:py-36"
      aria-labelledby="about-title"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_85%,rgba(199,123,63,0.08),transparent_28rem),linear_gradient(100deg,rgba(17,30,40,0.5),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.1] hero-grid" />
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <Container>
        <div className={`grid items-center gap-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20 ${isVisible ? "reveal visible" : "reveal"}`}>
          <div className="relative">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-accent-400" aria-hidden="true" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-accent-400">About the business</p>
            </div>

            <h2
              id="about-title"
              className="mt-7 text-balance text-4xl leading-[1.04] tracking-[-0.045em] text-bone-50 sm:text-5xl lg:text-6xl"
            >
              What to expect when you{" "}
              <span className="text-accent-400">approach us for fabrication work.</span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-bone-200/75 sm:text-lg sm:leading-9">
              Metal Art Fabrication specializes in custom metal works including gates, grills, railings,
              rolling shutters, staircases, roofing structures and fabrication solutions for residential,
              commercial and industrial requirements.
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-bone-200/75 sm:text-lg sm:leading-9">
              When you get in touch, we listen to your requirement, discuss practical details like materials,
              dimensions, and timeline, and give you a clear sense of what the work involves. There are no fixed
              packages — every enquiry is reviewed on its own terms.
            </p>

            <dl className="mt-10 grid max-w-xl grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-3">
              <div className="bg-ink-950 p-5">
                <dt className="text-[9px] font-semibold uppercase tracking-[0.2em] text-steel-400">Business</dt>
                <dd className="mt-3 text-sm font-semibold leading-6 text-bone-50">{business.name}</dd>
              </div>
              <div className="bg-ink-950 p-5">
                <dt className="text-[9px] font-semibold uppercase tracking-[0.2em] text-steel-400">Focus</dt>
                <dd className="mt-3 text-sm font-semibold leading-6 text-bone-50">{business.tagline}</dd>
              </div>
              <div className="bg-ink-950 p-5">
                <dt className="text-[9px] font-semibold uppercase tracking-[0.2em] text-steel-400">Profile</dt>
                <dd className="mt-3 text-sm font-semibold leading-6 text-accent-400">Welding Fabrication &amp; Engineering Works</dd>
              </div>
            </dl>

            <div className="mt-9">
              <Button href="#contact" variant="secondary" size="sm">
                Discuss your requirement
              </Button>
            </div>
          </div>

          <div className="relative lg:justify-self-end">
            <div className="absolute -inset-6 rounded-full bg-accent-400/10 blur-3xl" aria-hidden="true" />
            <div
              className="relative min-h-[30rem] overflow-hidden border border-white/15 bg-ink-800 shadow-[0_35px_90px_-35px_rgba(0,0,0,0.8)]"
              role="img"
              aria-label="Abstract workshop visual placeholder, ready for approved imagery"
            >
              <div className="absolute inset-0 bg-[radial_gradient(circle_at_72%_22%,rgba(217,150,95,0.14),transparent_22rem),linear_gradient(145deg,#172631_0%,#0b151d_58%,#111e28_100%)]" aria-hidden="true" />
              <div className="absolute inset-0 opacity-30 hero-grid" aria-hidden="true" />
              <div className="absolute inset-7 border border-white/10" aria-hidden="true" />
              <div className="absolute left-[16%] top-[22%] h-[38%] w-[48%] border border-accent-400/25 bg-[linear_gradient(120deg,rgba(255,255,255,0.1),transparent_38%),linear_gradient(145deg,#344854,#172631_55%,#0d1922)]" aria-hidden="true" />
              <div className="absolute bottom-[18%] right-[14%] h-[28%] w-[38%] border border-white/15 bg-[linear_gradient(120deg,rgba(255,255,255,0.08),transparent_38%),linear_gradient(145deg,#263b47,#111e28_60%)]" aria-hidden="true" />
              <div className="absolute left-[16%] top-[46%] h-px w-[52%] bg-gradient-to-r from-transparent via-accent-400/70 to-transparent" aria-hidden="true" />
              <div className="absolute inset-x-7 top-7 flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.22em] text-bone-200/65">
                <span>Workshop view</span>
                <span className="text-accent-400">Pending</span>
              </div>
              <div className="absolute inset-x-7 bottom-7 flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.22em] text-bone-200/65">
                <span>Photography slot</span>
                <span className="h-px w-14 bg-white/20" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
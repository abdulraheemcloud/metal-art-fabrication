import { useScrollReveal } from "../../hooks/useScrollReveal";
import { Container } from "../ui/Container";

type ValueItem = {
  number: string;
  title: string;
  description: string;
};

const values: readonly ValueItem[] = [
  {
    number: "01",
    title: "Accurate Measurements",
    description: "Every measurement is taken carefully before fabrication begins, so materials and dimensions are correct from the start.",
  },
  {
    number: "02",
    title: "Quality Materials",
    description: "We use appropriate-grade steel and fittings suited to the intended use and environment of each fabrication.",
  },
  {
    number: "03",
    title: "Strong Workmanship",
    description: "Welds, joints, and finishes are completed with care so each piece is built to last.",
  },
  {
    number: "04",
    title: "Custom Solutions",
    description: "Every project is shaped around your specific measurements, space, and functional requirements.",
  },
];

function ValueIcon({ number }: { number: string }) {
  return (
    <span
      className="grid h-12 w-12 place-items-center border border-accent-400/25 bg-accent-500/10 text-sm font-semibold tracking-[0.14em] text-accent-400"
      aria-hidden="true"
    >
      {number}
    </span>
  );
}

export function WhyChooseUs() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="why-choose-us"
      ref={ref}
      className="relative overflow-hidden border-y border-white/10 bg-ink-900 py-24 sm:py-28 lg:py-36"
      aria-labelledby="why-title"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial_gradient(circle_at_88%_18%,rgba(199,123,63,0.09),transparent_30rem),linear_gradient(180deg,transparent,rgba(7,16,23,0.42))]" />
        <div className="absolute inset-0 opacity-[0.1] hero-grid" />
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <Container>
        <div className={`grid items-end gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 ${isVisible ? "reveal visible" : "reveal"}`}>
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-accent-400" aria-hidden="true" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-accent-400">How we work</p>
            </div>
            <h2
              id="why-title"
              className="mt-7 text-balance text-4xl leading-[1.04] tracking-[-0.045em] text-bone-50 sm:text-5xl lg:text-6xl"
            >
              A straightforward way to{" "}
              <span className="text-accent-400">approach a project.</span>
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-bone-200/75 sm:text-lg sm:leading-9">
              These are the standards we follow on every project — accurate measurements, quality materials,
              strong workmanship, and custom solutions tailored to each requirement.
            </p>
          </div>

          <div className="flex items-center justify-start gap-3 border-l border-accent-400/30 pl-6 lg:justify-end">
            <span className="h-2 w-2 bg-accent-400" aria-hidden="true" />
            <p className="max-w-md text-xs leading-6 uppercase tracking-[0.16em] text-bone-200/60">
              Working principles for a focused enquiry
            </p>
          </div>
        </div>

        <div
          className={`mt-16 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4 ${isVisible ? "reveal visible" : "reveal"}`}
          style={{ transitionDelay: isVisible ? "0.1s" : "0s" }}
        >
          {values.map((value) => (
            <article
              key={value.number}
              className={`group relative flex min-h-[17rem] flex-col bg-ink-950 p-7 transition-colors duration-300 hover:bg-ink-800 reveal ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${0.1 + values.indexOf(value) * 0.08}s` }}
            >
              <span
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-400/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />
              <div className="flex items-start justify-between gap-4">
                <ValueIcon number={value.number} />
                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-steel-500">Principle</span>
              </div>
              <h3 className="mt-10 text-xl font-semibold leading-tight tracking-[-0.025em] text-bone-50">
                {value.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-bone-200/65">{value.description}</p>
              <div className="mt-auto pt-8">
                <span className="inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-bone-200/40">
                  <span className="h-px w-6 bg-accent-400/60" aria-hidden="true" />
                  Intended approach
                </span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
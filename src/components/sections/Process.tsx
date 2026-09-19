import { useScrollReveal } from "../../hooks/useScrollReveal";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

const steps = [
  {
    number: "01",
    title: "Discuss Your Requirement",
    description:
      "We listen to the brief, review any references or drawings, and clarify the scope, materials, and timeline before any work begins.",
  },
  {
    number: "02",
    title: "Plan & Prepare",
    description:
      "The requirement is translated into a practical plan — material selection, cutting lists, fabrication sequence, and any sub-contracted operations are confirmed.",
  },
  {
    number: "03",
    title: "Fabricate",
    description:
      "The workpiece is cut, formed, joined, and finished in the workshop using the agreed processes. Progress is tracked against the plan.",
  },
  {
    number: "04",
    title: "Final Check & Handover",
    description:
      "The completed piece is inspected against the original requirement, any protective finishes are applied, and the work is prepared for collection or delivery.",
  },
] as const;

export function Process() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="process"
      ref={ref}
      className="relative overflow-hidden border-y border-white/10 bg-ink-950 py-24 sm:py-28 lg:py-36"
      aria-labelledby="process-title"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial_gradient(circle_at_88%_15%,rgba(199,123,63,0.08),transparent_28rem),linear_gradient(100deg,rgba(17,30,40,0.5),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.1] hero-grid" />
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <Container>
        <div className={`relative mx-auto max-w-3xl text-center reveal ${isVisible ? "visible" : ""}`}>
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-accent-400" aria-hidden="true" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-accent-400">
              How we work
            </p>
          </div>
          <h2
            id="process-title"
            className="mt-7 text-balance text-4xl leading-[1.04] tracking-[-0.045em] text-bone-50 sm:text-5xl lg:text-6xl"
          >
            A clear{" "}
            <span className="text-accent-400">fabrication process.</span>
          </h2>
          <p className="mt-7 max-w-2xl mx-auto text-base leading-8 text-bone-200/75 sm:text-lg sm:leading-9">
            Every project follows a consistent sequence so you know what to expect at each stage. The wording below is
            generic and does not represent any specific business claim.
          </p>
        </div>

        <div
          className={`mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 ${isVisible ? "reveal visible" : "reveal"}`}
          style={{ transitionDelay: isVisible ? "0.1s" : "0s" }}
        >
          {steps.map((step, index) => (
            <article
              key={step.number}
              className={`relative flex flex-col overflow-hidden border border-white/10 bg-white/[0.025] p-7 shadow-[0_20px_60px_-35px_rgba(0,0,0,0.7)] transition-colors duration-300 hover:border-accent-400/40 hover:bg-white/[0.045] reveal ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${0.1 + index * 0.08}s` }}
            >
              <span
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-400/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />
              <div className="flex items-start justify-between gap-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-steel-500">
                  {step.number}
                </span>
              </div>

              <div className="mt-10 flex-1">
                <h3 className="text-xl font-semibold leading-tight tracking-[-0.025em] text-bone-50">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-bone-200/65">{step.description}</p>
              </div>

              <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/10 pt-6">
                <span
                  className="inline-flex items-center gap-1.5 border border-accent-400/25 bg-accent-500/10 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-accent-400"
                  aria-hidden="true"
                >
                  <span className="h-1 w-1 bg-accent-400" aria-hidden="true" />
                  Step {index + 1}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div
          className={`mt-14 text-center reveal ${isVisible ? "visible" : ""}`}
          style={{ transitionDelay: "0.4s" }}
        >
          <Button href="#contact" variant="primary" size="md">
            Start a conversation
          </Button>
        </div>
      </Container>
    </section>
  );
}
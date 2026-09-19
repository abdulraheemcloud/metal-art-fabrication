import { useScrollReveal } from "../../hooks/useScrollReveal";
import { Container } from "../ui/Container";
import { projects, type ProjectItem } from "../../data/projects";

type ProjectVisualProps = {
  project: ProjectItem;
  index: number;
};

function ProjectVisual({ project, index }: ProjectVisualProps) {
  if (project.image.src) {
    return (
      <img
        src={project.image.src}
        alt={project.image.alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
    );
  }

  return (
    <div
      className="gallery-placeholder relative h-full w-full overflow-hidden bg-ink-800"
      role="img"
      aria-label={project.image.alt}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(217,150,95,0.16),transparent_24rem),linear-gradient(145deg,#172631_0%,#0b151d_58%,#111e28_100%)]" aria-hidden="true" />
      <div className="absolute inset-0 opacity-30 hero-grid" aria-hidden="true" />
      <div className="absolute inset-6 border border-white/10" aria-hidden="true" />
      <div
        className="absolute left-[14%] top-[20%] h-[42%] w-[58%] border border-accent-400/25 bg-[linear-gradient(120deg,rgba(255,255,255,0.12),transparent_38%),linear_grad(145deg,#344854,#172631_55%,#0d1922)] shadow-[0_22px_45px_-20px_rgba(0,0,0,0.75)]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[16%] right-[12%] h-[28%] w-[42%] border border-white/15 bg-[linear_gradient(120deg,rgba(255,255,255,0.09),transparent_38%),linear_gradient(145deg,#263b47,#111e28_60%)]"
        aria-hidden="true"
      />
      <div className="absolute left-[14%] top-[45%] h-px w-[58%] bg-gradient-to-r from-transparent via-accent-400/70 to-transparent" aria-hidden="true" />
      <div className="absolute inset-x-6 top-6 flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.22em] text-bone-200/65">
        <span className="inline-flex items-center gap-2">
          <span className="h-1 w-1 bg-accent-400" aria-hidden="true" />
          Image pending
        </span>
        <span className="text-accent-400">0{index + 1}</span>
      </div>
      <div className="absolute inset-x-6 bottom-6 flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.22em] text-bone-200/65">
        <span>Photography slot</span>
        <span className="h-px w-14 bg-white/20" aria-hidden="true" />
      </div>
    </div>
  );
}

export function Gallery() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="gallery"
      ref={ref}
      className="relative overflow-hidden border-y border-white/10 bg-ink-900 py-24 sm:py-28 lg:py-36"
      aria-labelledby="gallery-title"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_12%,rgba(199,123,63,0.09),transparent_30rem),linear-gradient(180deg,transparent,rgba(7,16,23,0.42))]" />
        <div className="absolute inset-0 opacity-[0.1] hero-grid" />
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <Container>
        <div className={`reveal ${isVisible ? "visible" : ""}`}>
          <div className="relative mx-auto max-w-3xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-accent-400" aria-hidden="true" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-accent-400">Selected work</p>
            </div>
            <h2
              id="gallery-title"
              className="mt-7 text-balance text-4xl leading-[1.04] tracking-[-0.045em] text-bone-50 sm:text-5xl lg:text-6xl"
            >
              Examples of fabrication work and{" "}
              <span className="text-accent-400">metalwork details.</span>
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-bone-200/75 sm:text-lg sm:leading-9">
              This gallery is prepared for verified customer projects. The current cards are clearly marked placeholders
              and do not represent completed Metal Art Fabrication work.
            </p>
          </div>
        </div>

        <div
          className={`mt-16 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:grid-rows-2 ${isVisible ? "reveal visible" : "reveal"}`}
          style={{ transitionDelay: isVisible ? "0.1s" : "0s" }}
        >
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`group relative flex flex-col overflow-hidden border border-white/10 bg-ink-950 shadow-[0_24px_70px_-35px_rgba(0,0,0,0.8)] transition-colors duration-300 hover:border-accent-400/40 hover:bg-ink-800 reveal ${isVisible ? "visible" : ""} ${index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}
              style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
            >
              <div
                className={`relative overflow-hidden bg-ink-800 ${index === 0 ? "aspect-[4/3] lg:aspect-auto lg:min-h-[34rem]" : "aspect-[16/10] lg:min-h-[16.5rem]"}`}
              >
                <ProjectVisual project={project} index={index} />
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7 lg:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-accent-400">
                      {project.category}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold leading-tight tracking-[-0.025em] text-bone-50">
                      {project.title}
                    </h3>
                  </div>
                  {project.placeholder && (
                    <span
                      className="inline-flex shrink-0 items-center gap-1.5 border border-accent-400/25 bg-accent-500/10 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-accent-400"
                      title="This project is a preview placeholder"
                    >
                      <span className="h-1 w-1 bg-accent-400" aria-hidden="true" />
                      Preview
                    </span>
                  )}
                </div>

                <p className="mt-4 max-w-xl text-sm leading-7 text-bone-200/65">{project.description}</p>

                <div className="mt-auto flex items-center justify-between gap-4 border-t border-white/10 pt-6">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-steel-500">
                    {project.verificationStatus}
                  </span>
                  <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-bone-200/40">
                    Project {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div
          className={`mt-12 flex items-start gap-3 border border-white/10 bg-white/[0.025] p-5 text-xs leading-6 text-bone-200/60 reveal ${isVisible ? "visible" : ""}`}
          style={{ transitionDelay: "0.4s" }}
        >
          <span className="mt-0.5 h-1.5 w-1.5 shrink-0 bg-accent-400" aria-hidden="true" />
          <p>
            Replace each placeholder with customer-approved project photography and verified details before this
            gallery is published as a portfolio.
          </p>
        </div>
      </Container>
    </section>
  );
}
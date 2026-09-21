import { useScrollReveal } from "../../hooks/useScrollReveal";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { services, type ServiceIcon } from "../../data/services";

type ServiceIconProps = {
  icon: ServiceIcon;
};

function ServiceIcon({ icon }: ServiceIconProps) {
  const stroke = "currentColor";
  const commonProps = {
    "aria-hidden": true,
    className: "h-6 w-6",
    fill: "none",
    stroke,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.5,
    viewBox: "0 0 24 24",
  };

  if (icon === "custom") {
    return (
      <svg {...commonProps}>
        <path d="M4 5.5h16v13H4z" />
        <path d="M8 9h8M8 12.5h5M8 16h8" />
      </svg>
    );
  }

  if (icon === "structural") {
    return (
      <svg {...commonProps}>
        <path d="M4 19V9l8-4 8 4v10" />
        <path d="M4 13h16M9 9v10M15 9v10" />
      </svg>
    );
  }

  if (icon === "decorative") {
    return (
      <svg {...commonProps}>
        <path d="M12 3.5 20 12l-8 8.5L4 12z" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4L14 13l-3-3z" />
    </svg>
  );
}

export function Services() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="services"
      ref={ref}
      className="relative overflow-hidden border-y border-white/10 bg-ink-950 py-24 sm:py-28 lg:py-36"
      aria-labelledby="services-title"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(199,123,63,0.08),transparent_28rem),linear-gradient(180deg,rgba(17,30,40,0.42),transparent_42rem)]" />
        <div className="absolute inset-0 opacity-[0.12] hero-grid" />
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <Container>
        <div className={`reveal ${isVisible ? "visible" : ""}`}>
          <div className="relative mx-auto max-w-3xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-accent-400" aria-hidden="true" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-accent-400">
                Service directions
              </p>
            </div>
            <h2
              id="services-title"
              className="mt-7 text-balance text-4xl leading-[1.04] tracking-[-0.045em] text-bone-50 sm:text-5xl lg:text-6xl"
            >
              Fabrication work you can{" "}
              <span className="text-accent-400">discuss with us.</span>
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-bone-200/75 sm:text-lg sm:leading-9">
              These are the general types of fabrication and welding enquiries we handle. Discuss your
              requirement and we will confirm the right approach for your project.
            </p>
          </div>
        </div>

        <div
          className={`mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 ${isVisible ? "reveal visible" : "reveal"}`}
          style={{ transitionDelay: isVisible ? "0.1s" : "0s" }}
        >
          {services.map((service, index) => (
            <article
              key={service.id}
              className={`group relative flex min-h-[19rem] flex-col border border-white/10 bg-white/[0.025] p-7 shadow-[0_20px_60px_-35px_rgba(0,0,0,0.7)] transition-colors duration-300 hover:border-accent-400/40 hover:bg-white/[0.045] focus-within:border-accent-400/40 reveal ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${0.1 + index * 0.08}s` }}
            >
              <span
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-400/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />
              <div className="flex items-start justify-between gap-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-steel-500">
                  0{index + 1}
                </span>
                {service.placeholder && (
                  <span
                    className="inline-flex items-center gap-1.5 border border-accent-400/25 bg-accent-500/10 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-accent-400"
                    title="This entry is a preview placeholder"
                  >
                    <span className="h-1 w-1 bg-accent-400" aria-hidden="true" />
                    Preview
                  </span>
                )}
              </div>

              <div className="mt-10 grid h-16 w-16 shrink-0 place-items-center border border-accent-400/25 bg-accent-500/10 text-accent-400 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-ink-950">
                <ServiceIcon icon={service.icon} />
                <span className="absolute right-0 top-0 h-2 w-2 bg-accent-400" aria-hidden="true" />
              </div>

              <div className="mt-9 flex-1">
                <h3 className="text-xl font-semibold leading-tight tracking-[-0.025em] text-bone-50">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-bone-200/65">{service.description}</p>
              </div>

              <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/10 pt-6">
                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-steel-500">
                  {service.verificationStatus}
                </span>
                {service.actionLabel && service.actionHref && (
                  <Button href={service.actionHref} variant="secondary" size="sm" className="shrink-0">
                    {service.actionLabel}
                  </Button>
                )}
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
            Contact us to discuss your specific requirement and confirm details, pricing, and timelines.
          </p>
        </div>
      </Container>
    </section>
  );
}
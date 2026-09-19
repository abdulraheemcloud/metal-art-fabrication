import { useScrollReveal } from "../../hooks/useScrollReveal";
import { business } from "../../config/business";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

const mapQuery = `Metal Art Fabrication, ${business.address.join(" ")}`;
const mapSearchBase = "https://www.google.com/maps/search/?api=1&query=";
const mapUrl = `${mapSearchBase}${encodeURIComponent(mapQuery)}`;

function Location() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="location"
      ref={ref}
      className="relative overflow-hidden border-y border-white/10 bg-ink-900 py-24 sm:py-28 lg:py-36"
      aria-labelledby="location-title"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial_gradient(circle_at_88%_14%,rgba(199,123,63,0.09),transparent_30rem),linear_gradient(180deg,transparent,rgba(7,16,23,0.42))]" />
        <div className="absolute inset-0 opacity-[0.1] hero-grid" />
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <Container>
        <div className={`grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 ${isVisible ? "reveal visible" : "reveal"}`}>
          <div className="relative">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-accent-400" aria-hidden="true" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-accent-400">Location</p>
            </div>
            <h2
              id="location-title"
              className="mt-7 text-balance text-4xl leading-[1.04] tracking-[-0.045em] text-bone-50 sm:text-5xl lg:text-6xl"
            >
              Find us in{" "}
              <span className="text-accent-400">Peelamedu, Coimbatore.</span>
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-bone-200/75 sm:text-lg sm:leading-9">
              The workshop is on Ellaithottam Road in Ramasamy Layout, Peelamedu. Use the map link below to get directions.
            </p>

            <address className="mt-10 not-italic border-l-2 border-accent-400/70 pl-6">
              <span className="block text-sm font-semibold uppercase tracking-[0.18em] text-accent-400">
                Metal Art Fabrication
              </span>
              <span className="mt-3 block text-base leading-8 text-bone-100">
                {business.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </address>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href={mapUrl} target="_blank" rel="noreferrer" size="sm">
                Open location map
              </Button>
              <span className="text-xs leading-6 text-bone-200/50">Map link opens in a new tab.</span>
            </div>
          </div>

          <div className="relative lg:justify-self-end">
            <div className="absolute -inset-6 rounded-full bg-accent-400/10 blur-3xl" aria-hidden="true" />
            <div
              className="location-visual relative min-h-[28rem] overflow-hidden border border-white/15 bg-ink-800 shadow-[0_35px_90px_-35px_rgba(0,0,0,0.8)]"
              role="img"
              aria-label="Abstract location map placeholder, ready for an approved map embed or site image"
            >
              <div className="absolute inset-0 bg-[radial_gradient(circle_at_65%_35%,rgba(217,150,95,0.14),transparent_22rem),linear_gradient(145deg,#172631_0%,#0b151d_58%,#111e28_100%)]" aria-hidden="true" />
              <div className="absolute inset-0 opacity-30 hero-grid" aria-hidden="true" />
              <div className="absolute inset-8 border border-white/10" aria-hidden="true" />
              <div className="absolute inset-x-8 top-[30%] h-px bg-white/15" aria-hidden="true" />
              <div className="absolute inset-y-8 left-[38%] w-px bg-white/15" aria-hidden="true" />
              <div className="absolute inset-x-8 bottom-[28%] h-px bg-white/10" aria-hidden="true" />
              <div className="absolute left-[38%] top-[30%] h-px w-[34%] bg-accent-400/70" aria-hidden="true" />
              <div className="absolute left-[38%] top-[30%] h-[34%] w-px bg-accent-400/50" aria-hidden="true" />
              <div className="absolute left-[calc(38%-0.65rem)] top-[calc(30%-0.65rem)] grid h-[1.3rem] w-[1.3rem] place-items-center rounded-full border-2 border-accent-400 bg-accent-500/20 shadow-[0_0_0_0.5rem_rgba(199,123,63,0.12)]" aria-hidden="true">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
              </div>
              <div className="absolute inset-x-7 top-7 flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.22em] text-bone-200/65">
                <span>Location visual</span>
                <span className="text-accent-400">Template</span>
              </div>
              <div className="absolute inset-x-7 bottom-7 flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.22em] text-bone-200/65">
                <span>Map integration slot</span>
                <span className="h-px w-14 bg-white/20" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export { Location };
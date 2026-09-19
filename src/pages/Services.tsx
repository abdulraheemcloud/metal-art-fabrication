import { Services as ServicesSection } from "../components/sections/Services";
import { Button } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { Link } from "react-router-dom";
import { useSEO } from "../hooks/useSEO";

export function ServicesPage() {
  useSEO("Metal Fabrication Services | Metal Art Fabrication, Coimbatore", "Explore metal fabrication and welding services from Metal Art Fabrication in Coimbatore.");

  return (
    <>
      <section className="relative overflow-hidden bg-ink-950 text-bone-50 py-24 sm:py-28 lg:py-36" aria-labelledby="page-title">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(199,123,63,0.12),transparent_34rem),linear-gradient(115deg,rgba(7,16,23,0.96)_0%,rgba(11,21,29,0.88)_48%,rgba(7,16,23,0.98)_100%)]" />
          <div className="absolute inset-0 opacity-[0.16] hero-grid" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-400/60 to-transparent" />
        </div>
        <Container>
          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-3 border border-white/15 bg-white/5 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-bone-200">
              <span className="h-1.5 w-1.5 bg-accent-400" aria-hidden="true" />
              Metal Art Fabrication
            </div>
            <h1 id="page-title" className="mt-8 text-balance text-4xl leading-[1.04] tracking-[-0.045em] text-bone-50 sm:text-5xl lg:text-6xl">
              Fabrication Services
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-bone-200/75 sm:text-lg sm:leading-9">
              These categories represent the general types of fabrication and welding enquiries we handle.
            </p>
          </div>
        </Container>
      </section>

      <ServicesSection />

      <section className="relative overflow-hidden border-y border-white/10 bg-ink-950 py-24 sm:py-28 lg:py-36" aria-labelledby="cta-title">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial_gradient(circle_at_50%_50%,rgba(199,123,63,0.12),transparent_32rem),linear_gradient(135deg,rgba(17,30,40,0.6),transparent_60%)]" />
          <div className="absolute inset-0 opacity-[0.12] hero-grid" />
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
        <Container>
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 id="cta-title" className="text-balance text-4xl leading-[1.04] tracking-[-0.045em] text-bone-50 sm:text-5xl lg:text-6xl">
              Have a specific requirement?
            </h2>
            <p className="mt-7 text-base leading-8 text-bone-200/75 sm:text-lg sm:leading-9">
              Share the details and we'll review the brief with you.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
              <Button asChild size="lg">
                <Link to="/contact">Start an Enquiry</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link to="/projects">View Our Work</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

export function EnquiryCTA() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="enquiry"
      ref={ref}
      className="relative overflow-hidden border-y border-white/10 bg-ink-950 py-24 sm:py-28 lg:py-36"
      aria-labelledby="enquiry-title"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial_gradient(circle_at_50%_50%,rgba(199,123,63,0.12),transparent_32rem),linear_gradient(135deg,rgba(17,30,40,0.6),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.12] hero-grid" />
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <Container>
        <div className={`relative mx-auto max-w-2xl text-center reveal ${isVisible ? "visible" : ""}`}>
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-accent-400" aria-hidden="true" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-accent-400">
              Have a fabrication requirement?
            </p>
          </div>
          <h2
            id="enquiry-title"
            className="mt-7 text-balance text-4xl leading-[1.04] tracking-[-0.045em] text-bone-50 sm:text-5xl lg:text-6xl"
          >
            Tell us what you need —{" "}
            <span className="text-accent-400">start a conversation.</span>
          </h2>
          <p className="mt-7 text-base leading-8 text-bone-200/75 sm:text-lg sm:leading-9">
            Share your measurements, material ideas, timeline, or a reference you want to explore. We'll review the brief
            and get back to you with the next steps.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="tel:9003414250" variant="primary" size="lg">
              Call Now
            </Button>
            <Button href="https://wa.me/9003414250" target="_blank" rel="noreferrer" variant="secondary" size="lg">
              WhatsApp Us
            </Button>
            <Button href="#contact" variant="primary" size="lg">
              Send Enquiry
            </Button>
          </div>

          <p className="mt-8 text-xs leading-6 text-bone-200/50">
            The enquiry form validates locally and does not transmit data without a connected delivery service.
          </p>
        </div>
      </Container>
    </section>
  );
}
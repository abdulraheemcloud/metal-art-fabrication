import { Link } from "react-router-dom";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";
import { useSEO } from "../hooks/useSEO";

export function NotFound() {
  useSEO("Page Not Found | Metal Art Fabrication", "The requested page could not be found.");

  return (
    <section className="relative overflow-hidden bg-ink-950 text-bone-50 py-24 sm:py-28 lg:py-36" aria-labelledby="not-found-title">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial_gradient(circle_at_50%_50%,rgba(199,123,63,0.1),transparent_32rem),linear_gradient(135deg,rgba(17,30,40,0.6),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.12] hero-grid" />
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <Container>
        <div className="relative mx-auto max-w-2xl text-center reveal">
          <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-accent-400">404</p>
          <h2 id="not-found-title" className="mt-7 text-balance text-4xl leading-[1.04] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Page not found
          </h2>
          <p className="mt-7 text-base leading-8 text-bone-200/75 sm:text-lg sm:leading-9">
            The page you are looking for does not exist or has been moved.
          </p>
          <div className="mt-10">
            <Button asChild size="lg">
              <Link to="/">Return home</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

import { Hero } from "../components/sections/Hero";
import { Services } from "../components/sections/Services";
import { Gallery } from "../components/sections/Gallery";
import { About } from "../components/sections/About";
import { WhyChooseUs } from "../components/sections/WhyChooseUs";
import { Process } from "../components/sections/Process";
import { EnquiryCTA } from "../components/sections/EnquiryCTA";
import { Location } from "../components/sections/Location";
import { useSEO } from "../hooks/useSEO";

export function Home() {
  useSEO({
    title: "Metal Fabrication in Coimbatore | Metal Art Fabrication",
    description: "Metal Art Fabrication in Peelamedu, Coimbatore provides custom MS and stainless steel fabrication, gates, grills, railings, rolling shutters, staircases, sheds and industrial fabrication.",
    canonical: "https://abdulraheemcloud.github.io/metal-art-fabrication/",
  });

  return (
    <>
      <Hero />
      <Services />
      <Gallery />
      <About />
      <WhyChooseUs />
      <Process />
      <EnquiryCTA />
      <Location />
    </>
  );
}
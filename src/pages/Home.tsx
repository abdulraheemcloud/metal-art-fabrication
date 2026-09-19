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
  useSEO("Metal Art Fabrication | Custom Metal Fabrication in Peelamedu, Coimbatore", "Custom metal fabrication and welding solutions in Peelamedu, Coimbatore.");

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
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import About from "@/components/sections/About";
import WhyUs from "@/components/sections/WhyUs";
import Industries from "@/components/sections/Industries";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import RootedInSyria from "@/components/sections/RootedInSyria";
import Leadership from "@/components/sections/Leadership";
import Partners from "@/components/sections/Partners";
import Certifications from "@/components/sections/Certifications";
import CatalogCTA from "@/components/sections/CatalogCTA";
import Showroom from "@/components/sections/Showroom";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-background">
      <Hero />
      <TrustBar />
      <About />
      <WhyUs />
      <Industries />
      <Services />
      <Process />
      <Projects />
      <Testimonials />
      <RootedInSyria />
      <Leadership />
      <Partners />
      <Certifications />
      <CatalogCTA />
      <Showroom />
      <Contact />
    </div>
  );
}

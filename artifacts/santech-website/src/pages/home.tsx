import React from "react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Partners from "@/components/sections/Partners";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-background">
      <Hero />
      <About />
      <Services />
      <Partners />
      <Contact />
    </div>
  );
}

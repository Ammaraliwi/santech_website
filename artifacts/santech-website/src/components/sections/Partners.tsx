import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import brandBannerPath from "@assets/image_1776430628821.png";

const brands = [
  { name: "Electrolux Professional", category: "Commercial Kitchen & Laundry" },
  { name: "Carpigiani", category: "Gelato & Ice Cream Machines" },
  { name: "ISA", category: "Refrigerated Display Cases" },
  { name: "Mondial Forni", category: "Professional Ovens" },
  { name: "SilikoMart Professional", category: "Pastry Molds & Tools" },
  { name: "Martellato", category: "Pastry & Chocolate Equipment" },
  { name: "LaCimbali", category: "Espresso Coffee Machines" },
  { name: "UNOX", category: "Combi Ovens" },
  { name: "Flamic", category: "Bakery & Pastry Machines" },
  { name: "StarMix", category: "Planetary Mixers" },
  { name: "Robot Coupe", category: "Food Processing Equipment" },
  { name: "ORION", category: "Catering Equipment" },
  { name: "EUROPA", category: "Bread, Pastry & Pizza Ovens" },
  { name: "Coldline", category: "Refrigeration Solutions" },
  { name: "Waring Commercial", category: "Commercial Blenders & Mixers" },
  { name: "Ice-Tek", category: "Ice Makers" },
  { name: "Minerva Omega Group", category: "Food Processing & Preservation" },
  { name: "STARMIX", category: "Industrial Planetary Mixers" },
];

const categories = [
  "Gelato & Ice Cream",
  "Professional Baking",
  "Coffee Systems",
  "Refrigeration",
  "Food Processing",
  "Kitchen Workflow",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.06, ease: "easeOut" },
  }),
};

export default function Partners() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="partners" ref={ref} className="py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4 border-b border-accent pb-1">
              Our Partners
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
              World-Class Brands,{" "}
              <span className="text-primary italic">One Trusted Partner</span>
            </h2>
          </motion.div>
          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mt-6 text-muted-foreground text-lg leading-relaxed"
          >
            We are the authorized distributor for 18+ premium international
            equipment manufacturers — each selected for their uncompromising
            quality, innovation, and service standards.
          </motion.p>
        </div>

        {/* Brand banner image */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16 border border-border rounded-sm overflow-hidden shadow-sm"
          data-testid="img-brand-banner"
        >
          <img
            src={brandBannerPath}
            alt="Santech Brand Partners"
            className="w-full object-cover object-bottom"
            style={{ objectPosition: "0 100%", maxHeight: "120px" }}
          />
        </motion.div>

        {/* Category pills */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((cat, i) => (
            <span
              key={i}
              className="text-xs font-medium tracking-wider uppercase px-4 py-2 bg-secondary text-secondary-foreground border border-border rounded-sm"
              data-testid={`badge-category-${i}`}
            >
              {cat}
            </span>
          ))}
        </motion.div>

        {/* Brands grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-border">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="bg-background p-6 flex flex-col items-center text-center group hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              data-testid={`card-brand-${i}`}
            >
              <div className="w-10 h-10 rounded-sm bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                <span className="text-accent font-serif font-bold text-lg">
                  {brand.name.charAt(0)}
                </span>
              </div>
              <span className="text-sm font-serif font-semibold text-foreground group-hover:text-primary-foreground transition-colors leading-tight">
                {brand.name}
              </span>
              <span className="text-xs text-muted-foreground group-hover:text-primary-foreground/60 transition-colors mt-1 leading-snug">
                {brand.category}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA strip */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground text-base">
            Not sure which brand fits your needs?{" "}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-accent font-semibold hover:underline underline-offset-4 transition-colors"
              data-testid="link-partners-cta"
            >
              Talk to our specialists.
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

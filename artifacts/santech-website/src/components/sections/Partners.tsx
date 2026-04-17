import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useI18n } from "@/lib/i18n";

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
  const { t, lang } = useI18n();

  const categories = [
    t("partners.cat.1"),
    t("partners.cat.2"),
    t("partners.cat.3"),
    t("partners.cat.4"),
    t("partners.cat.5"),
    t("partners.cat.6"),
  ];

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
              {t("partners.eyebrow")}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
              {t("partners.title.1")}{" "}
              <span className="text-primary italic">{t("partners.title.2")}</span>
            </h2>
          </motion.div>
          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mt-6 text-muted-foreground text-lg leading-relaxed"
          >
            {t("partners.intro")}
          </motion.p>
        </div>

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

        {/* Brands grid — brand names stay in original (international) form */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-border" dir="ltr">
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
            {t("partners.cta.text")}{" "}
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
              lang={lang}
            >
              {t("partners.cta.link")}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

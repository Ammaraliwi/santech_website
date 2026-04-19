import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import { useI18n } from "@/lib/i18n";

interface Brand {
  name: string;
  category: string;
  domain: string;
  website: string;
  logo?: string;
  logoBg?: string;
}

const brands: Brand[] = [
  { name: "Electrolux Professional", category: "Commercial Kitchen & Laundry", domain: "electroluxprofessional.com", website: "https://www.electroluxprofessional.com/", logo: "/brand-logos/electrolux.png", logoBg: "#041E42" },
  { name: "Carpigiani", category: "Gelato & Ice Cream Machines", domain: "facebook.com/people/Carpigiani-Syria", website: "https://www.facebook.com/people/Carpigiani-Syria/61572858176208/", logo: "/brand-logos/carpigiani.png" },
  { name: "Teknaline", category: "Professional Cooking Lines", domain: "teknaline.com", website: "https://www.teknaline.com/en/", logo: "/brand-logos/teknaline.png" },
  { name: "ISA", category: "Refrigerated Display Cases", domain: "isaitaly.com", website: "https://www.isaitaly.com/", logo: "/brand-logos/isa.png", logoBg: "#ffffff" },
  { name: "Mondial Forni", category: "Professional Ovens", domain: "mondialforni.com", website: "https://www.mondialforni.com" },
  { name: "SilikoMart Professional", category: "Pastry Molds & Tools", domain: "silikomart.com", website: "https://www.silikomart.com" },
  { name: "Martellato", category: "Pastry & Chocolate Equipment", domain: "martellato.com", website: "https://www.martellato.com" },
  { name: "LaCimbali", category: "Espresso Coffee Machines", domain: "cimbali.com", website: "https://www.cimbali.com/", logo: "/brand-logos/lacimbali.png", logoBg: "#1a1a1a" },
  { name: "UNOX", category: "Combi Ovens", domain: "unox.com", website: "https://www.unox.com" },
  { name: "Flamic", category: "Bakery & Pastry Machines", domain: "flamic.it", website: "https://www.flamic.it/", logo: "/brand-logos/flamic.png", logoBg: "#1a1a1a" },
  { name: "StarMix", category: "Planetary Mixers", domain: "starmix.it", website: "https://www.starmix.it", logo: "/brand-logos/starmix.png", logoBg: "#1a1a1a" },
  { name: "Robot Coupe", category: "Food Processing Equipment", domain: "robot-coupe.com", website: "https://www.robot-coupe.com/", logo: "/brand-logos/robot-coupe.png", logoBg: "#ffffff" },
  { name: "Orion", category: "Catering Equipment", domain: "orionstyle.com", website: "https://www.orionstyle.com/", logo: "/brand-logos/orion.png", logoBg: "#ffffff" },
  { name: "Europa", category: "Bread, Pastry & Pizza Ovens", domain: "europaovens.com", website: "https://europaovens.com/", logo: "/brand-logos/europa.png", logoBg: "#000000" },
  { name: "Coldline", category: "Refrigeration Solutions", domain: "coldline.it", website: "https://www.coldline.it" },
  { name: "Waring Commercial", category: "Commercial Blenders & Mixers", domain: "waring.com", website: "https://www.waring.com/", logo: "/brand-logos/waring.png", logoBg: "#ffffff" },
  { name: "Ice-Tek", category: "Ice Makers", domain: "minervaomegagroup.com", website: "https://www.minervaomegagroup.com/en/products/ice-tek-division", logo: "/brand-logos/ice-tek.png", logoBg: "#ffffff" },
  { name: "Minerva Omega Group", category: "Food Processing & Preservation", domain: "minervaomegagroup.com", website: "https://www.minervaomegagroup.com/en/", logo: "/brand-logos/minerva.png", logoBg: "#000000" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: Math.min(i * 0.04, 0.6), ease: "easeOut" },
  }),
};

function BrandLogo({ brand }: { brand: Brand }) {
  const [imgError, setImgError] = useState(false);
  const hasCustomLogo = Boolean(brand.logo);
  const logoSrc = brand.logo ?? `https://www.google.com/s2/favicons?domain=${brand.domain}&sz=128`;

  const bgClass = brand.logoBg ? "" : "bg-accent/5 group-hover:bg-white";
  return (
    <div
      className={`w-16 h-16 rounded-sm flex items-center justify-center transition-colors duration-300 overflow-hidden border border-border/50 group-hover:border-accent/40 ${bgClass}`}
      style={brand.logoBg ? { backgroundColor: brand.logoBg } : undefined}
    >
      {!imgError ? (
        <img
          src={logoSrc}
          alt={`${brand.name} logo`}
          className={hasCustomLogo ? "w-full h-full object-contain p-1.5" : "w-10 h-10 object-contain"}
          onError={() => setImgError(true)}
          loading="lazy"
        />
      ) : (
        <span className="text-accent font-serif font-bold text-2xl group-hover:text-primary transition-colors">
          {brand.name.charAt(0)}
        </span>
      )}
    </div>
  );
}

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
            <motion.a
              key={brand.name}
              href={brand.website}
              target="_blank"
              rel="noopener noreferrer"
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{
                scale: 1.06,
                zIndex: 20,
                boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.25)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-background p-6 flex flex-col items-center text-center group hover:bg-primary hover:text-primary-foreground relative cursor-pointer transition-colors duration-300"
              data-testid={`card-brand-${i}`}
              aria-label={`${brand.name} — Visit website`}
            >
              {/* Accent corner indicator */}
              <span className="absolute top-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-500 ease-out" />
              <ExternalLink className="absolute top-3 right-3 w-3.5 h-3.5 text-muted-foreground/40 group-hover:text-accent group-hover:rotate-12 transition-all duration-300" />
              <BrandLogo brand={brand} />
              <span className="mt-3 text-sm font-serif font-semibold text-foreground group-hover:text-primary-foreground transition-colors leading-tight">
                {brand.name}
              </span>
              <span className="text-xs text-muted-foreground group-hover:text-primary-foreground/60 transition-colors mt-1 leading-snug">
                {brand.category}
              </span>
              <span className="text-[10px] tracking-widest uppercase font-medium text-accent/70 group-hover:text-accent mt-2 transition-colors">
                {brand.domain}
              </span>
            </motion.a>
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

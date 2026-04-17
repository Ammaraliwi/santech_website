import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Globe, Lightbulb } from "lucide-react";

const stats = [
  { value: "30+", label: "Years of Experience", icon: Award },
  { value: "500+", label: "Projects Completed", icon: Users },
  { value: "18+", label: "Premium Brand Partners", icon: Globe },
  { value: "100%", label: "Customer Satisfaction Focus", icon: Lightbulb },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: "easeOut" },
  }),
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="space-y-8">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4 border-b border-accent pb-1">
                Who We Are
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
                Three Decades of{" "}
                <span className="text-primary italic">Food Service</span>{" "}
                Excellence
              </h2>
            </motion.div>

            <motion.p
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              Santech Trading Co. was established in 2017 as the Syrian arm of
              the Syrian House Group, bringing decades of food service expertise
              from Sudan — where SHG has been a market leader since 1991 serving
              pastry shops, restaurants, and gelato studios across Africa.
            </motion.p>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-muted-foreground leading-relaxed"
            >
              Based in Damascus, our mission is to be the trusted partner for
              every food service professional in Syria and the wider Middle East.
              We bring only premium, internationally certified equipment —
              paired with end-to-end consultancy, AutoCAD kitchen design,
              installation, and training. From a boutique patisserie to a
              five-star hotel catering kitchen, we deliver world-class solutions
              at every scale.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex items-center gap-4 pt-2"
            >
              <div className="h-px flex-1 bg-border" />
              <span className="text-sm text-muted-foreground font-medium tracking-wider uppercase">
                Part of Syrian House Group
              </span>
              <div className="h-px flex-1 bg-border" />
            </motion.div>
          </div>

          {/* Right: Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="relative p-8 bg-card border border-border rounded-sm group hover:border-accent/50 hover:shadow-lg transition-all duration-300"
                  data-testid={`card-stat-${i}`}
                >
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                  <div className="text-4xl font-serif font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground leading-snug">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* In-house Design Callout */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-20 p-10 bg-primary text-primary-foreground rounded-sm relative overflow-hidden"
          data-testid="card-design-callout"
        >
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="grid grid-cols-12 h-full">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="border-r border-white/20 h-full" />
              ))}
            </div>
          </div>
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3 inline-block">
              In-House Design Studio
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Professional AutoCAD Kitchen Design
            </h3>
            <p className="text-primary-foreground/75 leading-relaxed">
              Our in-house design team uses professional AutoCAD systems to
              prepare precise kitchen layouts tailored to every client's
              requirements — from spatial planning to equipment positioning and
              workflow optimization. Every detail matters when designing the
              heart of a food operation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

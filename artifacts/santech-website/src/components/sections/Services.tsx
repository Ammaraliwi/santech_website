import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Compass,
  PenTool,
  Package,
  Wrench,
  GraduationCap,
  HeartHandshake,
} from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Consultancy & Planning",
    description:
      "Expert guidance from concept to completion. We analyze your space, workflow, budget, and operational needs to design the optimal food service solution.",
  },
  {
    icon: PenTool,
    title: "AutoCAD Kitchen Design",
    description:
      "Professional computerized kitchen layouts drawn to precise specifications. Every dimension, equipment placement, and flow pattern is optimized before procurement begins.",
  },
  {
    icon: Package,
    title: "Equipment Supply",
    description:
      "Direct access to 18+ premium international brands — Electrolux, Carpigiani, LaCimbali, UNOX, and more. We source only certified, industry-grade equipment.",
  },
  {
    icon: Wrench,
    title: "Installation & Commissioning",
    description:
      "Full professional installation by trained technicians. Every machine is commissioned, tested, and calibrated to manufacturer specifications before handover.",
  },
  {
    icon: GraduationCap,
    title: "Training & Certification",
    description:
      "Hands-on operational training for your team in partnership with our international suppliers. Your staff learns directly from the experts who built the equipment.",
  },
  {
    icon: HeartHandshake,
    title: "After-Sales Support",
    description:
      "Long-term partnership beyond the sale. Maintenance programs, spare parts availability, and technical support to keep your kitchen at peak performance.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      ref={ref}
      className="py-28 bg-secondary/30 relative overflow-hidden"
    >
      {/* Decorative background lines */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="h-full w-full grid grid-rows-12">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="border-b border-foreground" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4 border-b border-accent pb-1">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
              End-to-End{" "}
              <span className="text-primary italic">Food Service</span>{" "}
              Solutions
            </h2>
          </motion.div>
          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mt-6 text-muted-foreground text-lg leading-relaxed"
          >
            From the first consultation sketch to long-term support, Santech
            delivers a complete ecosystem of professional services — so you
            never have to manage multiple vendors.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="bg-background p-8 group hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                data-testid={`card-service-${i}`}
              >
                <div className="w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3 text-foreground group-hover:text-primary-foreground transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-primary-foreground/70 transition-colors">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

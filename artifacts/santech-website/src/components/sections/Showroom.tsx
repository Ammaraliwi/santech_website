import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Clock, ArrowRight, Sparkles } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { settings } from "@/lib/settings";
import { BookingModal } from "@/components/BookingModal";

export default function Showroom() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t, dir } = useI18n();
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-primary"
      data-testid="section-showroom"
      aria-labelledby="showroom-heading"
    >
      {/* Background image with parallax-style positioning */}
      <div className="absolute inset-0 z-0">
        <img
          src={settings.images.showroom_storefront}
          alt={t("showroom.imageAlt")}
          className="w-full h-full object-cover object-center scale-105"
          loading="lazy"
          decoding="async"
        />
        {/* Multi-layer overlay for depth & legibility */}
        <div
          className={`absolute inset-0 bg-gradient-to-${
            dir === "rtl" ? "l" : "r"
          } from-primary/95 via-primary/75 to-primary/30`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-primary/40" />
      </div>

      {/* Subtle accent line top */}
      <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-accent to-transparent z-10" />

      <div className="container relative z-10 mx-auto px-4 md:px-6 py-20 md:py-28 lg:py-36">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 text-primary-foreground"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/40 backdrop-blur-sm mb-6">
              <Sparkles className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
                {t("showroom.eyebrow")}
              </span>
            </div>

            {/* Headline */}
            <h2
              id="showroom-heading"
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] mb-6"
            >
              {t("showroom.title.1")}{" "}
              <span className="text-accent italic">{t("showroom.title.2")}</span>
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-primary-foreground/85 leading-relaxed max-w-xl mb-8">
              {t("showroom.description")}
            </p>

            {/* Info chips */}
            <div className="flex flex-wrap gap-3 mb-10">
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-sm bg-white/10 border border-white/20 backdrop-blur-md">
                <MapPin className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
                <span className="text-sm font-medium">{t("showroom.location")}</span>
              </div>
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-sm bg-white/10 border border-white/20 backdrop-blur-md">
                <Clock className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
                <span className="text-sm font-medium">{t("showroom.hours")}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={settings.contact.maps_share_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-accent text-white px-7 py-3.5 rounded-sm font-semibold text-sm tracking-wide hover:bg-accent/90 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
                data-testid="button-showroom-directions"
              >
                <span>{t("showroom.cta.directions")}</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
                  aria-hidden="true"
                />
              </a>
              <button
                type="button"
                onClick={() => setBookingOpen(true)}
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-7 py-3.5 rounded-sm font-semibold text-sm tracking-wide hover:bg-white hover:text-primary border border-white/30 backdrop-blur-sm transition-all"
                data-testid="button-showroom-contact"
              >
                {t("showroom.cta.contact")}
              </button>
            </div>
          </motion.div>

          {/* Right: Decorative card showing "live" badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-5 lg:flex justify-end hidden"
          >
            <div className="relative">
              {/* Glowing corner badge */}
              <div className="absolute -top-3 -right-3 w-20 h-20 rounded-full bg-accent/30 blur-2xl rtl:right-auto rtl:-left-3" />
              <div className="relative bg-white/[0.08] border border-white/20 backdrop-blur-md rounded-sm p-6 max-w-sm shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
                  </span>
                  <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-accent">
                    {t("showroom.live")}
                  </span>
                </div>
                <p className="font-serif text-2xl font-bold text-white leading-tight mb-3">
                  {t("showroom.card.title")}
                </p>
                <p className="text-sm text-primary-foreground/75 leading-relaxed mb-4">
                  {t("showroom.card.desc")}
                </p>
                <div className="pt-4 border-t border-white/15 grid grid-cols-2 gap-3 text-center">
                  <div>
                    <div className="font-serif text-2xl font-bold text-accent leading-none">
                      300<span className="text-base">㎡</span>
                    </div>
                    <div className="text-[10px] tracking-wider uppercase text-primary-foreground/60 mt-1">
                      {t("showroom.card.area")}
                    </div>
                  </div>
                  <div>
                    <div className="font-serif text-2xl font-bold text-accent leading-none">
                      18<span className="text-base">+</span>
                    </div>
                    <div className="text-[10px] tracking-wider uppercase text-primary-foreground/60 mt-1">
                      {t("showroom.card.brands")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-accent to-transparent z-10" />

      <BookingModal
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
        url={settings.contact.booking_url}
        title={t("showroom.cta.contact")}
      />
    </section>
  );
}

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Calculator, X, Plus } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const WHATSAPP_NUMBER = "963988820109"; // International format without +
const WHATSAPP_MESSAGE_EN = "Hello Santech, I'm interested in your professional kitchen equipment.";
const WHATSAPP_MESSAGE_AR = "مرحباً سانتك، أنا مهتم بمعدات المطابخ الاحترافية لديكم.";

export default function FloatingActions() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { t, lang, dir } = useI18n();

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setIsVisible(window.scrollY > 400);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    lang === "ar" ? WHATSAPP_MESSAGE_AR : WHATSAPP_MESSAGE_EN
  )}`;

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  // Animate from the side the FAB is anchored on (right in LTR, left in RTL)
  const slideX = dir === "rtl" ? -20 : 20;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className={`fixed bottom-6 z-40 flex flex-col items-end gap-3 ${
            dir === "rtl" ? "left-6" : "right-6"
          }`}
          data-testid="floating-actions"
        >
          {/* Expanded action buttons */}
          <AnimatePresence>
            {isOpen && (
              <>
                {/* Get a Quote button */}
                <motion.button
                  initial={{ opacity: 0, x: slideX, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: slideX, scale: 0.8 }}
                  transition={{ duration: 0.2, delay: 0.05 }}
                  onClick={scrollToContact}
                  className="flex items-center gap-3 bg-primary text-primary-foreground pe-5 ps-4 py-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all border border-primary/20"
                  data-testid="fab-quote"
                  aria-label={t("fab.quote")}
                >
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0">
                    <Calculator className="w-4 h-4 text-white" strokeWidth={2} />
                  </div>
                  <span className="text-sm font-semibold whitespace-nowrap">
                    {t("fab.quote")}
                  </span>
                </motion.button>

                {/* WhatsApp button */}
                <motion.a
                  initial={{ opacity: 0, x: slideX, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: slideX, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#25D366] text-white pe-5 ps-4 py-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                  data-testid="fab-whatsapp-expanded"
                  aria-label={t("fab.whatsapp")}
                >
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4 text-white fill-white" strokeWidth={2} />
                  </div>
                  <span className="text-sm font-semibold whitespace-nowrap">
                    {t("fab.whatsapp")}
                  </span>
                </motion.a>
              </>
            )}
          </AnimatePresence>

          {/* Toggle button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.92 }}
            className={`relative w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
              isOpen
                ? "bg-primary text-primary-foreground rotate-45"
                : "bg-[#25D366] text-white hover:scale-110"
            }`}
            data-testid="fab-toggle"
            aria-label={isOpen ? t("fab.close") : t("fab.open")}
            aria-expanded={isOpen}
          >
            {/* Pulsing ring when closed */}
            {!isOpen && (
              <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
            )}
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" strokeWidth={2.5} />
                </motion.div>
              ) : (
                <motion.div
                  key="whatsapp"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative"
                >
                  <MessageCircle className="w-7 h-7 fill-white" strokeWidth={1.5} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

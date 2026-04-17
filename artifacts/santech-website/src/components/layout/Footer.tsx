import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const { t } = useI18n();
  const navItems = [
    { key: "nav.home", href: "#hero" },
    { key: "nav.about", href: "#about" },
    { key: "nav.services", href: "#services" },
    { key: "nav.partners", href: "#partners" },
    { key: "nav.contact", href: "#contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t border-primary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src={`${import.meta.env.BASE_URL}brand/santech-logo.png`}
                alt="Santech Trading Co."
                className="h-14 w-14 rounded-sm object-cover ring-1 ring-white/20"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-serif font-bold text-base tracking-wider text-white">{t("brand.name")}</span>
                <span className="text-[10px] tracking-widest font-medium text-primary-foreground/60">{t("brand.tagline")}</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 max-w-xs text-sm leading-relaxed">
              {t("footer.tagline")}
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-serif font-semibold tracking-wide text-white">{t("footer.contact.title")}</h4>
            <div className="space-y-4 text-sm text-primary-foreground/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <p className="whitespace-pre-line">{t("contact.address")}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <div className="flex flex-col" dir="ltr">
                  <a href="tel:+963116644888" className="hover:text-white transition-colors">+963 11 6644 888</a>
                  <a href="tel:+963988820109" className="hover:text-white transition-colors">+963 9888 20109</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <div className="flex flex-col" dir="ltr">
                  <a href="mailto:info@santech-srl.com" className="hover:text-white transition-colors">info@santech-srl.com</a>
                  <a href="mailto:sales@santech-srl.com" className="hover:text-white transition-colors">sales@santech-srl.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-serif font-semibold tracking-wide text-white">{t("footer.links.title")}</h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-primary-foreground/80">
              {navItems.map((item) => (
                <a key={item.key} href={item.href} className="hover:text-accent transition-colors">{t(item.key)}</a>
              ))}
            </div>

            <div className="pt-4 border-t border-primary-foreground/10 mt-6">
              <p className="text-xs text-primary-foreground/60 mb-1">{t("footer.gm")}</p>
              <p className="text-sm">{t("contact.gm.name")}</p>
              <a href="mailto:dr.a.wasil@santech-srl.com" className="text-xs text-accent hover:text-white transition-colors" dir="ltr">dr.a.wasil@santech-srl.com</a>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
          <p>{t("footer.shg")}</p>
        </div>
      </div>
    </footer>
  );
}

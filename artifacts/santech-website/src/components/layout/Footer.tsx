import React from "react";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube, Music2, Twitter } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { settings } from "@/lib/settings";

export default function Footer() {
  const { t } = useI18n();
  const navItems = [
    { key: "nav.home", href: "#hero" },
    { key: "nav.about", href: "#about" },
    { key: "nav.services", href: "#services" },
    { key: "nav.partners", href: "#partners" },
    { key: "nav.contact", href: "#contact" },
  ];

  const socialLinks = [
    { url: settings.social?.facebook, Icon: Facebook, label: "Facebook — Santech" },
    { url: settings.social?.facebook_carpigiani, Icon: Facebook, label: "Facebook — Carpigiani Syria" },
    { url: settings.social?.instagram, Icon: Instagram, label: "Instagram" },
    { url: settings.social?.linkedin, Icon: Linkedin, label: "LinkedIn" },
    { url: settings.social?.youtube, Icon: Youtube, label: "YouTube" },
    { url: settings.social?.tiktok, Icon: Music2, label: "TikTok" },
    { url: settings.social?.x, Icon: Twitter, label: "X (Twitter)" },
  ].filter((s) => s.url && s.url.trim() !== "");

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t border-primary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src={settings.brand.logo}
                alt={settings.brand.logo_alt}
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
            {socialLinks.length > 0 && (
              <div className="flex items-center gap-3 pt-2">
                {socialLinks.map(({ url, Icon, label }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-accent hover:text-primary transition-all duration-300 text-primary-foreground/80 hover:scale-110"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            )}
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
                  {settings.contact.phones.map((phone, i) => (
                    <a key={i} href={`tel:${phone.link}`} className="hover:text-white transition-colors">{phone.display}</a>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <div className="flex flex-col" dir="ltr">
                  {settings.contact.emails.map((email, i) => (
                    <a key={i} href={`mailto:${email.address}`} className="hover:text-white transition-colors">{email.address}</a>
                  ))}
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
              <a href={`mailto:${settings.contact.gm_email}`} className="text-xs text-accent hover:text-white transition-colors" dir="ltr">{settings.contact.gm_email}</a>
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

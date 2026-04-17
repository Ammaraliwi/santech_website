import { Languages } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function LangToggle({ inverted = false, testId = "button-lang-toggle" }: { inverted?: boolean; testId?: string }) {
  const { lang, setLang } = useI18n();
  const next = lang === "en" ? "ar" : "en";
  const label = lang === "en" ? "العربية" : "EN";

  return (
    <button
      onClick={() => setLang(next)}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-sm transition-colors border ${
        inverted
          ? "border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
          : "border-border text-foreground hover:bg-accent/10 hover:border-accent"
      }`}
      data-testid={testId}
      aria-label="Toggle language"
    >
      <Languages className="w-3.5 h-3.5" />
      <span>{label}</span>
    </button>
  );
}

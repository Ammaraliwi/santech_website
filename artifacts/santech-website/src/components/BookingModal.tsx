import { useEffect } from "react";
import { X } from "lucide-react";

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
  url: string;
  title?: string;
}

export function BookingModal({ open, onClose, url, title = "Schedule a Visit" }: BookingModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-2 sm:p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="relative bg-white w-full max-w-4xl h-[90vh] sm:h-[85vh] rounded-lg overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-10 bg-white/95 hover:bg-white text-primary p-2 rounded-full shadow-lg transition-all hover:scale-105"
          aria-label="Close"
          data-testid="button-close-booking"
        >
          <X className="w-5 h-5" />
        </button>
        <iframe
          src={url}
          title={title}
          className="w-full h-full border-0"
          allow="payment"
        />
      </div>
    </div>
  );
}

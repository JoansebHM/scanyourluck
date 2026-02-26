import { QrCode } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <QrCode className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold text-foreground">
              ScanYourLuck
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contacto
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              WhatsApp
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">ScanYourLuck © 2026</p>
            <p className="text-xs text-muted-foreground mt-1">
              Hecho para negocios locales
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { QrCode, Cookie, Sparkles } from "lucide-react";

function WhatIs() {
  return (
    <section id="que-es" className="mt-16 py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <QrCode className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary">¿Qué es ScanYourLuck?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Una plataforma para conectar con tus <span className="text-primary">clientes</span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            ScanMe es una plataforma que permite a negocios locales agregar
            códigos QR personalizados a sus productos para mostrar mensajes
            creativos al ser escaneados.
          </p>

          <div className="flex items-center justify-center gap-3 pt-4">
            <Cookie className="h-6 w-6 text-primary" />
            <p className="text-muted-foreground">
              Funciona como una{" "}
              <span className="text-foreground font-medium">
                galleta de la fortuna digital
              </span>
              , pero integrada directamente en tu marca y tu empaque.
            </p>
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatIs;

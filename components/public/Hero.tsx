"use client";

import { Sparkles, ArrowRight, Smartphone } from "lucide-react";
import Image from "next/image";

function Hero() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm text-primary">Nuevo en tu negocio</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
          Escanea. Descubre. <span className="text-primary">Sonríe.</span>
        </h1>

        <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
          Convierte tus productos en una experiencia interactiva con códigos QR
          personalizados que revelan mensajes únicos, suertes o sorpresas para
          tus clientes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={scrollToBottom}
            className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 px-4 py-2 rounded-md inline-flex items-center"
          >
            Quiero probar ScanMe
            <ArrowRight className="h-4 w-4" />
          </button>
          <button className="border border-border text-foreground hover:bg-muted bg-transparent px-4 py-2 rounded-md inline-flex items-center">
            Ver cómo funciona
          </button>
        </div>
      </div>

      {/* Hero Visual */}
      <div className="relative">
        <div className="relative bg-card rounded-3xl p-8 border border-border">
          {/* Product mockup */}
          <div className="relative">
            <Image
              src="/hero/example_picture.png"
              alt="Producto con código QR"
              className="w-full max-w-sm mx-auto rounded-2xl"
              width={500}
              height={500}
            />

            {/* Phone mockup */}
            <div className="absolute -bottom-4 -right-4 sm:bottom-4 sm:right-0 bg-secondary rounded-2xl p-4 shadow-xl border border-border max-w-xs">
              <div className="flex items-center gap-3">
                <Smartphone className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">
                    Tu suerte de hoy:
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    &ldquo;Si las cosas no pasaron como esperabas, van a pasar
                    como las necesitas.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-secondary/30 rounded-full blur-3xl" />
      </div>
    </div>
  );
}

export default Hero;

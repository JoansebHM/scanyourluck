"use client";

import { useState, useRef } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Download, RefreshCw, QrCode } from "lucide-react";
import { downloadQR } from "@/lib/utils/downloadQR";
import Link from "next/link";
import { randomPhrases } from "@/lib/constants/randomPhrases";
import { showToast } from "nextjs-toast-notify";
import { toastConfig } from "@/config/toast";

export function QrTestingSection() {
  const [message, setMessage] = useState("");
  const [generatedMessage, setGeneratedMessage] = useState("");
  const [name, setName] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const qrRef = useRef<HTMLDivElement | null>(null);

  const handleGenerate = () => {
    if (!message.trim()) {
      showToast.info(
        "Por favor, ingresa un mensaje para generar el código QR.",
        toastConfig,
      );
      return;
    }
    if (!name.trim()) {
      showToast.info(
        "Por favor, ingresa un nombre o empresa para personalizar el mensaje.",
        toastConfig,
      );
      return;
    }
    setIsGenerating(true);
    setTimeout(() => {
      setGeneratedMessage(
        "http://localhost:3000/scan/" +
          encodeURIComponent(message.trim()) +
          (name.trim() ? "?sender=" + encodeURIComponent(name.trim()) : ""),
      );
      showToast.success("¡Código QR generado exitosamente!", toastConfig);
      setIsGenerating(false);
    }, 500);
  };

  const handleReset = () => {
    setMessage("");
    setGeneratedMessage("");
    setName("");
  };

  const generateRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * randomPhrases.length);
    setMessage(randomPhrases[randomIndex]);
  };

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4">
            Zona de Pruebas
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Prueba tu código QR
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Escribe un mensaje personalizado y genera tu código QR al instante.
            Descárgalo en el formato que prefieras.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left side - Instructions and input */}
          <div className="bg-card rounded-2xl p-6 md:p-8 border border-border h-full">
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">
                    Escribe tu mensaje
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Ingresa el texto que aparecerá cuando escaneen el código QR.
                  </p>
                  <div className="space-y-2">
                    <label htmlFor="qr-message" className="sr-only">
                      Mensaje del QR
                    </label>
                    <textarea
                      id="qr-message"
                      placeholder="Ej: ¡Hoy será un gran día! Los pequeños momentos hacen grandes recuerdos."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="min-h-30 bg-background border p-2 rounded-md border-border resize-none w-full"
                      maxLength={500}
                    />
                    <div className="flex justify-between items-center">
                      <button
                        onClick={generateRandomMessage}
                        className="bg-primary/40 hover:bg-primary/20 text-primary-foreground flex items-center justify-center gap-2 px-4 py-2 rounded-md"
                      >
                        Generar frase aleatoria
                        <RefreshCw className="w-4 h-4" />
                      </button>
                      <p className="text-xs text-muted-foreground text-right">
                        {message.length}/500 caracteres
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">
                    ¿De parte de quién es el mensaje?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Ingresa tu nombre o el de tu empresa para personalizar el
                    mensaje.
                  </p>
                  <div className="space-y-2">
                    <label htmlFor="qr-sender" className="sr-only">
                      Nombre o empresa
                    </label>
                    <input
                      id="qr-sender"
                      placeholder="Ej: John Doe o Empresa XYZ"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-background border p-2 rounded-md border-border w-full"
                      maxLength={500}
                    />
                    <div className="flex justify-between items-center">
                      <p className="text-xs text-muted-foreground text-right">
                        {name.length}/500 caracteres
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">
                    Genera tu código QR
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Haz clic en el botón para crear tu código QR personalizado.
                  </p>
                  <div className="flex gap-3">
                    <button
                      onClick={handleGenerate}
                      disabled={isGenerating}
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center gap-2 px-4 py-2 rounded-md"
                    >
                      {isGenerating ? (
                        <>
                          <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                          Generando...
                        </>
                      ) : (
                        <>
                          <QrCode className="w-4 h-4 mr-2" />
                          Generar QR
                        </>
                      )}
                    </button>
                    <button
                      onClick={handleReset}
                      className="border border-border hover:bg-muted bg-transparent flex items-center justify-center gap-2 px-4 py-2 rounded-md"
                    >
                      <RefreshCw className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - QR Code display */}
          <div className="bg-card rounded-2xl p-6 md:p-8 border border-border h-full">
            <div className="text-center">
              <h3 className="font-semibold text-foreground mb-6">
                Tu código QR
              </h3>

              <div
                ref={qrRef}
                className="bg-foreground rounded-xl p-6 inline-block mb-6"
              >
                {generatedMessage ? (
                  <QRCodeSVG
                    value={generatedMessage}
                    size={200}
                    level="H"
                    bgColor="#ffffff"
                    fgColor="#061e29"
                  />
                ) : (
                  <div className="w-70 h-70 flex items-center justify-center">
                    <div className="text-center text-muted">
                      <QrCode className="w-16 h-16 mx-auto mb-3 opacity-30" />
                      <p className="text-lg">
                        Tu código QR <br /> aparecerá aquí
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {generatedMessage && (
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Escanea el código para ver tu nombre o empresa <br /> o
                    ingresa al siguiente{" "}
                    <Link
                      href={generatedMessage}
                      className="underline hover:text-primary"
                    >
                      enlace
                    </Link>
                  </p>
                  <div className="flex gap-3 justify-center">
                    <button
                      onClick={() => downloadQR("png", qrRef)}
                      className="bg-secondary hover:bg-secondary/90 text-secondary-foreground flex items-center justify-center gap-2 px-4 py-2 rounded-md"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Descargar PNG
                    </button>
                    <button
                      onClick={() => downloadQR("svg", qrRef)}
                      className="border border-border hover:bg-muted bg-transparent flex items-center justify-center gap-2 px-4 py-2 rounded-md"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Descargar SVG
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

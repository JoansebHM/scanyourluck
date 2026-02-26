import { MessageSquarePlus, QrCode, PartyPopper } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquarePlus,
    title: "Crea tus mensajes",
    description:
      "Define frases, suertes, promociones o mensajes especiales para tus clientes.",
  },
  {
    number: "02",
    icon: QrCode,
    title: "Genera tu QR",
    description:
      "Obtén un código QR personalizado para imprimir en tus empaques o etiquetas.",
  },
  {
    number: "03",
    icon: PartyPopper,
    title: "Sorprende a tus clientes",
    description:
      "Al escanear, el cliente descubre un mensaje único que genera emoción y recordación.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            ¿Cómo funciona?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Solo 3 pasos simples para transformar tus productos en una experiencia interactiva.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 h-full">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-5xl font-bold text-primary/20">
                      {step.number}
                    </span>
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <step.icon className="h-7 w-7 text-primary" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-8 w-8 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

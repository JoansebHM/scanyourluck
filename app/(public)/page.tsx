import Hero from "@/components/public/Hero";
import { HowItWorks } from "@/components/public/HowItWorks";
import { QrTestingSection } from "@/components/public/QrTesting";
import WhatIs from "@/components/public/WhatIs";

export default function Page() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Hero />
      <WhatIs />
      <HowItWorks />
      <QrTestingSection />
    </section>
  );
}

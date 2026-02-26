import { Metadata } from "next";
import "../../globals.css";
import { Poppins } from "next/font/google";

const metadata: Metadata = {
  title: "Escaneo de Código - ScanYourLuck",
  description:
    "Escanea códigos QR personalizados para descubrir mensajes únicos, suertes o sorpresas con ScanYourLuck.",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function CodeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={`text-foreground ${poppins.className}`}>
      <main className="flex-1">{children}</main>
    </main>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ScanYourLuck",
  description: "Genera códigos QR únicos y rastrea su uso",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <main className="bg-background text-foreground">{children}</main>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import { NavBar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "ScanYourLuck",
    template: "%s | ScanYourLuck",
  },
  description: "Convierte tus productos en experiencias con QR",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}

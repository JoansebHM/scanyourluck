import { Poppins } from "next/font/google";
import "../globals.css";

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
    // <html lang="en">
    //   <body className={`${poppins.className} bg-background text-foreground`}>
    //     <main className="flex-1">{children}</main>
    //   </body>
    // </html>
    <>
      <main className="flex-1">{children}</main>
    </>
  );
}

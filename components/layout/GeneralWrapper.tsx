import { QrCode } from "lucide-react";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
}

function GeneralWrapper({ children }: Props) {
  return (
    <section className="h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {children}
      <Link
        href="/"
        className="absolute top-6 left-6 flex items-center gap-2"
      >
        <QrCode className="h-8 w-8 text-primary" />
        <span className="text-xl font-semibold text-foreground">
          ScanYourLuck
        </span>
      </Link>
    </section>
  );
}

export default GeneralWrapper;

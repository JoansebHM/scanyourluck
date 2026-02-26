"use client";

import Link from "next/link";
import { MessageCircleIcon, QrCode, User } from "lucide-react";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/config/routes";

export default function UserNav() {
  const pathName = usePathname();

  return (
    <section className="flex flex-col gap-4 mt-5 px-6">
      <span className="font-semibold text-primary text-xs">MENÚ PRINCIPAL</span>
      <Link
        href={ROUTES.dashboard.messages}
        className={`p-2 flex items-center gap-2 hover:scale-101 transition-transform ${pathName === ROUTES.dashboard.messages ? "text-white bg-secondary-foreground/10 border-l-4 border-primary rounded-l-0 rounded-r-lg" : "text-secondary hover:text-primary hover:bg-secondary-foreground/1"}`}
      >
        <MessageCircleIcon size={18} />
        Mis mensajes
      </Link>
      <Link
        href={ROUTES.dashboard.root}
        className={`p-2 flex items-center gap-2 hover:scale-101 transition-transform ${pathName === ROUTES.dashboard.root ? "text-white bg-secondary-foreground/10 border-l-4 border-primary rounded-l-0 rounded-r-lg" : "text-secondary hover:text-primary hover:bg-secondary-foreground/1"}`}
      >
        <QrCode size={18} />
        Mis QR
      </Link>

      <Link
        href={ROUTES.dashboard.profile}
        className={`p-2 flex items-center gap-2 hover:scale-101 transition-transform ${pathName === ROUTES.dashboard.profile ? "text-white bg-secondary-foreground/10 border-l-4 border-primary rounded-l-0 rounded-r-lg" : "text-secondary hover:text-primary hover:bg-secondary-foreground/1"}`}
      >
        <User size={18} />
        Información personal
      </Link>
    </section>
  );
}

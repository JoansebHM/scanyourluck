"use client";

import { useEffect, useState } from "react";
import { Menu, X, QrCode } from "lucide-react";
import Link from "next/link";
import { client } from "@/lib/supabase/client";
import { ROUTES } from "@/config/routes";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    client.auth.getUser().then(({ data }) => {
      setIsAuth(!!data.user);
    });

    const {
      data: { subscription },
    } = client.auth.onAuthStateChange((_event, session) => {
      setIsAuth(!!session?.user);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Link href={ROUTES.public.home} className="flex items-center gap-2">
              <QrCode className="h-8 w-8 text-primary" />
              <span className="text-xl font-semibold text-foreground">
                ScanYourLuck
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#que-es"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              ¿Qué es?
            </a>
            <a
              href="#como-funciona"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Cómo funciona
            </a>
            <a
              href="#beneficios"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Beneficios
            </a>
            <a
              href="#ideal-para"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Ideal para
            </a>
          </nav>

          <div className="hidden md:block">
            <Link
              href={isAuth ? ROUTES.dashboard.root : ROUTES.auth.login}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-1 rounded-md"
            >
              {isAuth ? "Ir al Panel" : "Empezar ahora"}
            </Link>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col gap-4">
              <a
                href="#que-es"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                ¿Qué es?
              </a>
              <a
                href="#como-funciona"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Cómo funciona
              </a>
              <a
                href="#beneficios"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Beneficios
              </a>
              <a
                href="#ideal-para"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Ideal para
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

import { QrCode } from "lucide-react";
import { RegisterForm } from "./RegisterForm";
import Link from "next/link";
import { ROUTES } from "@/config/routes";

function Page() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link
          href={ROUTES.public.home}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <QrCode className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-2xl font-bold text-foreground">
            ScanYourLuck
          </span>
        </Link>

        {/* Login Card */}
        <div className="bg-card border border-border rounded-xl p-8">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Bienvenido
            </h1>
            <p className="text-muted-foreground">
              Crea tu cuenta para acceder al panel de administración
            </p>
          </div>

          <RegisterForm />

          <div className="mt-6 text-center">
            <p className="text-muted-foreground text-sm">
              ¿Ya tienes una cuenta?{" "}
              <Link
                href={ROUTES.auth.login}
                className="text-primary hover:underline font-medium"
              >
                Inicia sesión
              </Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-muted-foreground text-sm mt-6">
          <Link
            href={ROUTES.public.home}
            className="hover:text-foreground transition-colors"
          >
            Volver al inicio
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Page;

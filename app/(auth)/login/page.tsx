import { QrCode } from "lucide-react";
import { LoginForm } from "./LoginForm";
import Link from "next/link";

function Page() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2 mb-8">
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
              Ingresa a tu panel de administración
            </p>
          </div>

          <LoginForm />

          <div className="mt-6 text-center">
            <p className="text-muted-foreground text-sm">
              ¿No tienes una cuenta?{" "}
              <Link
                href="/register"
                className="text-primary hover:underline font-medium"
              >
                Regístrate
              </Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-muted-foreground text-sm mt-6">
          <Link href="/" className="hover:text-foreground transition-colors">
            Volver al inicio
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Page;

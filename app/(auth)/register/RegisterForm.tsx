"use client";

import { FormEvent, useState } from "react";

import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { ROUTES } from "@/config/routes";

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const router = useRouter();
  const client = createClient();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const { error } = await client.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
      },
    });

    setIsLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    router.refresh();
    router.push(ROUTES.dashboard.root);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-foreground">
          Correo electrónico
        </label>
        <input
          id="email"
          type="email"
          placeholder="tu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-muted border p-2 w-full rounded-md border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-foreground">
          Nombre
        </label>
        <input
          id="name"
          type="text"
          placeholder="Tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="bg-muted border p-2 w-full rounded-md border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="text-foreground">
            Contraseña
          </label>
        </div>
        <div className="relative">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="bg-muted border p-2 w-full rounded-md border-border text-foreground placeholder:text-muted-foreground focus:border-primary pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label={
              showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
            }
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2 rounded-md flex items-center justify-center transition-colors disabled:opacity-50"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Ingresando...
          </>
        ) : (
          "Registrarse"
        )}
      </button>
    </form>
  );
}

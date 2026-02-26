"use client";

import { FormEvent, useState } from "react";

import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // this function should add two numbers
  const add = (a: number, b: number) => {
    return a + b;
  }

  // add a test for the add function
  const testAdd = () => {
    console.assert(add(2, 3) === 5, "Test failed: add(2, 3) should be 5");
    console.assert(add(-1, 1) === 0, "Test failed: add(-1, 1) should be 0");
    console.assert(add(0, 0) === 0, "Test failed: add(0, 0) should be 0");
  };

  testAdd();

  const router = useRouter();
  const client = createClient();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const { error } = await client.auth.signInWithPassword({
      email,
      password,
    });

    setIsLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    router.refresh();
    router.push("/dashboard/qr");
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

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="text-foreground">
            Contraseña
          </label>
          <button
            type="button"
            className="text-sm text-primary hover:underline"
          >
            ¿Olvidaste tu contraseña?
          </button>
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
          "Iniciar sesión"
        )}
      </button>
    </form>
  );
}

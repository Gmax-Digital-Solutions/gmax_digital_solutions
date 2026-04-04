"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, loginSchema } from "@/lib/validations/login-schema";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginSchema) => {
    await signIn("credentials", {
      email: data.email,
      password: data.password,
      callbackUrl: "/admin",
    });
  };

  const isSubmitting = false; // You can manage this state as needed
  return (
    <div className="bg-surface text-on-surface min-h-screen flex items-center justify-center p-6">
      <main className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-12 overflow-hidden bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10">
        {/* Branding */}
        <section className="lg:col-span-5 bg-on-background p-12 lg:p-20 flex flex-col justify-between relative overflow-hidden min-h-[400px] lg:min-h-[700px]">
          <div className="z-10">
            <div className="flex items-center gap-2 mb-12">
              <div className="w-10 h-10 bg-primary-container rounded flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary">
                  shield_person
                </span>
              </div>

              <span className="text-xl font-bold tracking-tighter text-white">
                Gmax Digital
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
              Small Businesses.
              <br />
              <span className="text-primary-container">Big Solutions.</span>
            </h1>

            <p className="text-on-surface-variant text-lg leading-relaxed max-w-sm opacity-80">
              Strategic authority and editorial precision for the modern digital
              marketplace.
            </p>
          </div>
        </section>

        {/* Form */}
        <section className="lg:col-span-7 bg-white p-8 lg:p-24 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            <header className="mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-on-surface mb-2">
                Welcome Back
              </h2>

              <p className="text-on-surface-variant font-medium">
                Enter your credentials to manage Gmax Digital.
              </p>
            </header>

            <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="block text-xs font-bold uppercase mb-2">
                  Corporate Email
                </label>

                <input
                  {...register("email")}
                  type="email"
                  placeholder="name@gmaxdigital.com"
                  className="w-full border-b-2 border-surface-container pb-3 bg-transparent focus:outline-none focus:border-primary"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <p className="text-secondary text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase mb-2">
                  Access Key
                </label>

                <input
                  {...register("password")}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="••••••••"
                  className="w-full border-b-2 border-surface-container pb-3 bg-transparent focus:outline-none focus:border-primary"
                />
                {errors.password && (
                  <p className="text-secondary text-xs mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-primary-container text-on-primary font-bold rounded"
              >
                {isSubmitting ? "Signing In..." : "Sign In"}
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

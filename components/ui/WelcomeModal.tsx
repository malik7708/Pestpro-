"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { ArrowRight, UserPlus, LogIn } from "lucide-react";

const STORAGE_KEY = "pestpro-welcome-seen";

export function WelcomeModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
    if (!stored) {
      setOpen(true);
    }
  }, []);

  const closeModal = (persist = true) => {
    if (persist) {
      localStorage.setItem(STORAGE_KEY, "true");
    }
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl">
      <div className="absolute inset-0 bg-black/60" onClick={() => closeModal(true)} />
      <div className="relative z-10 w-full max-w-3xl rounded-[2rem] border border-white/10 bg-slate-900/95 p-8 shadow-2xl shadow-black/40 backdrop-blur-xl">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.36em] text-emerald-300">Welcome to PestPro</p>
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Protect Your Home Today
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Secure pest protection with fast booking, smart support, and modern protection tailored for your family.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              <Link href="/auth/login" onClick={() => closeModal(true)} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
                <LogIn className="h-4 w-4" /> Login
              </Link>
              <Link href="/auth/signup" onClick={() => closeModal(true)} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-600 bg-transparent px-4 py-3 text-sm font-semibold text-white transition hover:border-emerald-400 hover:text-emerald-200">
                <UserPlus className="h-4 w-4" /> Sign Up
              </Link>
              <button
                type="button"
                onClick={() => closeModal(true)}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
              >
                Continue as Guest
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-slate-800 bg-slate-950/95 p-6 shadow-xl shadow-black/20">
            <div className="mb-6 text-sm uppercase tracking-[0.32em] text-slate-400">Quick access</div>
            <button
              type="button"
              onClick={() => signIn("google", { callbackUrl: "/user/dashboard" })}
              className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-700 bg-slate-900 px-4 py-4 text-sm font-semibold text-white transition hover:border-emerald-400 hover:bg-slate-800"
            >
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-300 text-slate-950 text-[0.65rem] font-semibold">G</span> Continue with Google
            </button>
            <div className="mt-6 rounded-3xl bg-slate-800/80 p-5">
              <p className="text-sm font-medium text-slate-100">Secure customer accounts</p>
              <p className="mt-2 text-sm text-slate-400">Create a profile, save contact details, and manage service requests from your dashboard.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

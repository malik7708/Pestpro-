"use client";

import { X } from "lucide-react";

interface ToastProps {
  message: string;
  type?: "success" | "error";
  onClose?: () => void;
}

export function Toast({ message, type = "success", onClose }: ToastProps) {
  return (
    <div className="fixed left-1/2 top-6 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-3xl border px-5 py-4 shadow-2xl shadow-black/20 backdrop-blur-xl transition-all duration-300 bg-slate-950/95 border-slate-700 text-white">
      <div className="flex items-start gap-3">
        <div className={`mt-0.5 h-3.5 w-3.5 rounded-full ${type === "success" ? "bg-emerald-400" : "bg-rose-400"}`} />
        <div className="flex-1 text-sm leading-6">{message}</div>
        <button onClick={onClose} className="text-slate-400 hover:text-white transition">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

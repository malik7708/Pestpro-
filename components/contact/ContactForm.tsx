"use client";
import { useState } from "react";
import { CheckCircle, AlertCircle, Loader2, Send } from "lucide-react";

const services = [
  "Termite Control", "Rodent Control", "Cockroach Treatment",
  "Bed Bug Removal", "General Pest Control", "Mosquito Control",
  "Emergency Service", "Other",
];

interface FormData {
  name: string; phone: string; email: string;
  address: string; service: string; message: string;
}
interface FormErrors {
  name?: string; phone?: string; email?: string;
  address?: string; service?: string; message?: string;
}

export function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "", phone: "", email: "", address: "", service: "", message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  const update = (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrors({});
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setServerMessage(data.message);
        setForm({ name: "", phone: "", email: "", address: "", service: "", message: "" });
      } else if (data.errors) {
        setErrors(data.errors);
        setStatus("idle");
      } else {
        setStatus("error");
        setServerMessage(data.message || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setServerMessage("Network error. Please try again or call us directly.");
    }
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border-[1.5px] text-xs sm:text-sm text-[#1e3328] placeholder:text-[#99bba8] bg-[#f7fbf8] outline-none transition-all duration-200 focus:bg-white focus:ring-[3px] focus:ring-[#2f6b4f]/10 ${
      errors[field]
        ? "border-red-400 bg-red-50 focus:border-red-400"
        : "border-[#ddeae3] focus:border-[#2f6b4f]"
    }`;

  if (status === "success") {
    return (
      <div className="overflow-hidden rounded-lg sm:rounded-2xl border border-[#e2ebe5] bg-white">
        <div className="bg-[#2f6b4f] px-4 sm:px-6 py-6 sm:py-8 text-center">
          <div className="mx-auto mb-3 sm:mb-4 flex h-12 sm:h-16 w-12 sm:w-16 items-center justify-center rounded-full bg-white/20">
            <CheckCircle size={24} className="text-white" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">Request received!</h3>
          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-white/75">{serverMessage || "We'll be in touch shortly."}</p>
        </div>
        <div className="p-4 sm:p-6">
          <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
            {["Our team reviews your request", "A specialist calls within 24 hours", "We schedule your FREE inspection"].map((step, i) => (
              <div key={i} className="flex items-center gap-2 sm:gap-3">
                <div className="flex h-4 sm:h-5 w-4 sm:w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#2f6b4f]">
                  <CheckCircle size={10} className="text-white" />
                </div>
                <span className="text-xs sm:text-sm text-[#3d5a4a]">{step}</span>
              </div>
            ))}
          </div>
          <button
            onClick={() => setStatus("idle")}
            className="w-full rounded-xl border-[1.5px] border-[#2f6b4f] py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-[#2f6b4f] transition-all hover:bg-[#2f6b4f] hover:text-white"
          >
            Submit another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg sm:rounded-2xl border border-[#e2ebe5] bg-white">

      {/* Green Header */}
      <div className="bg-[#2f6b4f] px-4 sm:px-6 py-5 sm:py-6">
        
        <h2 className="text-xl sm:text-2xl font-bold leading-snug text-white">
          Request free<br />inspection
        </h2>
        <p className="mt-1 sm:mt-1.5 text-[11px] sm:text-xs text-white/70 leading-relaxed">
          Fill in below — we call back within 24 hours.
        </p>
        
      </div>

      {/* Form Body */}
      <div className="p-4 sm:p-6">
        {status === "error" && (
          <div className="mb-4 sm:mb-5 flex items-start gap-2 sm:gap-3 rounded-lg sm:rounded-xl border border-red-200 bg-red-50 p-3 sm:p-4">
            <AlertCircle size={14} className="mt-0.5 flex-shrink-0 text-red-500" />
            <div>
              <p className="text-xs sm:text-sm font-bold text-red-700">Submission failed</p>
              <p className="text-[11px] sm:text-xs text-red-600">{serverMessage}</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4" noValidate>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            <div>
              <label className="mb-1 sm:mb-1.5 block text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.1em] text-[#3d5a4a]">
                Full name <span className="text-[#2f6b4f]">*</span>
              </label>
              <input
                type="text" value={form.name} onChange={update("name")}
                placeholder="Your name" className={inputClass("name")}
                disabled={status === "loading"} autoComplete="name"
              />
              {errors.name && <p className="mt-0.5 sm:mt-1 flex items-center gap-1 text-[10px] sm:text-[11px] text-red-500"><AlertCircle size={10} />{errors.name}</p>}
            </div>
            <div>
              <label className="mb-1 sm:mb-1.5 block text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.1em] text-[#3d5a4a]">
                Phone <span className="text-[#2f6b4f]">*</span>
              </label>
              <input
                type="tel" value={form.phone} onChange={update("phone")}
                placeholder="+92 300 0000000" className={inputClass("phone")}
                disabled={status === "loading"} autoComplete="tel"
              />
              {errors.phone && <p className="mt-0.5 sm:mt-1 flex items-center gap-1 text-[10px] sm:text-[11px] text-red-500"><AlertCircle size={10} />{errors.phone}</p>}
            </div>
          </div>

          <div>
            <label className="mb-1 sm:mb-1.5 block text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.1em] text-[#3d5a4a]">
              Email address <span className="text-[#2f6b4f]">*</span>
            </label>
            <input
              type="email" value={form.email} onChange={update("email")}
              placeholder="you@email.com" className={inputClass("email")}
              disabled={status === "loading"} autoComplete="email"
            />
            {errors.email && <p className="mt-0.5 sm:mt-1 flex items-center gap-1 text-[10px] sm:text-[11px] text-red-500"><AlertCircle size={10} />{errors.email}</p>}
          </div>

          <div>
            <label className="mb-1 sm:mb-1.5 block text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.1em] text-[#3d5a4a]">
              Property address <span className="text-[#2f6b4f]">*</span>
            </label>
            <input
              type="text" value={form.address} onChange={update("address")}
              placeholder="Street, area, city" className={inputClass("address")}
              disabled={status === "loading"} autoComplete="street-address"
            />
            {errors.address && <p className="mt-0.5 sm:mt-1 flex items-center gap-1 text-[10px] sm:text-[11px] text-red-500"><AlertCircle size={10} />{errors.address}</p>}
          </div>

          <div>
            <label className="mb-1 sm:mb-1.5 block text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.1em] text-[#3d5a4a]">
              Service needed <span className="text-[#2f6b4f]">*</span>
            </label>
            <select
              value={form.service} onChange={update("service")}
              className={inputClass("service")} disabled={status === "loading"}
            >
              <option value="">Select a service...</option>
              {services.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            {errors.service && <p className="mt-0.5 sm:mt-1 flex items-center gap-1 text-[10px] sm:text-[11px] text-red-500"><AlertCircle size={10} />{errors.service}</p>}
          </div>

          <div>
            <label className="mb-1 sm:mb-1.5 block text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.1em] text-[#3d5a4a]">
              Tell us more <span className="text-[#2f6b4f]">*</span>
            </label>
            <textarea
              value={form.message} onChange={update("message")} rows={3}
              placeholder="Describe your pest problem, property type, or any specific concerns…"
              className={`${inputClass("message")} resize-none`}
              disabled={status === "loading"}
            />
            {errors.message && <p className="mt-0.5 sm:mt-1 flex items-center gap-1 text-[10px] sm:text-[11px] text-red-500"><AlertCircle size={10} />{errors.message}</p>}
          </div>

          <button
            type="submit" disabled={status === "loading"}
            className="flex w-full items-center justify-between rounded-[13px] bg-[#2f6b4f] px-4 sm:px-5 py-3 sm:py-3.5 transition-all hover:bg-[#235440] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span className="text-xs sm:text-sm font-bold text-white">
              {status === "loading" ? "Submitting..." : "Send my request"}
            </span>
            <span className="flex h-7 sm:h-8 w-7 sm:w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/20">
              {status === "loading"
                ? <Loader2 size={12} className="animate-spin text-white" />
                : <Send size={12} className="text-white" />
              }
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
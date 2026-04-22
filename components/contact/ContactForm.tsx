"use client";
import { useState } from "react";
import { CheckCircle, AlertCircle, Loader2, Send } from "lucide-react";

const services = [
  "Termite Control",
  "Rodent Control",
  "Cockroach Treatment",
  "Bed Bug Removal",
  "General Pest Control",
  "Mosquito Control",
  "Emergency Service",
  "Other",
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  address?: string;
  service?: string;
  message?: string;
}

export function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "", phone: "", email: "", address: "", service: "", message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  const update = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
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
    `w-full px-4 py-3 rounded-xl border-2 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:bg-white dark:focus:bg-gray-700 transition-all duration-200 ${
      errors[field]
        ? "border-red-400 focus:border-red-500"
        : "border-gray-200 dark:border-gray-700 focus:border-brand-green"
    }`;

  if (status === "success") {
    return (
      <div className="card-base p-12 text-center">
        <div className="w-20 h-20 gradient-green rounded-full flex items-center justify-center mx-auto mb-6 shadow-brand-lg">
          <CheckCircle size={40} className="text-white" />
        </div>
        <h3 className="font-display text-3xl font-bold text-brand-navy dark:text-white mb-4">
          Request Received! 
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">{serverMessage}</p>
        <div className="bg-brand-green-50 dark:bg-brand-green/10 rounded-2xl p-6 mb-8 border border-brand-green/20">
          <p className="text-brand-green font-semibold">What happens next?</p>
          <div className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-400 text-left">
            <div className="flex items-center gap-2"><CheckCircle size={14} className="text-brand-green" /> Our team reviews your request</div>
            <div className="flex items-center gap-2"><CheckCircle size={14} className="text-brand-green" /> A specialist calls you within 24 hours</div>
            <div className="flex items-center gap-2"><CheckCircle size={14} className="text-brand-green" /> We schedule your FREE inspection</div>
          </div>
        </div>
        <button
          onClick={() => setStatus("idle")}
          className="btn-outline"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="card-base p-6 sm:p-8 lg:p-10">
      <h2 className="font-display text-xl sm:text-2xl font-bold text-brand-navy dark:text-white mb-2">
        Request Free Inspection
      </h2>
      <p className="text-gray-500 mb-6 sm:mb-8 text-xs sm:text-sm">Fill out the form below. We respond within 24 hours!</p>

      {status === "error" && (
        <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-start gap-3">
          <AlertCircle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-red-700 dark:text-red-400 font-semibold text-sm">Submission failed</p>
            <p className="text-red-600 dark:text-red-400 text-sm">{serverMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              value={form.name}
              onChange={update("name")}
              placeholder=""
              className={inputClass("name")}
              disabled={status === "loading"}
              autoComplete="name"
            />
            {errors.name && <p className="mt-1 text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12} />{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              value={form.phone}
              onChange={update("phone")}
              placeholder=""
              className={inputClass("phone")}
              disabled={status === "loading"}
              autoComplete="tel"
            />
            {errors.phone && <p className="mt-1 text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12} />{errors.phone}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            value={form.email}
            onChange={update("email")}
            placeholder=""
            className={inputClass("email")}
            disabled={status === "loading"}
            autoComplete="email"
          />
          {errors.email && <p className="mt-1 text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12} />{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Property Address *
          </label>
          <input
            type="text"
            value={form.address}
            onChange={update("address")}
            placeholder=""
            className={inputClass("address")}
            disabled={status === "loading"}
            autoComplete="street-address"
          />
          {errors.address && <p className="mt-1 text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12} />{errors.address}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Service Needed *
          </label>
          <select
            value={form.service}
            onChange={update("service")}
            className={inputClass("service")}
            disabled={status === "loading"}
          >
            <option value="">Select a service...</option>
            {services.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          {errors.service && <p className="mt-1 text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12} />{errors.service}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Tell Us More *
          </label>
          <textarea
            value={form.message}
            onChange={update("message")}
            rows={4}
            placeholder="How can we assist you?"
            className={inputClass("message")}
            disabled={status === "loading"}
          />
          {errors.message && <p className="mt-1 text-red-500 text-xs flex items-center gap-1"><AlertCircle size={12} />{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary w-full justify-center py-3 sm:py-4 text-sm sm:text-base disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <><Loader2 size={18} className="animate-spin" /> Submitting...</>
          ) : (
            <><Send size={18} /> Send Request</>
          )}
        </button>
      </form>
    </div>
  );
}

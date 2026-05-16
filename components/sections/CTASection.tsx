"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Phone, ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { FadeIn, StaggerGroup, StaggerItem } from "@/components/ui/motion";

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export function CTASection() {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  useEffect(() => {
    if (status !== "success") return;
    const timer = window.setTimeout(() => {
      setStatus("idle");
      setServerMessage("");
    }, 3000);
    return () => window.clearTimeout(timer);
  }, [status]);

  const update = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrors({});

    // Validation
    const validationErrors: FormErrors = {};
    if (!form.name || form.name.trim().length < 2) {
      validationErrors.name = "Name must be at least 2 characters";
    }
    if (!form.phone || !/^[\d\s\+\-\(\)]{7,15}$/.test(form.phone)) {
      validationErrors.phone = "Please enter a valid phone number";
    }
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      validationErrors.email = "Please enter a valid email address";
    }
    if (!form.message || form.message.trim().length < 10) {
      validationErrors.message = "Message must be at least 10 characters";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus("idle");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          address: "Not provided", // Default for CTA form
          service: "General Inquiry", // Default for CTA form
        }),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setServerMessage(data.message);
        setForm({ name: "", phone: "", email: "", message: "" });
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
    `mt-2 h-12 w-full rounded-none border px-4 text-white outline-none transition focus:border-brand-green-100 focus:ring-2 focus:ring-brand-green-100/20 ${
      errors[field]
        ? "border-red-400 bg-red-950/30"
        : "border-emerald-300/20 bg-emerald-950/50"
    }`;

  return (
    <section  className="pt-20 pb-8 lg:pt-32 lg:pb-16 relative overflow-hidden"
        style={{
          backgroundImage: "url('/cta.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "rgba(10, 41, 28, 0.8)",
        }}
      >
      <div/>
      <div
        className="absolute inset-0 opacity-80"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundColor: "rgba(5, 90, 60, 0.45)",
          backgroundImage: `radial-gradient(circle at 10% 10%, rgba(167, 243, 208, 0.18) 1px, transparent 0)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-max relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr] items-center">
          <StaggerGroup className="text-center lg:text-left">
            <StaggerItem>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                <span className="text-sm font-semibold text-brand-green-100">Free inspection</span>
                <span className="text-sm text-white/80">for homes and businesses</span>
              </div>
            </StaggerItem>

            <StaggerItem>
              <h2 className="mb-6 font-display text-4xl font-semibold tracking-tight text-white lg:text-5xl">
                Worried about termites
                <br />
                <span className="text-brand-green-100">or pest infestation?</span>
              </h2>
            </StaggerItem>

            <StaggerItem>
              <p className="mb-8 max-w-2xl text-xl text-white/80">
                Get professional help before it&apos;s too late. Contact IC Pest Control today for fast, effective, and affordable pest control services in Islamabad and Rawalpindi. Your safety and satisfaction are our top priorities.
              </p>
            </StaggerItem>

            <div className="mb-10 grid gap-4 sm:grid-cols-2">
              {[
                "Free Inspection",
                "Same-Day Service",
                "100% Guaranteed",
                "No Hidden Fees",
              ].map((item) => (
                <StaggerItem key={item}>
                  <div className="flex items-center gap-2 rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
                    <CheckCircle size={18} className="text-brand-green-100" />
                    {item}
                  </div>
                </StaggerItem>
              ))}
            </div>

            <StaggerItem>
              <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                <a href="tel:+923005515809" className="btn-primary inline-flex items-center justify-center gap-3 px-8 py-4 text-base text-lg">
                  <Phone size={20} />
                  Call +92 300 5515809
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-white/20"
                >
                  Book Free Inspection
                  <ArrowRight size={20} />
                </Link>
              </div>
            </StaggerItem>
          </StaggerGroup>

          <FadeIn className="border border-emerald-200/10 bg-emerald-900/40 p-6 shadow-2xl shadow-emerald-950/20 backdrop-blur-xl" delay={0.08}>
            <p className="text-brand-green-100 font-semibold uppercase tracking-[0.24em] text-sm mb-3">Request a callback</p>
            <h3 className="text-3xl font-semibold text-white mb-5">Quick contact form</h3>

            {status === "success" && (
              <div className="mb-4 rounded-none border border-emerald-300/30 bg-emerald-950/30 p-4 text-emerald-100 text-sm">
                Request received. We will contact you within 24 hours.
              </div>
            )}

            {status === "error" && (
              <div className="mb-4 p-3 bg-red-950/30 border border-red-400/20 rounded-none text-red-300">
                {serverMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="grid gap-4 text-left">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-emerald-100 text-sm">Name *</span>
                  <input
                    type="text"
                    placeholder=""
                    value={form.name}
                    onChange={update("name")}
                    className={inputClass("name")}
                    disabled={status === "loading"}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </label>
                <label className="block">
                  <span className="text-emerald-100 text-sm">Phone number *</span>
                  <input
                    type="tel"
                    placeholder=""
                    value={form.phone}
                    onChange={update("phone")}
                    className={inputClass("phone")}
                    disabled={status === "loading"}
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </label>
              </div>
              <label className="block">
                <span className="text-emerald-100 text-sm">Email *</span>
                <input
                  type="email"
                  placeholder=""
                  value={form.email}
                  onChange={update("email")}
                  className={inputClass("email")}
                  disabled={status === "loading"}
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </label>
              <label className="block">
                <span className="text-emerald-100 text-sm">Message *</span>
                <textarea
                  rows={4}
                  placeholder="How can we help you?"
                  value={form.message}
                  onChange={update("message")}
                  className={`mt-2 w-full rounded-none border px-4 py-3 text-white outline-none transition focus:border-brand-green-100 focus:ring-2 focus:ring-brand-green-100/20 ${
                    errors.message
                      ? "border-red-400 bg-red-950/30"
                      : "border-emerald-300/20 bg-emerald-950/50"
                  }`}
                  disabled={status === "loading"}
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </label>
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-none bg-brand-green-100 hover:bg-emerald-200 text-slate-950 font-semibold px-5 py-3 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send message
                  </>
                )}
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

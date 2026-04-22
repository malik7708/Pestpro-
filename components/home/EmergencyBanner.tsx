import { Phone, MessageCircle, Clock3 } from "lucide-react";

export function EmergencyBanner() {
  return (
    <section className="py-12 bg-brand-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-max relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Clock3 size={28} className="text-white" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-white/85 text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-[0.16em] mb-3">
                Urgent Support
              </div>
              <h2 className="font-display text-white text-2xl lg:text-3xl font-semibold tracking-tight">
                Need urgent pest control assistance?
              </h2>
              <p className="text-white/75 mt-2 max-w-2xl leading-7">
                For severe infestation concerns, commercial site issues, or time-sensitive residential complaints,
                contact our team for fast scheduling and treatment guidance.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <a
              href="tel:+923069235099"
              className="inline-flex items-center gap-3 bg-white text-brand-navy hover:bg-slate-100 font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg"
            >
              <Phone size={20} />
              +92 306 9235099
            </a>
            <a
              href="https://wa.me/923069235099"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300"
            >
              <MessageCircle size={20} />
              WhatsApp Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

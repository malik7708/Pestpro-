"use client";

import { useState, useRef, useCallback } from "react";

const testimonials = [
  {
    name: "Usman Butt",
    role: "Homeowner",
    location: "Islamabad",
    company: "Residential Client",
    date: "Aug 29, 2011",
    rating: 4.9,
    initials: "DC",
    color: "#0f766e",
    text: "Islamabad PestControl fixed my pest issue with a strong, fast plan and great follow-up. The team arrived on time and explained everything clearly. Exceptional service from start to finish.",
  },
  {
    name: "Sana Tariq",
    role: "Homeowner",
    location: "Rawalpindi",
    company: "Family Residence",
    date: "May 22, 2015",
    rating: 4.9,
    initials: "ST",
    color: "#0d9488",
    text: "I booked a termite inspection and the response was more professional than expected. They were careful, honest, and incredibly useful in their advice. Will definitely return.",
  },
  {
    name: "Sanaullah Khan",
    role: "Residential Client",
    location: "Rawalpindi",
    company: "Apartment Management",
    date: "Aug 04, 2020",
    rating: 5.0,
    initials: "BL",
    color: "#115e59",
    text: "Islamabad PestControl provided a structured recurring plan that finally gave us the control and reporting our property needed. Professional, thorough and completely reliable.",
  },
  {
    name: "Parvez Shah",
    role: "Business Owner",
    location: "Taxila",
    company: "Food Business",
    date: "June 12, 2018",
    rating: 4.9,
    initials: "PS",
    color: "#0f766e",
    text: "The kitchen and storage areas were treated without disrupting operations. We now feel much safer and more confident in our hygiene controls. Outstanding professionalism.",
  },
  {
    name: "Hassan Enterprises",
    role: "Operations Team",
    location: "Islamabad",
    company: "Warehouse Client",
    date: "July 29, 2024",
    rating: 5.0,
    initials: "HE",
    color: "#0d9488",
    text: "Their warehouse fumigation was efficient and respectful of our schedule. Islamabad PestControl reduced pests while keeping our team working normally. A truly seamless experience.",
  },
];

const RADIUS = 158;
const CENTER = 200;
const TOTAL = testimonials.length;

function getOrbitPos(index: number, activeIndex: number, scale = 1) {
  const off = ((index - activeIndex) % TOTAL + TOTAL) % TOTAL;
  const norm = off <= TOTAL / 2 ? off : off - TOTAL;
  const angle = (norm / TOTAL) * 2 * Math.PI - Math.PI / 2;
  const scaledRadius = RADIUS * scale;
  const x = CENTER + scaledRadius * Math.cos(angle);
  const y = CENTER + scaledRadius * Math.sin(angle);
  const isActive = norm === 0;
  const dist = Math.abs(norm);
  return {
    x, y, isActive,
    opacity: dist === 0 ? 1 : dist === 1 ? 0.58 : 0.28,
    scale: isActive ? 1.15 : 0.9,
  };
}

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const changeIndex = useCallback((next: number) => {
    setAnimating(true);
    setTimeout(() => {
      setActiveIndex(((next % TOTAL) + TOTAL) % TOTAL);
      setAnimating(false);
    }, 240);
  }, []);

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) changeIndex(diff > 0 ? activeIndex + 1 : activeIndex - 1);
    touchStartX.current = null;
  };

  const active = testimonials[activeIndex];

  return (
    <section
      className="relative bg-[#f7f9f7] py-20 lg:py-24 overflow-hidden font-sans"
    >
      <div className="absolute top-[-120px] left-[-80px] w-[480px] h-[480px] rounded-full bg-radial-[circle,rgba(47,107,79,0.11)_0%,transparent_70%] blur-[72px] pointer-events-none" />
      <div className="absolute bottom-[-60px] right-[-60px] w-[380px] h-[380px] rounded-full bg-radial-[circle,rgba(47,107,79,0.09)_0%,transparent_70%] blur-[72px] pointer-events-none" />

      <div className="max-w-[1180px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-[#2f6b4f] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <span className="w-7 h-0.5 bg-[#2f6b4f] rounded-full" />
            Client Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#22313d] leading-tight mb-3">
            Trusted by <em className="text-[#2f6b4f] italic">hundreds</em> of satisfied clients
          </h2>
          <p className="text-slate-600 text-lg max-w-md mx-auto leading-relaxed">
            Real experiences from homeowners and businesses across Pakistan.
          </p>
        </div>

        {/* Body */}
        <div className="grid grid-cols-[400px_1fr] gap-14 items-center max-lg:flex max-lg:flex-col max-lg:gap-8">

          {/* Orbit */}
          <div className="relative w-[400px] h-[400px] flex-shrink-0 mx-auto hidden lg:block" aria-hidden="true">
            <div className="absolute top-1/2 left-1/2 w-[385px] h-[385px] border border-[#2f6b4f]/10 rounded-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 w-[284px] h-[284px] border border-dashed border-[#2f6b4f]/10 rounded-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-45" />
            <div className="absolute top-1/2 left-1/2 w-[138px] h-[138px] border border-[#2f6b4f]/10 rounded-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
              <circle
                cx="200" cy="200" r="158"
                fill="none" stroke="rgba(15,118,110,0.13)"
                strokeWidth="1.5" strokeDasharray="5 10"
              />
            </svg>
            {testimonials.map((t, i) => {
              const { x, y, isActive, opacity, scale } = getOrbitPos(i, activeIndex);
              return (
                <button
                  key={t.name}
                  className={`absolute w-[54px] h-[54px] rounded-full border-none cursor-pointer flex items-center justify-center transition-all duration-550 ease-out transform -translate-x-1/2 -translate-y-1/2 z-10 font-sans ${
                    isActive ? 'w-[66px] h-[66px]' : ''
                  }`}
                  style={{
                    left: `${x}px`, top: `${y}px`, opacity,
                    transform: `translate(-50%,-50%) scale(${scale})`,
                    background: `radial-gradient(circle at 35% 35%, ${t.color}ee, ${t.color}99)`,
                    boxShadow: isActive
                      ? `0 0 0 3px #fff, 0 0 0 5px ${t.color}55, 0 14px 36px ${t.color}44`
                      : `0 4px 14px ${t.color}44`,
                  }}
                  onClick={() => changeIndex(i)}
                  aria-label={`View testimonial from ${t.name}`}
                >
                  <span className="text-xs font-bold text-white tracking-wide relative z-10">{t.initials}</span>
                  {isActive && <span className="absolute inset-[-8px] rounded-full border-2 border-[#2f6b4f]/30 pointer-events-none" />}
                </button>
              );
            })}
            <div className="absolute top-1/2 left-1/2 w-14 h-14 bg-white border border-[#2f6b4f]/12 rounded-full flex items-center justify-center text-xl text-[#2f6b4f] shadow-lg transform -translate-x-1/2 -translate-y-1/2 z-20">?</div>
          </div>

          {/* Card */}
          <div
            className={`flex flex-col gap-5 transition-all duration-300 ${
              animating ? 'opacity-0 translate-y-2.5' : ''
            }`}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div className="bg-white rounded-[26px] p-10 relative overflow-hidden shadow-lg border border-[#2f6b4f]/6">
              <div className="absolute left-0 right-0 top-0 h-0.75 bg-[#2f6b4f]" />
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="text-5xl leading-none text-[#2f6b4f]/13 flex-1">&quot;</div>
                <svg className="w-12 h-12 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="Google" role="img">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <blockquote className="text-lg italic font-medium text-[#22313d] leading-relaxed mb-7">{active.text}</blockquote>
              <div className="flex items-center gap-2.5 pb-5 border-b border-[#2f6b4f]/8 mb-5">
                <span className="text-[#2f6b4f] text-sm tracking-wide">★★★★★</span>
                <span className="text-xs font-bold text-[#2f6b4f] bg-[#2f6b4f]/9 px-2 py-0.5 rounded-full">{active.rating.toFixed(1)}</span>
              </div>
              <div className="flex items-center gap-3.5">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-lg flex-shrink-0"
                  style={{ background: `radial-gradient(circle at 35% 35%, ${active.color}cc, ${active.color}77)` }}
                >
                  {active.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#22313d] m-0">{active.name}</p>
                  <p className="text-xs text-slate-600 m-0 mt-0.5">{active.role} • {active.company}</p>
                  <p className="text-xs text-slate-400 m-0 mt-0.5">{active.location} • {active.date}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4">
              <button className="w-10 h-10 rounded-full border border-[#2f6b4f]/22 bg-white text-[#2f6b4f] text-xl cursor-pointer flex items-center justify-center transition-all duration-200 shadow-md hover:bg-[#2f6b4f] hover:text-white hover:border-[#2f6b4f]" onClick={() => changeIndex(activeIndex - 1)} aria-label="Previous">&lt;</button>
              <div className="flex gap-1.5 items-center">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`w-2 h-2 rounded-full border-none cursor-pointer p-0 transition-all duration-500 ease-out ${
                      i === activeIndex ? 'w-6.5 bg-[#2f6b4f]' : 'bg-[#2f6b4f]/20'
                    }`}
                    onClick={() => changeIndex(i)}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button className="w-10 h-10 rounded-full border border-[#2f6b4f]/22 bg-white text-[#2f6b4f] text-xl cursor-pointer flex items-center justify-center transition-all duration-200 shadow-md hover:bg-[#2f6b4f] hover:text-white hover:border-[#2f6b4f]" onClick={() => changeIndex(activeIndex + 1)} aria-label="Next">&gt;</button>
            </div>

            <p className="hidden text-xs text-slate-400 text-center tracking-wide mt-1">Swipe to browse reviews</p>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .grid-cols-[400px_1fr] { display: flex; flex-direction: column; gap: 2.5rem; }
          .relative.w-[400px] { margin: 0 auto; transform: scale(0.8); transform-origin: center; }
        }
        @media (max-width: 768px) {
          .relative.w-[400px] { transform: scale(0.7); }
        }
        @media (max-width: 640px) {
          section { padding: 3rem 0 4rem; }
          .max-w-[1180px] { padding: 0 1.1rem; }
          .text-center.mb-14 { margin-bottom: 2rem; }
          .text-lg.max-w-md { font-size: 0.88rem; }
          .relative.w-[400px] { transform: scale(0.6); margin-bottom: -1rem; }
          .bg-white.rounded-[26px] { padding: 1.75rem 1.4rem 1.5rem; border-radius: 20px; }
          .text-5xl { font-size: 3.5rem; margin-bottom: 0.7rem; }
          .text-lg.italic { font-size: 1rem; line-height: 1.75; margin-bottom: 1.25rem; }
          .w-12.h-12 { width: 44px; height: 44px; font-size: 0.8rem; }
          .text-sm.font-semibold { font-size: 0.9rem; }
          .w-10.h-10 { display: none; }
          .hidden.text-xs { display: block; }
        }
        @media (max-width: 480px) {
          .relative.w-[400px] { transform: scale(0.5); margin-bottom: -2rem; }
          .bg-white.rounded-[26px] { padding: 1.5rem 1.1rem 1.25rem; }
          .text-lg.italic { font-size: 0.93rem; }
        }
        @media (max-width: 380px) {
          .relative.w-[400px] { transform: scale(0.45); margin-bottom: -2.5rem; }
          .bg-white.rounded-[26px] { padding: 1.5rem 1.1rem 1.25rem; }
          .text-lg.italic { font-size: 0.93rem; }
        }
      `}</style>
    </section>
  );
}

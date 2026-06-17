"use client";

import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { services } from "../data/services";
import contentIcon from "../assets/fa/content.png";

export default function WhatWeOffer() {
  const [visibleItems, setVisibleItems] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  const itemRefs = useRef([]);
  const headingRef = useRef(null);

  useEffect(() => {
    const observers = [];

    if (headingRef.current) {
      const obs = new IntersectionObserver(
        ([entry]) => entry.isIntersecting && entry.target.classList.add("animate-in"),
        { threshold: 0.2 }
      );
      obs.observe(headingRef.current);
      observers.push(obs);
    }

    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) =>
          entry.isIntersecting &&
          setVisibleItems((prev) => (prev.includes(i) ? prev : [...prev, i])),
        { threshold: 0.1 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="w-full bg-black text-white py-20 max-sm:py-16 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#B8734E]/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8a563a]/5 rounded-full blur-3xl animate-float-delayed" />

      {/* ================= HEADING ================= */}
      <div className="relative z-10 text-center mb-16 max-sm:mb-12">
        {/* Animated Badge */}
        <div className="flex justify-center mb-6 animate-[slideDown_0.8s_ease-out]">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#B8734E]/10 to-[#8a563a]/10 border border-[#B8734E]/20 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B8734E] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B8734E]"></span>
            </span>
            <span className="text-[#B8734E] text-sm font-medium tracking-wide">Our Services</span>
          </div>
        </div>

        <h2
          ref={headingRef}
          className="font-serif text-5xl md:text-6xl max-sm:text-4xl opacity-0 translate-y-8 transition-all duration-700"
        >
          What All Do We{" "}
          <span className="relative inline-block">
            <span className="text-espresso italic">Offer</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#B8734E] to-transparent rounded-full blur-sm"></span>
          </span>
        </h2>
      </div>

      {/* ================= SERVICES LIST ================= */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        {services.map((item, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              onPointerEnter={(e) => {
                if (e.pointerType === "mouse") {
                  setHoveredIndex(index);
                }
              }}
              onPointerLeave={(e) => {
                if (e.pointerType === "mouse") {
                  setHoveredIndex(null);
                }
              }}
              className={`
                relative
                border-t border-[#C08860]/20 
                transition-all duration-700 
                ${visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
                ${index === services.length - 1 ? 'border-b border-[#C08860]/20' : ''}
              `}
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r from-[#B8734E]/5 to-transparent rounded-2xl transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

              {/* ── Main Row ── */}
              <button
                type="button"
                data-cursor="view"
                onClick={() => navigate(`/service/${item.slug}`)}
                className="relative z-10 w-full flex items-center justify-between py-8 max-sm:py-6 text-left group hover:bg-[#B8734E]/5 hover:scale-[1.03] hover:z-20 transform transition-all duration-500 px-6 max-sm:px-4 rounded-2xl"
              >
                <div className="flex items-center gap-6 max-sm:gap-4 flex-1">
                  {/* Icon */}
                  <div className="relative w-16 h-16 max-sm:w-12 max-sm:h-12 shrink-0">
                    <div className="absolute inset-0 bg-[#B8734E]/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative w-full h-full p-3 max-sm:p-2 rounded-xl bg-gradient-to-br from-[#1a1410]/80 to-[#0a0605]/80 border border-[#B8734E]/20 group-hover:border-[#B8734E]/40 group-hover:scale-110 transition-all duration-500 backdrop-blur-sm">
                      <img
                        src={item.icon}
                        alt=""
                        className="w-full h-full object-contain filter brightness-140 group-hover:brightness-160 transition-all duration-500"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = contentIcon;
                        }}
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-3xl max-lg:text-2xl max-sm:text-xl text-[#C08860] group-hover:bg-gradient-to-r group-hover:from-[#D4A574] group-hover:to-[#B8734E] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500 leading-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Arrow */}
                <div className="shrink-0 ml-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#B8734E]/10 group-hover:bg-[#B8734E]/20 group-hover:scale-110 transition-all duration-500">
                  <svg
                    className="text-white group-hover:text-[#D4A574] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500"
                    width="20px"
                    height="20px"
                    viewBox="0 0 16 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5056 13.3715L11.5054 5.4646L3.85547 5.46471M11.1689 5.80114L4.1602 12.8098"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="square"
                    />
                  </svg>
                </div>
              </button>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -20px) scale(1.05); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-20px, 20px) scale(1.05); }
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }

        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}
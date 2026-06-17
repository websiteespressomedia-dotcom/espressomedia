import { useState, useEffect } from "react";
import tabImg from "../assets/mobile/tab2-enhance.png";
import waveImg from "../assets/mobile/graph3-bg.png";

export default function Hero() {
  const [open, setOpen] = useState(false);
  const [views, setViews] = useState(0);

  useEffect(() => {
    const target = 6000000;
    const duration = 2500;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setViews(target);
        clearInterval(interval);
      } else {
        setViews(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, []);

  const formatMillion = (num) => {
    if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(1).replace(".0", "") + "M";
    }
    return num.toLocaleString();
  };

  return (
    <div
      id="home"
      className="min-h-screen w-full bg-black relative overflow-hidden font-sans flex flex-col justify-between"
    >
      {/* ================= HEADER & HERO TEXT ================= */}
      <div className="flex flex-col">
        <section className="relative z-20 px-6 md:px-12 lg:px-20 mt-10 mb-10 md:mt-16 shrink-0">
          <div className="relative">
            {/* Main Heading with Gradient & Animation */}
            <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-7xl leading-tight max-w-5xl animate-[fadeInUp_1s_ease-out]">
              <span className="text-white">Where Strategy Is</span>{" "}
              <span className="relative inline-block">
                <span className="italic pr-2 font-bold bg-gradient-to-r from-[#8a563a] via-espresso to-[#8a563a] bg-clip-text text-transparent animate-[shimmer_3s_ease-in-out_infinite] bg-[length:200%_auto]">
                  Brewed
                </span>
                <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-[#B8734E] to-transparent rounded-full blur-sm"></span>
              </span>
              <br className="hidden sm:block" />
              <span className="text-white inline"> Into</span>{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#B8734E] to-[#8a563a] bg-clip-text text-transparent font-bold">
                  Measurable Results
                </span>
                <svg
                  className="absolute -bottom-2 sm:-bottom-3 left-0 w-full"
                  height="8"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,6 Q50,0 100,6 T200,6"
                    fill="none"
                    stroke="#B8734E"
                    strokeWidth="2"
                    opacity="0.5"
                  />
                </svg>
              </span>
            </h2>

            {/* Description with Better Spacing */}
            <p className="mt-8 max-w-2xl text-gray-300 text-md sm:text-xl md:text-2xl leading-relaxed font-light animate-[fadeInUp_1s_ease-out_0.2s_both]">
              A full-funnel growth system designed to{" "}
              <span className="text-white font-medium">move inventory</span> and{" "}
              <span className="text-white font-medium">grow revenue</span> for
              Experiential spaces and corporate brands.
            </p>

            {/* Enhanced CTA Button */}
            <div className="mt-7 flex flex-wrap gap-4 items-center animate-[fadeInUp_1s_ease-out_0.4s_both]">
              <a
                href="#contact"
                className="group relative px-4 py-3 rounded-full bg-gradient-to-r from-[#B8734E] to-[#8a563a] text-white font-semibold tracking-wider overflow-hidden inline-flex items-center gap-3 shadow-lg shadow-[#B8734E]/20 hover:shadow-xl hover:shadow-[#B8734E]/30 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 text-sm md:text-base uppercase">
                  Get in touch
                </span>
                <svg
                  className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>

                {/* Animated shine effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#case-studies"
                className="group relative px-4 py-3 rounded-full border-2 border-[#B8734E]/30 text-[#B8734E] font-semibold tracking-wider overflow-hidden inline-flex items-center gap-3 hover:border-[#B8734E] transition-all duration-300 hover:bg-[#B8734E]/5"
              >
                <span className="text-sm md:text-base uppercase">
                  View Case Studies
                </span>
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-col sm:flex-row flex-wrap items-start gap-6 text-sm text-gray-400 animate-[fadeInUp_1s_ease-out_0.6s_both]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>6M+ Views Generated</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[#B8734E]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <span>150+ Happy Clients</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ================= TABLET + WAVE SECTION ================= */}
      <div className="relative w-full flex flex-col items-center min-h-[40vh] sm:min-h-[70vh] md:min-h-[54vh] justify-center mt-8 md:mt-0 pb-20 max-sm:pb-12">
        {/* THE WAVE */}
        <div className="absolute bottom-0 left-0 sm:top-8 w-full h-full z-[15] pointer-events-none">
          <div className="relative w-full h-full">
            <img
              src={waveImg}
              alt="Wave background"
              className="w-full h-full object-cover"
              style={{
                opacity: 0.6,
                filter: "blur(0.5px)",
              }}
            />
            {/* Fade overlay */}
            <div className="absolute -inset-30 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none" />
          </div>
        </div>

        {/* THE TABLET */}
        <div className="relative z-[5] w-full max-w-[450px] sm:max-w-[550px] md:max-w-[550px] lg:max-w-[750px] px-4 mb-8 sm:mb-12 md:mb-16 -mt-16 sm:mt-0 animate-[fadeInUp_1.2s_ease-out_1s_both]">
          <div className="relative">
            <img
              src={tabImg}
              alt="tablet"
              className="w-full h-auto block drop-shadow-2xl"
            />

            {/* OVERLAYS */}
            <div className="absolute left-[20%] top-[24%] max-sm:left-[20%] max-sm:top-[28%]">
              <div className="text-[10vw] max-sm:text-[5vw] sm:mt-4 sm:text-[7vw] md:text-5xl lg:text-6xl text-white font-bold tabular-nums tracking-tighter leading-none">
                {formatMillion(views)}+
              </div>
            </div>

            <div className="absolute left-[19%] sm:mt-0 top-[45%] max-sm:left-[21%] max-sm:top-[42%]">
              <div className="text-[2.5vw] max-sm:text-[2.2vw] sm:text-[1vw] md:text-xs lg:text-sm text-gray-400 font-medium">
                Real time data as on 15 Dec
              </div>
            </div>

            <div className="absolute left-[19%] top-[52%] w-full max-sm:left-[20%] max-sm:top-[50%] max-sm:w-[45%]">
              <div className="flex gap-1.5 max-sm:gap-1.5 sm:gap-3 md:gap-3 lg:gap-3 items-center text-white text-[17px] max-sm:text-[8px] sm:text-[1.6vw] md:text-[10px] lg:text-xs">
                <span className="max-sm:px-0.5">1H</span>
                <span className="px-1 md:px-2 py-0.5 max-sm:px-1 max-sm:py-0 rounded-md bg-white/10 backdrop-blur-md border border-white/10">
                  1D
                </span>
                <span className="max-sm:px-0.5">1W</span>
                <span className="max-sm:px-0.5">1Y</span>
                <span className="max-sm:px-0.5">ALL</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .slant-underline::after {
          content: "";
          position: absolute;
          bottom: -0.2rem;
          left: 0;
          width: 100%;
          height: 1px;
          background: #B8734E;
          display: block;
          transform: skewX(-30deg) scaleX(0);
          transform-origin: left center;
          transition: transform .25s ease;
          pointer-events: none;
        }
        .slant-underline:hover::after {
          transform: skewX(-30deg) scaleX(1);
        }
          @keyframes slideDown {
    from { 
      opacity: 0; 
      transform: translateY(-20px); 
    }
    to { 
      opacity: 1; 
      transform: translateY(0); 
    }
  }

  @keyframes shimmer {
    0%, 100% { 
      background-position: 0% 50%; 
    }
    50% { 
      background-position: 100% 50%; 
    }
  }

  .delay-1000 {
    animation-delay: 1s;
  }
      `}</style>
    </div>
  );
}

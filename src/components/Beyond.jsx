import { motion } from "framer-motion";

import toyota from "../assets/TOYOTA.png";
import tilelab2 from "../assets/old-ilt.png";
import honda from "../assets/HONDA.png";
import gc from "../assets/GC GROUP.png";
import flais from "../assets/FLAIS.png";
import hero from "../assets/HERO.png";
import kawasaki from "../assets/KAWASAKI.png";
import mahindra from "../assets/MAHINDRA.png";
import renault from "../assets/RENAULT.png";
import sns from "../assets/SNS.png";
import gokul from "../assets/GOKUL GROUP.png";
import gcgroup from "../assets/GC GROUP.png";

import States from "./States.jsx";

export default function Beyond() {
  const logos = [
    toyota, tilelab2, honda, gc, flais,
    hero, kawasaki, mahindra, renault, sns, gokul, gcgroup
  ];

  return (
    <section className="w-full bg-gradient-to-b from-transparent via-black/80 to-black text-white px-6 md:px-12 lg:px-20 xl:px-30 pt-16 pb-16 overflow-hidden -mt-24 relative z-20">

      {/* Animated Badge */}
      <div className="flex justify-center mb-6 animate-[slideDown_0.8s_ease-out]">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#B8734E]/10 to-[#8a563a]/10 border border-[#B8734E]/20 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B8734E] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B8734E]"></span>
          </span>
          <span className="text-[#B8734E] text-sm font-medium tracking-wide">Trusted by Leading Brands</span>
        </div>
      </div>

      {/* Main Heading with Enhanced Typography */}
      <div className="relative">
        <h3 className="text-center font-serif italic text-espresso text-4xl md:text-5xl lg:text-6xl xl:text-[64px] mb-4 animate-[fadeInUp_1s_ease-out]">
          Beyond the likes
          <span className="text-[#B8734E]">...</span>
        </h3>
        
        {/* Decorative underline */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#B8734E] to-transparent rounded-full animate-[shimmer_3s_ease-in-out_infinite]"></div>
        </div>
      </div>

      {/* Description with Better Typography */}
      <div className="relative max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] mx-auto">
        {/* Quote marks decoration */}
        <svg className="absolute -top-4 -left-4 md:-left-8 w-12 h-12 md:w-16 md:h-16 text-[#B8734E]/20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
        </svg>
        
        <p className="text-center text-lg md:text-xl lg:text-2xl xl:text-[25px] 2xl:text-[28px] xl:whitespace-nowrap leading-[1.7] py-8 md:py-12 lg:py-16 text-gray-200 font-light font-serif animate-[fadeInUp_1s_ease-out_0.2s_both] relative z-10">
          From <span className="text-white font-medium relative inline-block group">
            brand creation
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#B8734E]/0 via-[#B8734E] to-[#B8734E]/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </span> to <span className="text-white font-medium relative inline-block group">
            revenue execution
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#B8734E]/0 via-[#B8734E] to-[#B8734E]/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </span>, we build{" "}
          <span className="text-espresso font-medium">strategic</span>,{" "}
          <span className="text-espresso font-medium">creative</span>, and{" "}
          <span className="text-espresso font-medium">marketing systems</span>{" "}
          that drive measurable business growth.
        </p>

        <svg className="absolute -bottom-4 -right-4 md:-right-8 w-12 h-12 md:w-16 md:h-16 text-[#B8734E]/20 rotate-180" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
        </svg>
      </div>
 
      <States />

      {/* ================= LOGOS (MASK FADE) ================= */}
      <div
        className="relative w-full overflow-hidden mt-8"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
      >
        <motion.div
          className="flex gap-3 md:gap-4 lg:gap-5"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 28,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full flex items-center justify-center bg-black flex-shrink-0"
            >
              <img
                src={logo}
                alt="Brand"
                className="max-w-[70%] max-h-[70%] object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

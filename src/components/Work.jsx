"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

// Import project image assets
import case2 from "../assets/casestudy/case-study-2-walkins.png";
import case3 from "../assets/casestudy/case-study-3-40pct.png";
import case4 from "../assets/casestudy/case-study-4-200-leads.png";
import leadsImg from "../assets/Notice/leads.png";

const projects = [
  {
    title: "Content strategy and marketing",
    category: "Digital Growth & Strategy",
    image: case2,
    index: "01",
    link: "#",
  },
  {
    title: "Branding",
    category: "Identity & Visuals",
    image: case3,
    index: "02",
    link: "#",
  },
  {
    title: "Commercial Production",
    category: "Cinematic Shoots",
    image: case4,
    index: "03",
    link: "#",
  },
  {
    title: "Web development",
    category: "Interactive Tech",
    image: leadsImg,
    index: "04",
    link: "#",
  },
];

function ProjectCard({ project, className, yOffset }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      style={{ y: yOffset }}
      className={`relative flex flex-col ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to={project.link}
        data-cursor="view-white"
        className="group w-full flex flex-col cursor-pointer"
      >
        {/* Image Container with custom corners, overflow-hidden, and border */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[24px] md:rounded-[36px] border border-white/10 group-hover:border-white/30 transition-all duration-500 bg-gradient-to-br from-[#120B08] to-[#050505] shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
          {/* Subtle top/bottom shadow gradients for premium visual depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500 z-10" />
          
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.06 : 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            loading="lazy"
          />
        </div>

        {/* Card Details Block */}
        <div className="flex justify-between items-start mt-6 px-2 relative w-full overflow-hidden">
          <div className="flex flex-col flex-grow">
            {/* Category text sliding up from mask */}
            <div className="h-6 overflow-hidden relative">
              <motion.span
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: isHovered ? 0 : 25, opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="block text-sm text-[#B8734E] font-semibold uppercase tracking-[0.15em] pl-0.5"
              >
                {project.category}
              </motion.span>
            </div>

            {/* Title shifting slightly */}
            <motion.h3
              animate={{ y: isHovered ? -2 : 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-2xl md:text-3xl lg:text-[32px] text-white leading-tight mt-1"
            >
              {project.title}
            </motion.h3>
          </div>

          {/* Number Badge shifting left */}
          <motion.div
            animate={{ x: isHovered ? -5 : 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 pt-2 pl-4"
          >
            <span className="font-serif text-lg md:text-xl text-[#C08860] font-light select-none border border-[#C08860]/20 rounded-full px-3 py-0.5">
              [{project.index}]
            </span>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Work() {
  const containerRef = useRef(null);
  
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax shifts for asymmetrical layout
  const y1 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : -180]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : -60]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : -120]);

  return (
    <section 
      id="work" 
      ref={containerRef}
      className="w-full bg-black text-white py-24 md:py-32 px-6 md:px-12 lg:px-20 relative overflow-visible"
    >
      {/* Decorative ambient background glows to match brand guidelines */}
      <div className="absolute top-1/4 left-5 w-80 h-80 bg-[#B8734E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-5 w-96 h-96 bg-[#8a563a]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* Top Marquee indicator row */}
        <div className="flex justify-between items-center w-full border-b border-white/10 pb-6 mb-8 uppercase text-xs md:text-sm tracking-[0.25em] font-sans text-[#B8734E] font-semibold">
          <div>⊙ FEATURED PROJECTS プロジェクト</div>
          <div className="hidden sm:block">CREATIVE DEVELOPMENT</div>
        </div>

        {/* Centerpiece Title */}
        <div className="w-full flex flex-col md:flex-row justify-between items-baseline gap-2 mb-16 select-none">
          <h2 className="font-serif text-[13vw] md:text-[10vw] font-bold leading-none tracking-tighter text-white uppercase">
            Works©
          </h2>
          <h2 className="font-serif text-[13vw] md:text-[10vw] font-bold leading-none tracking-tighter text-white/40 italic uppercase md:text-right">
            Featured
          </h2>
        </div>

        {/* Introductory Copy Block */}
        <div className="w-full md:w-[45%] flex flex-col items-start gap-4 mb-24 md:mb-32 pl-2">
          <p className="text-gray-400 text-lg md:text-xl font-light font-sans leading-relaxed">
            Every project is a chance to blend design and development to tell a unique story. We help brands move faster, scale bigger, and convert better.
          </p>
          <a 
            href="#" 
            className="inline-block mt-4 px-8 py-3.5 rounded-full border border-white text-white text-xs tracking-[0.2em] font-semibold uppercase bg-transparent hover:bg-white hover:text-black transition-all duration-500 hover:scale-105"
          >
            SEE WORKS
          </a>
        </div>

        {/* Asymmetrical Staggered Portfolio Grid */}
        <div className="w-full flex flex-col md:flex-row md:flex-wrap justify-between items-start gap-y-20 md:gap-y-32 relative z-10">
          
          {/* Card 01 - Content Strategy & Marketing (Left Side, Staggered Lower) */}
          <ProjectCard 
            project={projects[0]} 
            className="w-full md:w-[46%] self-start md:mt-32" 
            yOffset={y1} 
          />

          {/* Card 02 - Branding (Right Side, Mid-to-High Layout) */}
          <ProjectCard 
            project={projects[1]} 
            className="w-full md:w-[48%] self-start md:mt-0" 
            yOffset={y2} 
          />

          {/* Card 03 - Commercial Production (Positioned Centrally/Lowered) */}
          <ProjectCard 
            project={projects[2]} 
            className="w-full md:w-[70%] mx-auto md:mt-36" 
            yOffset={y3} 
          />

          {/* Card 04 - Web Development (Balanced Bottom Right) */}
          <ProjectCard 
            project={projects[3]} 
            className="w-full md:w-[46%] md:ml-auto md:mt-24" 
            yOffset={y4} 
          />

        </div>
      </div>
    </section>
  );
}

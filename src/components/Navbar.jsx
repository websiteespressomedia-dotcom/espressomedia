
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT US", href: "#about-us" },
    { name: "SERVICES", href: "#services" },
    { name: "WORK", href: "#work" },
    { name: "TESTIMONIAL", href: "#testimonials" },
    { name: "CASE STUDIES", href: "#case-studies" },
    { name: "CAREERS", href: "/careers", isRoute: true },
  ];

  const handleNavClick = (item) => {
    setOpen(false);
    if (item.isRoute) {
      navigate(item.href);
    } else {
      if (location.pathname !== "/") {
        window.location.href = "/" + item.href;
      } else {
        scrollToSection(item.href);
      }
    }
  };

  const scrollToSection = (href) => {
    setOpen(false);
    setActiveSection(href.substring(1));
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) {
        const headerEl = document.querySelector("header");
        const headerHeight = headerEl ? headerEl.offsetHeight : 80;
        const top =
          el.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({ top, behavior: "smooth" });
      } else {
        window.location.href = "/" + href;
      }
    }, 100);
  };

  // Detect scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on click outside
  useEffect(() => {
    const handleOutside = (e) => {
      if (!open) return;
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && open) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Scroll Spy Observer
  useEffect(() => {
    const sections = ["home", "about-us", "services", "work", "testimonials", "case-studies"];
    const observerOptions = {
      root: null,
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 px-6 sm:px-6 lg:px-20 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md shadow-lg border-b border-[#C08860]/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-full mx-auto flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/">
          <motion.h1
            whileHover={{ scale: 1.02 }}
            className="text-2xl md:text-xl lg:text-2xl font-serif text-espresso cursor-pointer"
          >
            The Espresso Media
          </motion.h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex ml-auto md:gap-4 gap-8 px-8 py-3 rounded-full border border-[#C08860]/30 text-espresso text-sm tracking-widest bg-black/40 backdrop-blur-md shadow-lg">
          {navItems.map((item) => {
            const isActive = item.isRoute
              ? location.pathname === item.href
              : location.pathname === "/" && activeSection === item.href.substring(1);
            return (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className={`relative group cursor-pointer transition-colors duration-300 ${
                  isActive ? "text-white font-semibold" : "hover:text-white"
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#B8734E] to-[#8a563a] transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </button>
            );
          })}
        </nav>

        {/* Desktop Contact Button */}
        <div className="hidden md:flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavClick({ href: "#contact" })}
            className="group relative ml-4 px-6 py-3 rounded-full border-2 border-espresso text-white text-sm md:text-xs tracking-wide overflow-hidden shadow-lg hover:shadow-[0_0_20px_rgba(192,136,96,0.3)] transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              CONTACT US
              <svg 
                    className="text-white hover:text-white transition-colors duration-300"
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
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#B8734E] to-[#8a563a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button
          ref={toggleRef}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle mobile menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-[#C08860] p-2 rounded-full hover:bg-[#C08860]/10 transition-colors duration-300"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
            <span
              className={`w-6 h-0.5 bg-[#C08860] rounded-full transition-transform duration-300 ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-[#C08860] rounded-full transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-[#C08860] rounded-full transition-transform duration-300 ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </motion.button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute left-0 right-0 top-full bg-black/98 backdrop-blur-md border-t border-[#C08860]/20 shadow-2xl overflow-hidden"
          >
            <div className="max-w-3xl mx-auto px-6 py-6">
              <div className="flex flex-col gap-1">
                {navItems.map((item, index) => {
                  const isActive = item.isRoute
                    ? location.pathname === item.href
                    : location.pathname === "/" && activeSection === item.href.substring(1);
                  return (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleNavClick(item)}
                      className={`group w-full text-left text-base py-3 px-4 rounded-lg border-b border-[#C08860]/10 transition-all duration-300 ${
                        isActive
                          ? "bg-[#C08860]/20 text-[#D4A574] font-bold"
                          : "text-gray-300 hover:bg-[#C08860]/10 hover:text-white"
                      }`}
                    >
                      <span className="flex items-center justify-between">
                        {item.name}
                        <svg
                          className={`w-4 h-4 transition-all duration-300 ${
                            isActive
                              ? "opacity-100 translate-x-1 text-[#D4A574]"
                              : "opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
                          }`}
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
                      </span>
                    </motion.button>
                  );
                })}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.05 }}
                  className="pt-4"
                >
                  <button
                    onClick={() => handleNavClick({ href: "#contact" })}
                    className="group w-full px-6 py-3 rounded-full border-2 border-[#C08860] text-[#C08860] tracking-wider text-center text-base font-semibold hover:bg-gradient-to-r hover:from-[#B8734E] hover:to-[#D4A574] hover:text-black transition-all duration-300 relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      CONTACT US
                      <svg 
                    className=" hover:text-white transition-colors duration-300"
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
                    </span>
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

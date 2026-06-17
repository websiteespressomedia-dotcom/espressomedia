import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverType, setHoverType] = useState(""); // "view" or "view-white"
  const location = useLocation();

  // Reset custom cursor state when navigating to a new page
  useEffect(() => {
    setIsHovered(false);
    setHoverType("");
    document.body.classList.remove("custom-cursor-hovered");
  }, [location.pathname]);

  useEffect(() => {
    // Only enable custom cursor on devices that support hovering (desktops)
    const hasHover = window.matchMedia("(hover: hover)").matches;
    if (!hasHover) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Only remove class if we aren't hovering over another "view" elements
      const isOverView = e.target.closest('[data-cursor="view"], [data-cursor="view-white"]');
      if (!isOverView) {
        document.body.classList.remove("custom-cursor-hovered");
      }
    };

    const handleMouseOver = (e) => {
      const element = e.target.closest('[data-cursor]');
      if (element) {
        const cursorVal = element.getAttribute('data-cursor');
        if (cursorVal === 'view' || cursorVal === 'view-white') {
          setIsHovered(true);
          setHoverType(cursorVal);
          document.body.classList.add("custom-cursor-hovered");
        }
      }
    };

    const handleMouseOut = (e) => {
      const element = e.target.closest('[data-cursor]');
      if (element) {
        setIsHovered(false);
        setHoverType("");
        document.body.classList.remove("custom-cursor-hovered");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.body.classList.remove("custom-cursor-hovered");
    };
  }, []);

  const isWhiteCapsule = isHovered && hoverType === "view-white";
  const isRustCapsule = isHovered && hoverType === "view";

  let width = 0;
  let height = 0;
  let offsetX = 0;
  let offsetY = 0;

  if (isWhiteCapsule || isRustCapsule) {
    width = 110;
    height = 60;
    offsetX = -55;
    offsetY = -30;
  }

  const active = isHovered;

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
      animate={{
        x: position.x + offsetX,
        y: position.y + offsetY,
        width: width,
        height: height,
        borderRadius: "30px",
        backgroundColor: isRustCapsule ? "#8a563a" : "#FFFFFF",
        border: isRustCapsule ? "1px solid #8a563a" : "none",
        scale: active ? 1 : 0,
        opacity: active ? 1 : 0,
      }}
      transition={{
        x: { type: "spring", stiffness: 800, damping: 45, mass: 0.2 },
        y: { type: "spring", stiffness: 800, damping: 45, mass: 0.2 },
        default: {
          type: "spring",
          damping: 30,
          stiffness: 250,
          mass: 0.5,
        }
      }}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className={`text-[12px] font-black tracking-[0.25em] font-sans ${
              isRustCapsule ? "text-white" : "text-black"
            }`}
            style={{
              fontFamily: "'Century Gothic Paneuropean', 'Century Gothic', sans-serif"
            }}
          >
            VIEW
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

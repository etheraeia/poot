import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { animate } from 'animejs';

// A fixed full-screen overlay that plays a simple sliding rectangle
// transition (wipe) on route changes. Uses anime.js timelines.
export default function PageTransition() {
  const barRef = useRef(null);
  const didInitRef = useRef(false);
  const location = useLocation();

  useEffect(() => {
    // Skip animation on initial mount
    if (!didInitRef.current) {
      didInitRef.current = true;
      return;
    }

    const el = barRef.current;
    if (!el) return;

    // Ensure starting state
    el.style.transform = "scaleX(0)";
    el.style.transformOrigin = "left center";

    // Wipe in from left -> fully cover
    const enter = animate(el, {
      duration: 350,
      ease: "inOutQuad",
      onComplete: () => {
        // Then wipe out to the right -> reveal new page
        el.style.transformOrigin = "right center";
        animate(el, {
          duration: 350,
          ease: "inOutQuad",
          scaleX: { from: 1, to: 0 },
        });
      },
      // scaleX from 0 to 1
      scaleX: { from: 0, to: 1 },
    });

    return () => {
      // Cancel current animation if any
      if (enter && enter.cancel) enter.cancel();
    };
  }, [location.pathname]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[999]"
    >
      {/* The rectangle that wipes across the screen. Adjust bg as needed. */}
      <div
        ref={barRef}
        className="absolute inset-0 bg-[#1029b4] will-change-transform"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}

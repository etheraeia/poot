import { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { animate } from "animejs";

// Context to expose the transition navigation function
const TransitionContext = createContext({
  transitionTo: () => {},
});

export function usePageTransition() {
  return useContext(TransitionContext);
}

export default function TransitionProvider({ children }) {
  const navigate = useNavigate();
  const barRef = useRef(null);
  const animatingRef = useRef(false);
  const [currentDirection, setCurrentDirection] = useState("right");

  const transitionTo = useCallback(
    (path, direction) => {
      setCurrentDirection(direction === "left" ? "left" : "right");
      if (!barRef.current || animatingRef.current) {
        // If overlay isn't ready or an animation is in progress, fall back to immediate nav
        navigate(path);
        return;
      }

      const element = barRef.current;
      animatingRef.current = true;
      var startX = "-100vw";
      var  midX = "0vw";
      var  endX = "100vw";

      if (direction == "right") {
        startX = "-100vw";
        midX = "0vw";
        endX = "100vw";
      }

      if (direction == "left") {
        startX = "100vw";
        midX = "0vw";
        endX = "-100vw";
      }

      // Reset to starting state
      element.style.transform = `translateX(${startX})`;
      // Cover the screen (wipe-in)
      animate(element, {
        duration: 750,
        ease: "inQuad",
        scaleX: 1.5,
        scaleY: 1.5,
        translateX: [startX, midX],
        onComplete: () => {
          // Navigate only AFTER the screen is fully covered
          navigate(path);
          // Next frame, reveal from the right (wipe-out)
          requestAnimationFrame(() => {
            animate(element, {
              duration: 750,
              ease: "outQuad",
              scaleX: 1,
              scaleY: 1,
              translateX: [midX, endX],
              onComplete: () => {
                animatingRef.current = false;
              },
            });
          });
        },
      });
    },
    [navigate]
  );

  const value = useMemo(() => ({ transitionTo }), [transitionTo]);

  return (
    <TransitionContext.Provider value={value}>
      {children}
      {/* Full-screen overlay used for wipe animation */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-[999]">
        <div
          ref={barRef}
          className="rounded-full absolute inset-0 bg-[#1029b4] will-change-transform flex justify-center items-center"
          style={{ transform: "scaleX(0)" }}
        >
          <img
            src={`${currentDirection === "right" ? "cat_light_R.png" : "cat_light_L.png"}`}
            alt="Kitty"
            className="object-cover h-48"
          />
        </div>
      </div>
    </TransitionContext.Provider>
  );
}

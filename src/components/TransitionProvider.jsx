import { createContext, useCallback, useContext, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { animate } from "animejs";

// Context to expose the transition navigation function
const TransitionContext = createContext({
  transitionTo: (_path) => {},
});

export function usePageTransition() {
  return useContext(TransitionContext);
}

export default function TransitionProvider({ children }) {
  const navigate = useNavigate();
  const barRef = useRef(null);
  const animatingRef = useRef(false);

  const transitionTo = useCallback(
    (path) => {
      if (!barRef.current || animatingRef.current) {
        // If overlay isn't ready or an animation is in progress, fall back to immediate nav
        navigate(path);
        return;
      }

      const element = barRef.current;
      animatingRef.current = true;

      // Reset to starting state
      element.style.transformOrigin = "left center";
      element.style.transform = "scaleX(0)";

      // Cover the screen (wipe-in)
      animate(element, {
        duration: 350,
        ease: "inOutQuad",
        scaleX: { from: 0, to: 1 },
        onComplete: () => {
          // Navigate only AFTER the screen is fully covered
          navigate(path);

          // Next frame, reveal from the right (wipe-out)
          requestAnimationFrame(() => {
            element.style.transformOrigin = "right center";
            animate(element, {
              duration: 350,
              ease: "inOutQuad",
              scaleX: { from: 1, to: 0 },
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
          className="absolute inset-0 bg-[#1029b4] will-change-transform"
          style={{ transform: "scaleX(0)" }}
        />
      </div>
    </TransitionContext.Provider>
  );
}

import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const halfPage = document.body.scrollHeight / 2;
      setVisible(scrollY > halfPage);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
        aria-label="Scroll to top"
        className={`${visible ? "opacity-100" : "opacity-0 pointer-events-none"} transition-all duration-200 z-999 p-6 fixed bottom-10 left-10 bg-[#1029b4] rounded-full cursor-pointer`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
        <img
            src="arrow_straight_up.png"
            alt="Top"
            loading="lazy"
            decoding="async"
            className="block object-contain w-8 h-8"
        />
    </button>
  );
}

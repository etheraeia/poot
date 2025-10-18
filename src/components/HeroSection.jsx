// HeroSection.jsx
export function HeroSection({ firstName, lastName, tagline, arrowSrc }) {
  return (
    <div
      name="Hero Frame"
      className="grid grid-cols-1 grid-rows-1 overflow-hidden min-h-[100vh] bg-cover bg-center bg-[url('./bkg_v.png')] place-items-center md:min-h-[90vh] md:bg-[url('./bkg_h.png')]"
    >
      <div className="flex flex-col pb-[40dvw] pr-[20dvw] text-[#1029b4] font-thin font-serif text-[18dvw] absolute -space-y-[6dvw] md:pb-[3dvw] md:pr-[10dvw] md:text-[8dvw] md:-space-y-[3dvw]">
        <h2
          style={{ fontFamily: "ivypresto-display, serif" }}
          className="transition-all name duration-1000 ease-in-out"
        >
          {firstName}
        </h2>
        <h2
          style={{ fontFamily: "ivypresto-display, serif" }}
          className="transition-all italic duration-1000 ease-in-out scroll-target"
        >
          {lastName}
        </h2>
      </div>
      <img
        src={arrowSrc}
        className="h-[15dvw] mb-[5dvw] ml-[30dvw] transition-all duration-1000 ease-in-out absolute md:h-[6dvw] md:mt-[15dvw] md:ml-[15dvw]"
      />
      <p
        style={{ fontFamily: "epilogue, sans-serif" }}
        className="p-[10dvw] mt-[32dvw] ml-[20dvw] mr-[8dvw] text-[#1029b4] font-light tracking-tighter text-[4dvw] transition-all duration-1000 ease-in-out absolute md:p-[28dvw] md:mt-[26dvw] md:ml-[24dvw] md:mr-0 md:text-[1.5dvw]"
      >
        {tagline}
      </p>
    </div>
  );
}
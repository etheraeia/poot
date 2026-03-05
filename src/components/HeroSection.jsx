// HeroSection.jsx
export function HeroSection({ firstName, lastName, tagline, arrowSrc }) {
  return (
    <div
      name="Hero Frame"
      className="relative grid grid-cols-1 grid-rows-1 overflow-hidden h-[100vh] bg-cover bg-center bg-[url('/bkg_v.png')] md:bg-[url('/bkg_h.png')] place-items-center"
    >
      <div className="flex flex-col right-[4vh] top-[1vh] text-[#1029b4] font-thin font-serif text-7xl relative md:absolute md:right-auto md:top-auto md:pb-[3dvw] md:pr-[10dvw] md:text-[8dvw] md:-space-y-[1dvw] sm:text-8xl">
        <h2
          style={{ fontFamily: "ivypresto-display, serif" }}
          className="name"
        >
          {firstName}
        </h2>
        <h2
          style={{ fontFamily: "ivypresto-display, serif" }}
          className="italic scroll-target"
        >
          {lastName}
        </h2>
      </div>
      <img
        src={arrowSrc}
        className="h-14 bottom-[33vh] left-20 relative md:absolute md:h-[6dvw] md:bottom-auto md:left-auto md:mt-[10dvw] md:ml-[15dvw] sm:h-20 sm:left-28 sm:bottom-[36vh]"
      />
      <p
        style={{ fontFamily: "epilogue, sans-serif" }}
        className="w-[20vh] bottom-[32vh] left-[5vh] text-[#1029b4] font-light tracking-tighter text-md relative md:w-auto md:bottom-auto md:left-auto md:absolute md:p-[28dvw] md:mt-[26dvw] md:ml-[24dvw] md:mr-0 md:text-[1.5dvw]"
      >
        {tagline}
      </p>
    </div>
  );
}
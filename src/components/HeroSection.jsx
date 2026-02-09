// HeroSection.jsx
export function HeroSection({ firstName, lastName, tagline, arrowSrc }) {
  return (
    <div
      name="Hero Frame"
      className="relative grid grid-cols-1 grid-rows-1 overflow-hidden h-[100vh] bg-cover bg-center bg-[url('/bkg_v.png')] md:bg-[url('/bkg_h.png')] place-items-center"
    >
      <div className="flex flex-col pb-[24dvw] pr-[8dvw] text-[#1029b4] font-thin font-serif text-[16dvw] absolute -space-y-[6dvw] md:pb-[3dvw] md:pr-[10dvw] md:text-[8dvw] md:-space-y-[3dvw]">
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
        className="h-[12dvw]  mt-[10dvw] ml-[36dvw] absolute md:h-[6dvw] md:mt-[10dvw] md:ml-[15dvw]"
      />
      <p
        style={{ fontFamily: "epilogue, sans-serif" }}
        className="p-[10dvw] mt-[36dvw] ml-[30dvw] mr-[10dvw] text-[#1029b4] font-light tracking-tighter text-[3dvw] absolute md:p-[28dvw] md:mt-[26dvw] md:ml-[24dvw] md:mr-0 md:text-[1.5dvw]"
      >
        {tagline}
      </p>
    </div>
  );
}
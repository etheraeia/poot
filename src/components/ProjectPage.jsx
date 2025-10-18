export function ProjectPage({
  intro_text,
  blurb,
  hero_image,
  wide_image,
  left_image,
  right_image,
}) {
  return (
    <div className="flex flex-col flex-grow-0 flex-shrink-0 h-[100%] bg-[#fffbf1] justify-start items-center self-stretch relative gap-12">
      <img
        src={hero_image}
        alt="Hero"
        className="flex-grow-0 flex-shrink-0 object-cover w-[100vw] h-3/4 absolute left-0 top-0 self-stretch"
      />
      <div className="flex flex-col flex-grow-0 flex-shrink-0 w-[100vw] h-3/4 px-8 bg-gradient-to-b from-white/0 to-[#fffbf1] justify-end items-end self-stretch relative">
          <p
            style={{ fontFamily: "ivypresto-display, serif" }}
            className="flex-grow-0 flex-shrink-0 text-8xl font-thin text-left text-[#0c2fd8] self-stretch"
          >
            {intro_text}
          </p>
        </div>
      <div className="flex flex-col flex-grow-0 flex-shrink-0 overflow-hidden px-8 py-2.5 justify-start items-start self-stretch relative gap-12">
        <p
          style={{ fontFamily: "epilogue, sans-serif" }}
          className="flex-grow-0 flex-shrink-0 text-3xl font-light tracking-tighter text-left text-[#19255c] self-stretch"
        >
          {blurb}
        </p>
        <img
          src={wide_image}
          alt="Wide"
          className="flex-grow-0 flex-shrink-0 object-cover w-[1392px] h-[371px] self-stretch"
        />
        <div className="flex flex-grow-0 flex-shrink-0 overflow-hidden justify-start items-start self-stretch relative gap-12">
          <img
            src={left_image}
            alt="Left"
            className="flex-grow object-cover w-[672px] h-[591px]"
          />
          <img
            src={right_image}
            alt="Right"
            className="flex-grow object-cover w-[672px] h-[591px]"
          />
        </div>
      </div>
    </div>
  );
}

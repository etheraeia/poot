export function ProjectPage({
  intro_text,
  blurb,
  hero_image,
  wide_image,
  left_image,
  right_image,
  page_layout,
  intro_text_color,
  body_text_color,
  background_color
}) {
  return (
    <div className={`flex flex-col flex-grow-0 flex-shrink-0 h-[100%] justify-start bg-[${background_color}] items-center self-stretch relative`}>
      <img
        src={hero_image}
        alt="Hero"
        className="flex-grow-0 flex-shrink-0 object-cover w-[100vw] h-5/6 absolute left-0 top-0 self-stretch"
      />
      <div className={`flex flex-col flex-grow-0 flex-shrink-0 w-[100vw] h-5/6 px-96 bg-gradient-to-b from-white/0 to-[${background_color}] justify-end items-end self-stretch relative`}>
          <p
            style={{ fontFamily: "ivypresto-display, serif" }}
            className={`flex-grow-0 flex-shrink-0 text-7xl font-thin text-left text-[${intro_text_color}] self-stretch`}
          >
            {intro_text}
          </p>
      </div>
      <div className={`flex flex-col flex-grow-0 flex-shrink-0 w-[100vw] px-96 bg-[${background_color}] justify-end items-end self-stretch relative`}>
        <p
          style={{ fontFamily: "epilogue, sans-serif" }}
          className={`flex-grow-0 flex-shrink-0 text-2xl font-light tracking-tighter leading-normal text-left text-[${body_text_color}] self-stretch`}
        >
          {blurb}
        </p>
      </div>
      <div className={`flex flex-col flex-grow-0 flex-shrink-0 overflow-hidden bg-[${background_color}] px-8 py-2.5 justify-start items-start self-stretch relative gap-12`}>
        <p />
        { page_layout === "wide" && ( 
          <img
            src={wide_image}
            alt="Wide"
            className="flex-grow-0 flex-shrink-0 object-cover w-[100%] h-[calc(100vw/3*(1/277))] self-stretch"
          />
        )}
        { (page_layout === "halfnhalf" || page_layout === "wide") && (
          <div className="flex flex-grow-0 flex-shrink-0 overflow-hidden justify-start items-start self-stretch relative gap-12">
            <img
              src={left_image}
              alt="Left"
              className="flex-grow object-cover w-1/2 h-[591px]"
            />
            <img
              src={right_image}
              alt="Right"
              className="flex-grow object-cover w-1/2 h-[591px]"
            />
          </div>
        )}
        { (page_layout === "thirds") && (
          <div className="flex flex-grow-0 flex-shrink-0 overflow-hidden justify-start items-start self-stretch relative gap-12">
            <img
              src={left_image}
              alt="Left"
              className="flex-grow object-cover w-2/3 h-[591px]"
            />
            <img
              src={right_image}
              alt="Right"
              className="flex-grow object-cover w-1/3 h-[591px]"
            />
          </div>
        )}
      </div>
    </div>
  );
}

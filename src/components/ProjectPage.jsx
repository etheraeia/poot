
function ImageHalfNHalf({
  left_image,
  right_image,
}) {
  return (
    <div className="flex flex-grow-0 flex-shrink-0 overflow-hidden justify-start items-start self-stretch relative gap-12">
        <img
          src={left_image}
          alt="Left"
          className="flex-grow object-cover w-1/2"
        />
        <img
          src={right_image}
          alt="Right"
          className="flex-grow object-cover w-1/2"
        />
    </div>
  );
}

function ImageThirds({
  left_image,
  right_image,
}) {
    return (
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
    );
}

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
  background_color,
  caption,
  elaboration,
}) {
  return (
    <div className={`flex flex-col flex-grow-0 flex-shrink-0 h-[100%] justify-start items-center self-stretch relative`}>
      {/* SLIDE 1: Hero Image, Intro Text, Blurb */}
      <img
        src={hero_image}
        alt="Hero"
        className="flex-grow-0 flex-shrink-0 object-cover w-[100vw] h-2/3 self-stretch"
      />
      <div className={`flex flex-col flex-grow-0 flex-shrink-0 w-[100vw] py-6 px-[calc(100vw/4.5)] ${background_color} gap-6 justify-end items-end self-stretch relative`}>
        <p
          style={{ fontFamily: "ivypresto-display, serif" }}
          className={`flex-grow-0 flex-shrink-0 text-7xl font-thin text-left self-stretch ${intro_text_color}`}
        >
          {intro_text}
        </p>
        <p
          style={{ fontFamily: "epilogue, sans-serif" }}
          className={`flex-grow-0 flex-shrink-0 text-2xl font-extralight tracking-tighter leading-normal text-left self-stretch ${body_text_color}`}
        >
          {blurb}
        </p>
        {/* SLIDE 2: Glamour */}
        <p />
        { page_layout === "wide" && ( 
          <img
            src={wide_image}
            className="flex-grow-0 flex-shrink-0 object-cover w-[100%] h-[calc(100vh/] self-stretch"
          />
        )}
        <p
          style={{ fontFamily: "epilogue, sans-serif" }}
          className={`flex-grow-0 flex-shrink-0 text-xl font-extralight tracking-tighter leading-normal text-center ${body_text_color} self-stretch`}
        >
          {caption}
        </p>
        { (page_layout === "halfnhalf" || page_layout === "wide") && <ImageHalfNHalf left_image={left_image} right_image={right_image} /> }
        { (page_layout === "thirds") && <ImageThirds left_image={left_image} right_image={right_image} /> }
        {/* SLIDE 3: Process and Justifications */}
        
        <div className="flex flex-grow-0 flex-shrink-0 overflow-hidden justify-start items-start self-stretch relative gap-12">
        <img
          src={left_image}
          alt="Left"
          className="flex-grow object-cover w-1/2"
        />
        <p
          style={{ fontFamily: "epilogue, sans-serif" }}
          className={`flex-grow-0 flex-shrink-0 text-2xl w-1/2 font-extralight tracking-tighter leading-normal text-left ${body_text_color} self-stretch`}
        >
          {elaboration}
        </p>
        </div>
        {/* <ImageHalfNHalf left_image={left_image} right_image={right_image} />
        <ImageThirds left_image={left_image} right_image={right_image} /> */}
      </div>
    </div>
  );
}

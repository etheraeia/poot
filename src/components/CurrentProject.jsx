// CurrentProject.jsx
export function CurrentProject({ title, description, image }) {
  return (
    <div
      name="Current Project Frame"
      className="flex flex-col md:flex-row justify-center items-center overflow-hidden relative gap-4"
    >
      <div className="flex flex-col px-8 md:pl-8 w-full justify-start relative gap-10">
        <div className="flex flex-col w-full text-6xl md:text-[5.6vw] font-thin text-left text-[#fffbf1] ">
          <p style={{ fontFamily: "ivypresto-display, serif" }}>
            Currently
          </p>
          <p style={{ fontFamily: "ivypresto-display, serif" }}>
            prototyping:
          </p>
        </div>
        <div className="flex flex-col overflow-hidden items-start relative gap-4 font-light text-left text-[#ffffff]">
          <p
            style={{ fontFamily: "epilogue, sans-serif" }}
            className="text-4xl md:text-[2.8vw] tracking-tighter"
          >
            {title}
          </p>
          <p
            style={{ fontFamily: "epilogue, sans-serif" }}
            className="ml-1 text-xl md:text-[1.4vw] tracking-tighter"
          >
            {description}
          </p>
        </div>
      </div>
      <img src={image} className=" w-full object-cover object-left rounded-lg md:rounded-l-lg" />
    </div>
  );
}

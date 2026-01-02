// CurrentProject.jsx
export function CurrentProject({ title, description, image }) {
  return (
    <div
      name="Current Project Frame"
      className="flex overflow-hidden py-16 bg-[#1029b4] relative gap-4"
    >
      <div className="flex flex-col pl-4 w-full justify-start relative gap-9">
        <p
          style={{ fontFamily: "ivypresto-display, serif" }}
          className="w-full text-8xl font-thin text-left text-[#fffbf1] "
        >
          Currently prototyping:
        </p>
        <div className="flex flex-col overflow-hidden items-start relative gap-4">
          <p
            style={{ fontFamily: "epilogue, sans-serif" }}
            className="text-5xl font-light tracking-tighter text-left text-[#ffffff]"
          >
            {title}
          </p>
          <p
            style={{ fontFamily: "epilogue, sans-serif" }}
            className="w-full text-2xl font-light tracking-tighter text-left text-[#ffffff]"
          >
            {description}
          </p>
        </div>
      </div>
      <img src={image} className=" w-full object-cover rounded-l-lg" />
      {/* <div
        className="overflow-hidden w-1/2 bg-cover bg-no-repeat bg-center rounded-l-lg relative"
        style={{ backgroundImage: `url(${image})` }}
      ></div> */}
    </div>
  );
}

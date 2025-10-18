// CurrentProject.jsx
export function CurrentProject({ title, description, image }) {
  return (
    <div
      name="Current Project Frame"
      className="flex flex-grow-0 flex-shrink-0 overflow-hidden py-[60px] justify-start items-start self-stretch relative gap-2.5"
    >
      <div className="flex flex-col flex-grow pt-[60px] pb-[120px] justify-start items-start relative gap-9">
        <p
          style={{ fontFamily: "ivypresto-display, serif" }}
          className="flex-grow-0 flex-shrink-0 w-[705px] text-8xl font-thin text-left text-[#0c2fd8] self-stretch"
        >
          Currently prototyping:
        </p>
        <div className="flex flex-col flex-grow-0 flex-shrink-0 overflow-hidden justify-start items-start self-stretch relative gap-2.5">
          <p
            style={{ fontFamily: "epilogue, sans-serif" }}
            className="text-5xl font-light tracking-tighter text-left text-[#19255c]"
          >
            {title}
          </p>
          <p
            style={{ fontFamily: "epilogue, sans-serif" }}
            className="w-[705px] text-2xl font-light tracking-tighter text-left text-[#19255c] self-stretch"
          >
            {description}
          </p>
        </div>
      </div>
      <div
        className="flex-grow-0 flex-shrink-0 overflow-hidden w-1/2 h-[calc(100vw/2*(586/705))] bg-cover bg-no-repeat bg-center rounded-lg relative"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </div>
  );
}
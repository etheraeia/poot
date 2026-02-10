import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.body.className = "bg-[#fffbf1]";
  }, []);
  return (
    <div
      className="flex justify-center items-start md:items-center h-auto md:h-full py-12"
    >
      <div
        className="flex flex-col md:flex-row justify-start items-end md:items-center w-full relative overflow-hidden gap-8 md:gap-12 pt-6 px-8"
      >
        <img
          className="object-cover h-[50vh] w-full md:h-[calc(100vw/3*(600/470))] md:w-[66vw] overflow-hidden rounded-lg"
          src="Headshot.jpg"
        />
        <div className="flex flex-col justify-between items-start flex-grow overflow-hidden">
          <div
            className="flex flex-col justify-start items-start self-stretch relative overflow-hidden gap-[5vw] md:gap-[2vw]"
          >
            <p
              style={{ fontFamily: "ivypresto-display, serif" }}
              className="self-stretch text-5xl md:text-[3vw] font-thin text-left text-[#0c2fd8]"
            >
              Hi! I'm Corrine Wang, a design student at the University of Texas
              at Austin who loves tinkering with typography.
            </p>
            <p
              style={{ fontFamily: "epilogue, sans-serif" }}
              className="self-stretch text-2xl md:text-[1.4vw] font-light tracking-tighter text-left text-[#19255c]"
            >
              outside of school, i've worked with student organizations and startups, and
              have experience in ux/ui, merch design, and layout and publication.
            </p>
            <p
              style={{ fontFamily: "epilogue, sans-serif" }}
              className="self-stretch text-2xl md:text-[1.4vw] font-light tracking-tighter text-left text-[#19255c]"
            >
              as a designer, i strive to marry function with joy, evoking a sense of magic and discovery
              while addressing unseen perspectives and populations.
            </p>
            <p
              style={{ fontFamily: "epilogue, sans-serif" }}
              className="self-stretch text-2xl md:text-[1.4vw] font-light tracking-tighter text-left text-[#19255c]"
            >
              as a human, i enjoy eating sushi, sitting in boxes, sleeping, and dressing up.
            </p>
          </div>
        </div>
      </div>
      <img
        src="trenchcoat-cats.png"
        className="fixed md:absolute bottom-0 right-0 w-1/10 h-[calc(100vw/10*(277/198))] object-cover"
      />
    </div>
  );
}
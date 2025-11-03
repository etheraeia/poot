import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.body.className = "bg-[#fffbf1]";
  }, []);
  return (
    <div
      class="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 h-100% pt-16"
    >
      <div
        class="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[100%] relative overflow-hidden gap-12 pt-6 px-8"
      >
        <div
          class="flex-grow-0 flex-shrink-0 w-1/3 h-[calc(100vw/3*(600/470))] relative overflow-hidden rounded-lg bg-[url(Headshot.jpg)] bg-cover bg-no-repeat bg-center"
        ></div>
        <div class="flex flex-col justify-between items-start flex-grow overflow-hidden">
          <div
            class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-5"
          >
            <p
              style={{ fontFamily: "ivypresto-display, serif" }}
              class="self-stretch flex-grow-0 flex-shrink-0 text-5xl font-thin text-left text-[#0c2fd8]"
            >
              Hi! I'm Corrine Wang, a graphic and interaction design student at the University of Texas
              at Austin who loves tinkering with typography.
            </p>
            <p
              style={{ fontFamily: "epilogue, sans-serif" }}
              class="self-stretch flex-grow-0 flex-shrink-0 text-2xl font-light tracking-tighter text-left text-[#19255c]"
            >
              Outside of school, I've worked with student organizations and startups, and
              have experience in UX/UI, merch design, and layout and publication.
            </p>
            <p
              style={{ fontFamily: "epilogue, sans-serif" }}
              class="self-stretch flex-grow-0 flex-shrink-0 text-2xl font-light tracking-tighter text-left text-[#19255c]"
            >
              As a designer, I strive to marry function with joy, evoking a sense of magic and discovery
              while addressing unseen perspectives and populations.
            </p>
            <p
              style={{ fontFamily: "epilogue, sans-serif" }}
              class="self-stretch flex-grow-0 flex-shrink-0 text-2xl font-light tracking-tighter text-left text-[#19255c]"
            >
              As a human, I enjoy eating sushi, sitting in boxes, sleeping, and dressing up.
            </p>
          </div>
        </div>
      </div>
      <img
        src="trenchcoat-cats.png"
        class="absolute bottom-0 right-0 flex-grow-0 flex-shrink-0 w-1/10 h-[calc(100vw/10*(277/198))] object-cover"
      />
    </div>
  );
}
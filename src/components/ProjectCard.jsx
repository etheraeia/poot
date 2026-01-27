import { TransitionLink } from "./TransitionLink";

// ProjectCard.jsx
export function ProjectCard({
  index,
  title,
  subtitle,
  media_file,
  height_modifer = "1080/1920",
  layout = "image-left",
  url_name,
}) {
  const MediaComponent = () => (
    <TransitionLink
      to={url_name}
      className={`overflow-hidden w-1/3 h-[calc(100vw/3*(${height_modifer}))] object-cover rounded-lg relative`}
    >
      {media_file.endsWith(".mp4") ? (
        <video
          src={media_file}
          autoPlay
          loop
          muted
          className="w-full h-full"
        />
      ) : (
        <img
          src={media_file}
          alt={title}
          className="w-full h-full"
        />
      )}
    </TransitionLink>
  );

  // Text content component with dynamic alignment
  const TextComponent = ({ textAlign, justifyItems = "start" }) => (
    <div
      to={url_name}
      className={`flex flex-col overflow-hidden w-1/3 pt-16 justify-start items-${justifyItems} self-stretch relative gap-2.5`}>
      <div className="h-0.5 w-full bg-[#19255C]" />
      <div className={`flex flex-col overflow-hidden px-4 justify-start self-stretch items-stretch relative`}>
        <TransitionLink to={url_name}>
          <p
            style={{ fontFamily: "epilogue, sans-serif" }}
            className={`flex flex-col self-stretch items-stretch text-4xl md:text-[2vw] font-light tracking-tighter text-${textAlign} text-[#19255c]`}
          >
            <span>
              {index}: {title}
              {subtitle && " - "}
              {subtitle}
            </span>
            {/* {subtitle && (
              <>
                <br />
                <span>
                  {subtitle}
                </span>
              </>
            )} */}
          </p>
        </TransitionLink>
      </div>
    </div>
  );

  // Layout switch based on the 4 distinct cases from your hardcoded source
  switch (layout) {
    case "image-left": // Image left, title center-left (like Cradlelist, Rotun, Salt Lake, CSA Social, Flairs)
      return (
        <div className="flex overflow-hidden justify-start items-start self-stretch relative">
          <MediaComponent />
          <TextComponent textAlign="left" justifyItems="center" />
        </div>
      );

    case "image-right": // Image right, title center-right (like Exoterminal, Facebook, Julie's, CSA Merch, Magic Mountain)
      return (
        <div className="flex overflow-hidden justify-end items-center self-stretch relative">
          <TextComponent textAlign="right" justifyItems="center" />
          <MediaComponent />
        </div>
      );

    case "text-left": // Image center-right, text left (like Me when the meme, Backpack Soup)
      return (
        <div className="flex overflow-hidden justify-start items-center self-stretch relative">
          <TextComponent textAlign="right" justifyItems="start" />
          <MediaComponent />
        </div>
      );

    case "text-right": // Image center-left, text right (like Fishbowl)
      return (
        <div className="flex overflow-hidden justify-end items-center self-stretch relative">
          <MediaComponent />
          <TextComponent textAlign="left" justifyItems="start" />
        </div>
      );
  }
}
"use client";

// ModularHero: flexible positioning for title and description
// Supports common positions like:
// - top-left, top-center, top-right
// - center-left, center, center-right
// - bottom-left, bottom-center, bottom-right
// Aliases: "center left"/"left center" => center-left, "right middle" => center-right,
//          "middle" => center, "left bottom" => bottom-left, "right bottom" => bottom-right

const POSITION_ALIASES = {
  "center left": "center-left",
  "left center": "center-left",
  "middle left": "center-left",
  "left middle": "center-left",
  "right middle": "center-right",
  "middle right": "center-right",
  middle: "center",
  "left bottom": "bottom-left",
  "bottom left": "bottom-left",
  "right bottom": "bottom-right",
  "bottom right": "bottom-right",
};

const POSITION_CLASSES = {
  "top-left": "top-4 left-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "top-right": "top-4 right-4",
  "center-left": "top-1/2 left-4 -translate-y-1/2",
  center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  "center-right": "top-1/2 right-4 -translate-y-1/2",
  "bottom-left": "bottom-4 left-4",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
  "bottom-right": "bottom-4 right-4",
};

function normalizePosition(pos) {
  if (!pos) return "center";
  const key = String(pos).toLowerCase().trim();
  return POSITION_ALIASES[key] || key;
}

function getPlacementClasses(pos) {
  const norm = normalizePosition(pos);
  return POSITION_CLASSES[norm] || POSITION_CLASSES.center;
}

function getHorizontalAlignClasses(pos) {
  const norm = normalizePosition(pos);
  if (norm.includes("left")) return "items-start text-left";
  if (norm.includes("right")) return "items-end text-right";
  return "items-center text-center";
}

export default function ModularHero({
  // Text
  title,
  description,
  textColor = "text-white",

  // Positioning
  titlePosition = "center",
  descriptionPosition = "center",

  // Background
  backgroundImage = "/hero.png",
  backgroundFit = "cover", // 'cover' | 'contain' | 'fill'

  // Heights (Tailwind min-h classes per breakpoint)
  minHeights = {
    base: "min-h-[360px]",
    sm: "sm:min-h-[420px]",
    md: "md:min-h-[520px]",
    lg: "lg:min-h-[640px]",
    xl: "xl:min-h-[758px]",
  },

  // Optional class overrides
  containerClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  contentGap = "gap-2",
}) {
  const minHeightClasses = Object.values(minHeights || {}).join(" ");

  const titleTypo =
    "font-maison-neue font-normal text-[28px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[34px] sm:leading-[40px] md:leading-[48px] lg:leading-[55.2px] tracking-[0.92px]";
  const descTypo =
    "pt-2 sm:pt-3 md:pt-4 font-maison-neue font-normal text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[30px]";

  const titlePos = normalizePosition(titlePosition);
  const descPos = normalizePosition(descriptionPosition);

  const sameSpot = titlePos === descPos;

  return (
    <div
      className={`relative hero ${minHeightClasses} bg-center bg-no-repeat flex justify-center items-center ${containerClassName}`}
      role="region"
      aria-label={title || "Hero"}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize:
          backgroundFit === "contain"
            ? "contain"
            : backgroundFit === "fill"
            ? "100% 100%"
            : "cover",
      }}
    >
      {/* Grouped content if positions coincide */}
      {sameSpot ? (
        <div
          className={`absolute ${getPlacementClasses(titlePos)} flex flex-col ${getHorizontalAlignClasses(titlePos)} ${contentGap}`}
        >
          {title && (
            <h1 className={`${titleTypo} ${textColor} ${titleClassName}`}>{title}</h1>
          )}
          {description && (
            <p className={`${descTypo} ${textColor} ${descriptionClassName}`}>{description}</p>
          )}
        </div>
      ) : (
        <>
          {title && (
            <div
              className={`absolute ${getPlacementClasses(titlePos)} flex ${getHorizontalAlignClasses(titlePos)}`}
            >
              <h1 className={`${titleTypo} ${textColor} ${titleClassName}`}>{title}</h1>
            </div>
          )}
          {description && (
            <div
              className={`absolute ${getPlacementClasses(descPos)} flex ${getHorizontalAlignClasses(descPos)}`}
            >
              <p className={`${descTypo} ${textColor} ${descriptionClassName}`}>{description}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  textAlign?: "left" | "right" | "center";
  aosAnimation?: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  textAlign = "left",
  aosAnimation = "fade-down",
  className = "",
}) => {
  const alignmentClasses = `text-${textAlign}`;
  const layoutClasses = textAlign === "right" ? "flex-row-reverse" : "flex-row";
  const maxWidth = "max-w-[50%]";
  const justifyContent =
    textAlign === "center" ? "justify-center" : "justify-between";

  return (
    <div
      className={`flex flex-col items-${textAlign} ${alignmentClasses} ${className}`}
      data-aos={aosAnimation}
    >
      <div
        className={`flex items-center ${justifyContent} gap-x-8 ${layoutClasses}`}
      >
        <p
          className={`text-[24px] font-extrabold md:text-[48px] ${maxWidth} ${alignmentClasses}`}
        >
          {title}
        </p>
        <hr
          className={`border-primary-500 rounded-xl border-[3px] flex-grow ${
            textAlign === "center" ? "w-1/2" : maxWidth
          }`}
        />
      </div>
      <p
        className={`text-primary-500 text-[16px] font-semibold md:text-[24px] mt-2 ${alignmentClasses}`}
      >
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;

import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  textAlign?: "left" | "right" | "center";
  aosAnimation?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  textAlign = "left",
  aosAnimation = "fade-down",
}) => {
  const alignmentClasses = `text-${textAlign}`;
  const layoutClasses = textAlign === "right" ? "flex-row-reverse" : "flex-row";

  const maxWidth = "max-w-[50%]";

  return (
    <div
      className={`flex flex-col items-${textAlign} ${alignmentClasses}`}
      data-aos={aosAnimation}
    >
      <div
        className={`flex items-center justify-between gap-x-8 ${layoutClasses}`}
      >
        <p
          className={`text-[24px] font-extrabold md:text-[48px] ${maxWidth} ${
            textAlign === "right" ? "text-right" : "text-left"
          }`}
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

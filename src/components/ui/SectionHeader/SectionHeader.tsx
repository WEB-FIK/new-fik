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
  const baseClasses = "flex flex-col";
  const alignmentClasses = `items-${textAlign} text-${textAlign}`;
  const layoutClasses = textAlign === "right" ? "flex-row-reverse" : "flex-row";
  const maxWidthClasses = "max-w-[50%]";
  const justifyContentClasses =
    textAlign === "center" ? "justify-center" : "justify-between";

  const containerClasses = `${baseClasses} ${alignmentClasses} ${className}`;
  const titleClasses = `text-[24px] font-extrabold md:text-[48px] ${maxWidthClasses} ${alignmentClasses}`;
  const hrClasses = `border-primary-500 rounded-xl border-[3px] flex-grow ${
    textAlign === "center" ? "w-1/2" : maxWidthClasses
  }`;
  const subtitleClasses = `text-primary-500 text-[16px] font-semibold md:text-[24px] mt-2 ${alignmentClasses}`;

  return (
    <div className={containerClasses} data-aos={aosAnimation}>
      <div
        className={`flex items-center ${justifyContentClasses} gap-x-8 ${layoutClasses}`}
      >
        <p className={titleClasses}>{title}</p>
        <hr className={hrClasses} />
      </div>
      <p className={subtitleClasses}>{subtitle}</p>
    </div>
  );
};

export default SectionHeader;

import React, { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

interface HeaderImageProps {
  src: StaticImageData;
  alt: string;
  children: ReactNode;
  additionalClasses?: string;
}

const HeaderImage: React.FC<HeaderImageProps> = ({
  src,
  alt,
  children,
  additionalClasses,
}) => (
  <div className={`relative w-full ${additionalClasses}`}>
    <Image src={src} alt={alt} className="w-full h-full object-cover" />
    <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-left">
      {children}
    </div>
  </div>
);
export default HeaderImage;

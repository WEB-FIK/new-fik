import React from "react";
import Image, { StaticImageData } from "next/image";

const StrukturManajemenCardLayout: React.FC<{
  image: StaticImageData;
  name: string;
  position: string;
  children?: React.ReactNode;
}> = ({ image, name, position, children }) => (
  <article className="relative rounded-[16px] h-[400px] w-[360px] overflow-hidden group">
    <Image
      src={image}
      alt={name}
      className="rounded-[16px] w-full h-full object-cover transition-transform duration-500 group-hover:scale-[108%] cursor-pointer"
    />
    <div className="absolute inset-0 bg-gradient-to-t hover:rounded-[16px] from-primary-500 via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none"></div>
    <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-white space-y-3 px-3 py-4">
      <p className="text-[18px] font-bold">{name}</p>
      <p className="text-[18px] font-bold">{position}</p>
    </div>
    {children}
  </article>
);

export default StrukturManajemenCardLayout;

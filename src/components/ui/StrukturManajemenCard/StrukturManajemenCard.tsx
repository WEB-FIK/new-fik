import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { LuBookMarked } from "react-icons/lu";

interface StrukturManajemenCardProps {
  image: StaticImageData;
  name: string;
  position: string;
  showMenu?: boolean;
  profileRoute?: string;
  lhkpnRoute?: string;
}

const StrukturManajemenCard: React.FC<StrukturManajemenCardProps> = ({
  image,
  name,
  position,
  showMenu,
  profileRoute,
  lhkpnRoute,
}) => {
  return (
    <div className="relative rounded-[16px] h-[400px] w-[360px] overflow-hidden group">
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
      {showMenu && (
        <div className="absolute bottom-0 left-0 right-0 flex justify-around items-center bg-primary-500 bg-opacity-100 h-[100px] text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <Link
            href={profileRoute || "#"}
            className="text-[16px] font-bold flex items-center gap-x-2 hover:underline"
          >
            <CgProfile className="text-[32px]" />
            Profile
          </Link>
          {lhkpnRoute && (
            <Link
              href={lhkpnRoute}
              className="text-[16px] font-bold flex items-center gap-x-2 hover:underline"
            >
              <LuBookMarked className="text-[32px]" />
              LHKPN
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default StrukturManajemenCard;

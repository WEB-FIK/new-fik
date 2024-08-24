import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { LuBookMarked } from "react-icons/lu";
import StrukturManajemenCardLayout from "./StrukturManajemenCardLayout";
interface StrukturManajemenCardProps {
  image: StaticImageData;
  name: string;
  position: string;
  role: string;
  showMenu?: boolean;
  profileRoute?: string;
  lhkpnRoute?: string;
}
const StrukturManajemenCard: React.FC<StrukturManajemenCardProps> = ({
  image,
  name,
  position,
  role,
  showMenu = false,
  profileRoute,
  lhkpnRoute,
}) => {
  return (
    <StrukturManajemenCardLayout image={image} name={name} position={position}>
      {showMenu && (profileRoute || lhkpnRoute) && (
        <footer className="absolute bottom-0 left-0 right-0 flex justify-around items-center bg-primary-500 h-24 text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {profileRoute && (
            <Link
              href={profileRoute}
              className="text-base font-bold flex items-center gap-x-2 hover:underline"
            >
              <CgProfile className="text-2xl" />
              Profile
            </Link>
          )}
          {lhkpnRoute && (
            <Link
              href={lhkpnRoute}
              className="text-base font-bold flex items-center gap-x-2 hover:underline"
            >
              <LuBookMarked className="text-2xl" />
              LHKPN
            </Link>
          )}
        </footer>
      )}
    </StrukturManajemenCardLayout>
  );
};

export default StrukturManajemenCard;

import Link from "next/link";
import React from "react";
import Links from "./Links/Links";
import upnvj from "../../../../public/icons/UPNVJ.png";
import Image from "next/image";
export default function Navbar() {
  return (
    <div className="justify-between w-full h-[160px] flex items-center px-[100px]">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image src={upnvj} alt="logo" />
        </Link>
        <div className="px-6 space-y-2 font-bold text-[20px] text-primary-500">
          <p>FAKULTAS ILMU KOMPUTER</p>
          <p>VETERAN JAKARTA</p>
        </div>
          </div>
      <div>
        <Links />
      </div>
    </div>
  );
}

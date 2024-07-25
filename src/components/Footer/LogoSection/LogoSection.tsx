import React from "react";
import Link from "next/link";
import Image from "next/image";
import upnvj from "../../../../public/icons/UPNVJ.png";

const LogoSection = () => (
  <div className="flex items-center space-x-4 md:pt-9">
    <Link href="/" className="border-r-4 pr-4 border-r-primary-500">
      <Image src={upnvj} alt="logo" width={64} height={64} />
    </Link>
    <div className="space-y-2 font-bold text-[18px] text-primary-500">
      <p>FAKULTAS ILMU KOMPUTER</p>
      <p>UPN VETERAN JAKARTA</p>
    </div>
  </div>
);

export default LogoSection;

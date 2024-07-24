import React from "react";
import Link from "next/link";

const AboutLinks = () => (
  <div className="w-full space-y-5 md:w-[287px]">
    <p className="font-bold text-[18px] border-b-4 pb-2 border-b-primary-500 md:text-[28px]">
      Tentang
    </p>
    <div className="flex flex-col space-y-5 font-normal">
      <Link href="/tentang-fik" className="text-[14px] hover:text-primary-500 cursor-pointer transform transition-all duration-300 md:text-[20px]">
        Tentang FIK
      </Link>
      <Link href="/manajemen" className="text-[14px] hover:text-primary-500 cursor-pointer transform transition-all duration-300 md:text-[20px]">
        Manajemen
      </Link>
      <Link href="/staf-pengajar" className="text-[14px] hover:text-primary-500 cursor-pointer transform transition-all duration-300 md:text-[20px]">
        Staf Pengajar
      </Link>
    </div>
  </div>
);

export default AboutLinks;
import React from "react";
import Link from "next/link";

const aboutMenus = [
  { href: "/tentang-fik", label: "Tentang FIK" },
  { href: "/manajemen", label: "Manajemen" },
  { href: "/staf-pengajar", label: "Staf Pengajar" }
];

const AboutLinks = () => (
  <div className="w-full space-y-5 md:w-[287px]">
    <p className="font-bold text-[18px] border-b-4 pb-2 border-b-primary-500 md:text-[28px]">
      Tentang
    </p>
    <div className="flex flex-col space-y-5 font-normal">
      {aboutMenus.map((menu, index) => (
        <Link
          key={index}
          href={menu.href}
          className="text-[14px] md:text-[20px] hover:text-primary-500 transform transition-all duration-300"
        >
          {menu.label}
        </Link>
      ))}
    </div>
  </div>
);

export default AboutLinks;

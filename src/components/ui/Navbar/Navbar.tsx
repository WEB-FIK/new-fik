"use client";

import Link from "next/link";
import React, { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import Links from "./Links/Links";
import upnvj from "../../../../public/icons/UPNVJ.png";
import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [select, setSelect] = useState<number | null>(null);

  return (
    <nav className="justify-between   w-full py-4 h-fit md:h-[180px] sticky top-0 z-10 bg-white flex items-center md:px-[20px] lg:px-[100px]">
      <>
        <div
          className={`${select !== null && "hidden"} text-2xl pl-4 md:hidden`}
          onClick={() => {
            setIsActive((v) => !v);
          }}
        >
          <MdOutlineMenu />
        </div>
        <div
          className={`${select === null && "hidden"} text-2xl pl-4 md:hidden`}
          onClick={() => {
            setSelect(null);
          }}
        >
          <IoCloseOutline />
        </div>
      </>
      <div className="flex items-center gap-2 md:gap-0 mx-auto justify-between">
        <Link href="/">
          <Image
            src={upnvj}
            className="w-[50px] md:min-w-[80px] lg:min-w-[100px]"
            alt="logo"
          />
        </Link>
        <div className="md:px-6 space-y-2 font-bold  text-sm md:text-[20px] text-primary-500">
          <p className="text-nowrap">FAKULTAS ILMU KOMPUTER</p>
          <p>VETERAN JAKARTA</p>
        </div>
      </div>
      <div className="hidden md:block">
        <Links value={select} setValue={setSelect} />
      </div>
      <div
        className={`absolute top-20 bg-white inset-x-0 ${
          isActive ? "md:hidden block" : "hidden"
        }`}
      >
        <Links value={select} setValue={setSelect} />
      </div>
    </nav>
  );
}

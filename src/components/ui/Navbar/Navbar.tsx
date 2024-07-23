"use client";

import Link from "next/link";
import React, { useState } from "react";
import Links from "./Links/Links";
import upnvj from "../../../../public/icons/UPNVJ.png";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative px-4 space-x-4 md:justify-between w-full h-[80px] md:h-[160px] flex items-center md:px-[100px]">
      <div className="flex items-center w-full space-x-3 md:w-auto">
        {!isOpen ? (
          <button
            className="md:hidden flex flex-col items-center justify-center w-8 h-8 mr-2"
            onClick={toggleMenu}
          >
            <span className="block w-6 h-[4px] bg-black transition-transform duration-300"></span>
            <span className="block w-6 h-[4px] bg-black mt-1 transition-transform duration-300"></span>
            <span className="block w-6 h-[4px] bg-black mt-1 transition-transform duration-300"></span>
          </button>
        ) : (
          <button
            className="md:hidden flex flex-col items-center justify-center w-8 h-8 mr-2"
            onClick={closeMenu}
          >
            <span className="block w-6 h-[4px] bg-black transition-transform duration-300 transform rotate-45 translate-y-[2px]"></span>
            <span className="block w-6 h-[4px] bg-black transition-transform duration-300 transform -rotate-45 -translate-y-[2px]"></span>
          </button>
        )}
        <div className="flex items-center justify-center md:justify-between gap-0 md:gap-3">
          <Link
            href="/"
            className="md:border-r-2 md:border-r-primary-500 md:pr-[36px]"
          >
            <Image src={upnvj} alt="logo" width={50} height={50} />
          </Link>
          <div className="md:block md:px-6 md:space-y-2 px-3 text-[14px] md:text-[20px] font-bold text-primary-500">
            <p>FAKULTAS ILMU KOMPUTER</p>
            <p>VETERAN JAKARTA</p>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <Links closeMenu={closeMenu} />
      </div>
      <div
        className={`absolute top-full left-[-15px] w-full bg-white z-10 shadow-lg rounded-b-md transition-all duration-500 ease-in-out transform ${
          isOpen ? "min-h-[450px] px-8 py-6" : "max-h-0 overflow-hidden"
        }`}
      >
        <Links closeMenu={closeMenu} />
      </div>
    </div>
  );
}

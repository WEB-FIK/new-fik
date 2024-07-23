"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Item {
  name: string;
  path: string;
  subLinks?: { name: string; path: string }[];
}

const NavLinks = ({ item }: { item: Item }) => {
  const pathName = usePathname();
  const isActive = pathName === item.path;
  const [isOpen, setIsOpen] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
    setIsLeaving(false);
  };

  const handleMouseLeave = () => {
    setIsLeaving(true);
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 300); // Adjust the delay as needed
  };

  return (
    <div
      className="relative inline-block space-y-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={item.path}
        className={`text-[18px] font-bold hover:text-primary-500 transition-all transform ease-in-out ${isActive && "text-primary-500"}`}
      >
        {item.name}
      </Link>
      {item.subLinks && isOpen && (
        <div
          className={`absolute left-0 mt-2 min-w-56 p-2 rounded-md bg-white border border-gray-300 shadow-lg z-10 ${
            isLeaving ? 'transition-opacity opacity-0' : 'transition-opacity opacity-100'
          }`}
          onMouseEnter={handleMouseEnter} // Ensure menu stays open when hovering over sublinks
          onMouseLeave={handleMouseLeave}
        >
          {item.subLinks.map((subLink) => (
            <Link
              key={subLink.name}
              href={subLink.path}
              className="block p-4  text-[18px] rounded-md font-semibold hover:bg-primary-500 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {subLink.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavLinks;

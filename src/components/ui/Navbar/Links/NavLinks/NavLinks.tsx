import React, { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SubLinks from "./SubLinks";
import { Item } from "../types";

const NavLinks: React.FC<{ item: Item }> = ({ item }) => {
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
    }, 300);
  };

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();  // Prevent default link click behavior
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className="relative inline-block space-y-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center">
        <Link
          href={item.path}
          className={`text-lg font-bold transition-colors duration-300 ${isActive ? 'text-primary-500' : 'text-black'} hover:text-primary-500`}
        >
          {item.name}
        </Link>
        {item.subLinks && (
          <button
            className="ml-2 hidden md:block text-lg"
            onClick={handleClick}
            aria-label={`Toggle ${item.name} sub-menu`}
          >
            {isOpen ? "▲" : "▼"}
          </button>
        )}
      </div>
      {item.subLinks && isOpen && (
        <SubLinks 
          subLinks={item.subLinks} 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave} 
          isLeaving={isLeaving} 
        />
      )}
    </div>
  );
};

export default NavLinks;

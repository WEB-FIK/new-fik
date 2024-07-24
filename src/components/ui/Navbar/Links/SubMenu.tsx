import React from "react";
import Link from "next/link";
import { SubLink } from "./types";

interface SubMenuProps {
  subLinks: SubLink[];
  onBackClick: () => void;
  closeMenu: () => void;
}

const SubMenu: React.FC<SubMenuProps> = ({ subLinks, onBackClick, closeMenu }) => {
  return (
    <div className={`flex flex-col transition-transform duration-500 ease-in-out transform`}>
      <button onClick={onBackClick} className="flex items-center font-bold text-left text-[48px]">
        {"<"}
      </button>
      {subLinks.map((subLink) => (
        <Link 
          key={subLink.name} 
          href={subLink.path} 
          className="text-[18px] font-bold hover:text-primary-500 transition-all transform ease-in-out py-2" 
          onClick={closeMenu}
        >
          {subLink.name}
        </Link>
      ))}
    </div>
  );
};

export default SubMenu;

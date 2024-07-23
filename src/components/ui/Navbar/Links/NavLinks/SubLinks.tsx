import React from "react";
import Link from "next/link";
import { SubLink } from "../types";

interface SubLinksProps {
  subLinks: SubLink[];
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  isLeaving: boolean;
}

const SubLinks: React.FC<SubLinksProps> = ({ subLinks, onMouseEnter, onMouseLeave, isLeaving }) => {
  return (
    <div
      className={`absolute left-0 mt-2 min-w-[224px] p-2 bg-white border border-gray-300 rounded-md shadow-lg z-10 transition-opacity duration-300 space-y-4 ${isLeaving ? 'opacity-0' : 'opacity-100'} md:block hidden`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {subLinks.map((subLink) => (
        <Link
          key={subLink.name}
          href={subLink.path}
          className="block p-3 text-lg font-semibold rounded-md hover:bg-primary-500 hover:text-white transition-colors duration-300"
        >
          {subLink.name}
        </Link>
      ))}
    </div>
  );
};

export default SubLinks;

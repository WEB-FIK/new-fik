"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./NavLinks.module.css";
import { usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";

interface item {
  name: string;
  path?: string;
  menu?: { name: string; path: string }[];
}

const NavLinks = ({ item }: { item: item }) => {
  const pathName = usePathname();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (event.target) {
        if (!(event.target as Element).closest(`.${styles.container}`)) {
          setShowDropdown(false);
        }
      }
    };
    const handleDocumentClick = (event: MouseEvent) => {
      handleClickOutside(event);
    };
    window.addEventListener("click", handleDocumentClick);
    return () => {
      window.removeEventListener("click", handleDocumentClick);
    };
  }, []);
  return (
    <div
      className={`${styles.container} px-4 md:px-[14px] relative items-center text-[18px] font-bold flex gap-2`}
      onMouseEnter={handleMouseEnter}
      onClick={() => {
        if (showDropdown) {
          setShowDropdown(false);
        } else {
          setShowDropdown(true);
        }
      }}
      onMouseLeave={handleMouseLeave}
    >
      {item.path ? (
        <Link
          href={item.path}
          className={`${styles.link} ${
            pathName === item.path && styles.active
          } text-base md:text-base font-bold hover:text-primary-500 transition-all transform ease-in-out`}
        >
          {item.name}
        </Link>
      ) : (
        <div className="flex gap-2 items-center md:w-auto w-full justify-between text-base md:text-sm">
          <span
            className="text-base hover:text-primary-500 transition-all transform ease-in-out"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {item.name}
          </span>
          <IoIosArrowDown />
          {showDropdown && (
            <div
              className="absolute top-0 "
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className=" bg-white shadow rounded-lg flex flex-col gap-3 p-4 mt-12">
                {item.menu &&
                  item.menu.map((v, i) => {
                    return (
                      <Link
                        key={i}
                        href={v.path}
                        className={`text-start ${
                          pathName === v.path && styles.active
                        } text-base block font-bold hover:bg-primary-500 hover:text-white p-4 rounded-lg text-nowrap transition-all transform ease-in-out`}
                      >
                        {v.name}
                      </Link>
                    );
                  })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NavLinks;

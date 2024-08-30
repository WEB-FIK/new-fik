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

const NavLinksMobile = ({
  item,
  value,
  setValue,
  index,
}: {
  item: item;
  value: number | null;
  index?: number;
  setValue: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  const pathName = usePathname();
  const [showDropdown, setShowDropdown] = useState(false);

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
      className={`${styles.container} px-8 md:px-[14px] relative   items-center text-[18px] font-bold flex gap-2`}
      onClick={() => {
        if (index && item.menu) {
          setValue(index);
        }
        // if (showDropdown) {
        //   setShowDropdown(false);
        // } else {
        //   setShowDropdown(true);
        // }
      }}
    >
      {item.path ? (
        <Link
          href={item.path}
          className={`${styles.link} ${
            pathName === item.path && styles.active
          } text-base md:text-[18px] font-bold hover:text-primary-500 transition-all transform ease-in-out`}
        >
          {item.name}
        </Link>
      ) : (
        <div className="flex gap-2 items-center md:w-auto w-full justify-between text-base md:text-[18px]">
          <span className="hover:text-primary-500 transition-all transform ease-in-out">
            {item.name}
          </span>
          <IoIosArrowDown />
          {showDropdown && (
            <div className="absolute top-0 ">
              <div className="bg-red-600 shadow rounded-lg flex flex-col gap-3 p-4 mt-12">
                {item.menu &&
                  item.menu.map((v, i) => {
                    return (
                      <Link
                        key={i}
                        href={v.path}
                        className={`text-start ${
                          pathName === v.path && styles.active
                        } text-[18px] block font-bold hover:bg-primary-500 hover:text-white p-2 rounded-lg text-nowrap transition-all transform ease-in-out`}
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

export default NavLinksMobile;

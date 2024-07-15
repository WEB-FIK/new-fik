"use client";

import React from "react";
import Link from "next/link";
import styles from "./NavLinks.module.css";
import { usePathname } from "next/navigation";

interface item {
  name: string;
  path: string;
}

const NavLinks = ({ item }: { item: item }) => {
  const pathName = usePathname();

  return (
    <Link
      href={item?.path}
      className={`${styles.container} ${
        pathName === item.path && styles.active
      } text-[18px] font-bold hover:text-primary-500 transition-all transform ease-in-out`}
    >
      {item.name}
    </Link>
  );
};

export default NavLinks;

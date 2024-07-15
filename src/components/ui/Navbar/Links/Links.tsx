"use client";

import { useState } from "react";
import Link from "next/link";
import NavLinks from "./NavLinks/NavLinks";
import styles from "./links.module.css";
import Image from "next/image";

const Links = () => {
  const [open, setOpen] = useState(false);

  const links = [
    {
      name: "Beranda",
      path: "/",
    },
    {
      name: "Tentang",
      path: "/tentang",
    },
    {
      name: "Manajemen",
      path: "/manajemen",
    },
    {
      name: "Staf Pengajar",
      path: "/staf-pengajar",
    },
    {
        name: "Program Studi",
        path: "/program-studi",
      },
      {
        name: "Laboratorium",
        path: "/laboratorium",
      },
  ];
  return (
    <div className="space-x-6">
        {links.map((link) => {
          return <NavLinks item={link} key={link.name} />
        })}  
    </div>
  );
};

export default Links;

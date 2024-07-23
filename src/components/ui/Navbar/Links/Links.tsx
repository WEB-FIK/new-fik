"use client";

import React, { useState } from "react";
import Link from "next/link";
import NavLinks from "./NavLinks/NavLinks";

interface SubLink {
  name: string;
  path: string;
}

interface LinkItem {
  name: string;
  path: string;
  subLinks?: SubLink[];
}

interface LinksProps {
  closeMenu: () => void;
}

const Links = ({ closeMenu }: { closeMenu: () => void }) => {
  const [currentMenu, setCurrentMenu] = useState("main");
  const [subLinks, setSubLinks] = useState<SubLink[]>([]);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const links: LinkItem[] = [
    {
      name: "Beranda",
      path: "/",
    },
    {
      name: "Tentang",
      path: "/tentang",
      subLinks: [
        { name: "Tentang FIK", path: "/tentang-fik" },
        { name: "Manajemen", path: "/manajemen" },
        { name: "Staf Pengajar", path: "/staf-pengajar" },
      ],
    },
    {
      name: "Akademik",
      path: "/akademik",
      subLinks: [
        { name: "Sarjana Informatika", path: "/akademik/sarjana-informatika" },
        { name: "Sarjana Sains Data", path: "/akademik/sarjana-sains-data" },
        { name: "Sarjana Sistem Informasi", path: "/akademik/sarjana-sistem-informasi" },
        { name: "Diploma Sistem Informasi", path: "/akademik/diploma-sistem-informasi" },
      ],
    },
    {
      name: "Kemahasiswaan",
      path: "/kemahasiswaan",
      subLinks: [
        { name: "Kehidupan Kampus", path: "/kemahasiswaan/kehidupan-kampus" },
        { name: "Prestasi Mahasiswa", path: "/kemahasiswaan/prestasi-mahasiswa" },
        { name: "Layanan Mahasiswa", path: "/kemahasiswaan/layanan-mahasiswa" },
        { name: "Beasiswa", path: "/kemahasiswaan/beasiswa" },
      ],
    },
    {
      name: "Penelitian",
      path: "/laboratorium",
      subLinks: [
        { name: "Laboratorium", path: "/laboratorium" },
      ]
    },
    {
      name: "Berita",
      path: "/berita",
    },
    {
      name: "Agenda",
      path: "/agenda",
    },
  ];

  const handleLinkClick = (link: LinkItem) => {
    if (link.subLinks) {
      setSubLinks(link.subLinks);
      setCurrentMenu(link.name);
      setIsSubMenuOpen(true);
    } else {
      closeMenu();
    }
  };

  const handleBackClick = () => {
    setIsSubMenuOpen(false);
    setTimeout(() => {
      setCurrentMenu("main");
      setSubLinks([]);
    }, 500);
  };

  return (
    <div className="flex flex-col space-y-8 space-x-0 md:flex-row md:space-x-16 md:space-y-0">
      {currentMenu === "main" ? (
        links.map((link) => (
          <div key={link.name} onClick={() => handleLinkClick(link)}>
            <NavLinks item={link} />
          </div>
        ))
      ) : (
        <div className={`flex flex-col transition-transform duration-500 ease-in-out transform ${isSubMenuOpen ? '-translate-x-0' : 'translate-x-full md:translate-x-0'}`}>
          <button onClick={handleBackClick} className="flex items-center font-bold text-left text-[48px]">
            {"<"}
          </button>
          {subLinks.map((subLink) => (
            <Link key={subLink.name} href={subLink.path} className="text-[18px] font-bold hover:text-primary-500 transition-all transform ease-in-out py-2" onClick={closeMenu}>
              {subLink.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;

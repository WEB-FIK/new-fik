"use client";

import React from "react";
import useMenuState from "../../../../hooks/useMenuState";
import MainMenu from "./MainMenu";
import SubMenu from "./SubMenu";
import { LinkItem } from "./types";

interface LinksProps {
  closeMenu: () => void;
}

const Links: React.FC<LinksProps> = ({ closeMenu }) => {
  const { currentMenu, subLinks, isSubMenuOpen, openSubMenu, closeSubMenu } = useMenuState();

  const links: LinkItem[] = [
    { name: "Beranda", path: "/" },
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
      path: "/penelitian",
      subLinks: [
        { name: "Laboratorium", path: "/laboratorium" },
      ]
    },
    { name: "Berita", path: "/berita" },
    { name: "Agenda", path: "/agenda" },
  ];

  const handleLinkClick = (link: LinkItem) => {
    if (link.subLinks) {
      openSubMenu(link.subLinks, link.name);
    } else {
      closeMenu();
    }
  };

  return (
    <div className="flex flex-col space-y-8 space-x-0 md:flex-row md:space-x-16 md:space-y-0">
      {currentMenu === "main" ? (
        <MainMenu links={links} onLinkClick={handleLinkClick} />
      ) : (
        <div className="md:hidden">
          <SubMenu subLinks={subLinks} onBackClick={closeSubMenu} closeMenu={closeMenu} />
        </div>
      )}
    </div>
  );
};

export default Links;

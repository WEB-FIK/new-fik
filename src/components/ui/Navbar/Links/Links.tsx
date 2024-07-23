"use client";

import Link from "next/link";
import NavLinks from "./NavLinks/NavLinks";

const Links = () => {
  const links = [
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
      path: "/penelitian",
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
  
  return (
    <div className="space-x-16">
        {links.map((link) => (
          <NavLinks item={link} key={link.name} />
        ))}  
    </div>
  );
};

export default Links;

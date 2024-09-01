"use client";

import { useState } from "react";
import Link from "next/link";
import NavLinks from "./NavLinks/NavLinks";

import Image from "next/image";
import NavLinksMobile from "./NavLinks/NavLinksMobile";
import { usePathname } from "next/navigation";

const Links = ({
  value,
  setValue,
}: {
  value: number | null;
  setValue: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();
  const links = [
    {
      name: "Beranda",
      path: "/",
    },
    {
      name: "Tentang",
      menu: [
        {
          name: "Tentang FIK",
          path: "/tentang-fik",
        },
        {
          name: "Manajemen",
          path: "/manajemen",
        },
        {
          name: "Staf Pengajar",
          path: "/staf-pengajar",
        },
      ],
    },
    {
      name: "Akademik",
      menu: [
        {
          name: "Sarjana Informatika",
          path: "/program-studi/sarjana-informatika",
        },
        {
          name: "Sarjana Sains Data",
          path: "/program-studi/sarjana-sains",
        },
        {
          name: "Sarjana Sistem Informasi",
          path: "/program-studi/sarjana-sistem-informasi",
        },
        {
          name: "Diploma Sistem Informasi",
          path: "/program-studi/diploma-sistem-informasi",
        },
      ],
    },
    {
      name: "Kemahasiswaan",
      menu: [
        {
          name: "Kehidupan Kampus",
          path: "/kehidupan-kampus",
        },
        {
          name: "Prestasi Mahasiswa",
          path: "/prestasi-mahasiswa",
        },
        {
          name: "Layanan Mahasiswa",
          path: "/layanan-mahasiswa",
        },
        {
          name: "Beasiswa",
          path: "/beasiswa",
        },
      ],
    },
    {
      name: "Penelitian",
      menu: [
        {
          name: "Laboratorium",
          path: "/laboratorium",
        },
      ],
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
    <>
      {/* for index set */}
      <div
        className={`${
          value === null && "hidden"
        }  gap-x-6 gap-y-4 py-4 md:!gap-4 !gap-8   flex md:flex-row flex-col flex-wrap`}
      >
        {links[value as number]?.menu?.map((v, i) => {
          return <NavLinks item={v} key={v.name} />;
        })}
      </div>
      {/* for index not set */}
      <div
        className={`${
          value !== null && "hidden"
        } gap-x-4 gap-y-4 py-4 md:!gap-4 !gap-8 flex md:flex-row flex-col flex-wrap`}
      >
        {links.map((link, index) => {
          return (
            <>
              <div className="block md:hidden">
                <NavLinksMobile
                  index={index}
                  value={value}
                  setValue={setValue}
                  item={link}
                  key={link.name}
                />
              </div>
              <div className="hidden md:block">
                <NavLinks item={link} key={link.name} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Links;

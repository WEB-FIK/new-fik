import Link from "next/link";
import React from "react";

const academicPrograms = [
  { label: "Sarjana Informatika", path: "/sarjana-informatika" },
  { label: "Sarjana Sains Data", path: "/sarjana-sains-data" },
  { label: "Sarjana Sistem Informasi", path: "/sarjana-sistem-informasi" },
  { label: "Diploma Sistem Informasi", path: "/diploma-sistem-informasi" },
];

const AcademicLinks = () => (
  <div className="w-full space-y-5 md:w-[287px]">
    <p className="font-bold text-[18px] border-b-4 pb-2 border-b-primary-500 md:text-[28px]">
      Akademik
    </p>
    <div className="flex flex-col space-y-5 font-normal">
      {academicPrograms.map((program, index) => (
        <Link href={program.path} key={index} className="text-[14px] md:text-[20px] hover:text-primary-500 transform transition-all duration-300">
          {program.label}
        </Link>
      ))}
    </div>
  </div>
);

export default AcademicLinks;

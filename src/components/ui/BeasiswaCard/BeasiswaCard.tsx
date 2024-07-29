import Image from "next/image";
import React from "react";
import KemendikbudIcon from "@/components/Icons/KemendikbudIcon";
import JakartaIcon from "@/components/Icons/JakartaIcon";
import BankIndonesiaIcon from "@/components/Icons/BankIndonesiaIcon";
import Link from "next/link";

const dataBeasiswa = [
  {
    image: <KemendikbudIcon />,
    title: "Kartu Indonesia Pintar Kuliah (KIP Kuliah)",
    description:
      "Beasiswa KIP Kuliah (Kartu Indonesia Pintar Kuliah) adalah program bantuan pendidikan dari pemerintah Indonesia yang ditujukan bagi mahasiswa yang berasal dari keluarga kurang mampu namun memiliki potensi akademik yang baik. Program ini memberikan bantuan biaya pendidikan dan biaya hidup selama masa studi di perguruan tinggi, baik negeri maupun swasta. Tujuannya adalah untuk memastikan akses pendidikan tinggi yang lebih merata dan meningkatkan kualitas sumber daya manusia Indonesia.",
      path: "/beasiswa/kartu-indonesia-pintar-kuliah",
  },
  {
    image: <JakartaIcon />,
    title: "Kartu Jakarta Mahasiswa Unggul (KJMU)",
    description:
      "Kartu Jakarta Mahasiswa Unggul (KJMU) adalah program beasiswa dari Pemerintah Provinsi DKI Jakarta yang ditujukan bagi mahasiswa berprestasi dari keluarga kurang mampu yang berdomisili di Jakarta. Program ini memberikan bantuan biaya pendidikan dan biaya penunjang pendidikan untuk mahasiswa yang sedang menempuh pendidikan di perguruan tinggi, baik negeri maupun swasta. KJMU bertujuan untuk meningkatkan akses pendidikan tinggi bagi warga Jakarta serta membantu mahasiswa mengatasi kendala finansial.",
      path: "/beasiswa/kartu-jakarta-mahasiswa-unggul",
  },
  {
    image: <BankIndonesiaIcon />,
    title: "Beasiswa Bank Indonesia (BI)",
    description:
      "Beasiswa Bank Indonesia adalah program bantuan pendidikan yang diberikan oleh Bank Indonesia kepada mahasiswa berprestasi di perguruan tinggi. Tujuannya adalah untuk mendukung peningkatan kualitas SDM Indonesia melalui pendidikan. Beasiswa ini mencakup bantuan dana pendidikan, pengembangan soft skills, dan pembinaan karakter. Selain bantuan finansial, penerima beasiswa juga mendapatkan kesempatan untuk mengikuti berbagai kegiatan pengembangan diri dan kepemimpinan yang diselenggarakan oleh Bank Indonesia. ",
      path: "/beasiswa/beasiswa-bank-indonesia",
  },
];
function BeasiswaCard() {

  function truncateText(text: string, wordLimit: number) {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  }


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {dataBeasiswa.map((beasiswa) => (
        <Link
            href={beasiswa.path}
          key={beasiswa.title}
          className="group w-full min-h-[350px] border rounded-[12px] p-5 space-y-3 hover:border hover:border-primary-500 transform transition-all hover:shadow-xl duration-500 ease-in-out md:space-y-6"
        >
          <div className="flex space-x-4 items-center">
            <div className="rounded-[12px]">{beasiswa.image}</div>
            <div className="text-[23px] font-bold">{beasiswa.title}</div>
          </div>

          <div>
            <p className="text-[14px] text-justify md:text-[18px]">{truncateText(beasiswa.description, 50)}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BeasiswaCard;

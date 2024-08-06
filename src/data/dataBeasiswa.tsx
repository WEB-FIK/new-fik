import KemendikbudIcon from "@/components/Icons/KemendikbudIcon";
import JakartaIcon from "@/components/Icons/JakartaIcon";
import BankIndonesiaIcon from "@/components/Icons/BankIndonesiaIcon";

export interface dataBeasiswaProps {
  id: number;
  image: JSX.Element;
  title: string;
  description: string;
  path: string;
}

export const dataBeasiswa: dataBeasiswaProps[] = [
  {
    id: 1,
    image: <KemendikbudIcon />,
    title: "Kartu Indonesia Pintar Kuliah (KIP Kuliah)",
    description:
      "Beasiswa KIP Kuliah (Kartu Indonesia Pintar Kuliah) adalah program bantuan pendidikan dari pemerintah Indonesia yang ditujukan bagi mahasiswa yang berasal dari keluarga kurang mampu namun memiliki potensi akademik yang baik. Program ini memberikan bantuan biaya pendidikan dan biaya hidup selama masa studi di perguruan tinggi, baik negeri maupun swasta. Tujuannya adalah untuk memastikan akses pendidikan tinggi yang lebih merata dan meningkatkan kualitas sumber daya manusia Indonesia.",
    path: "/beasiswa/kartu-indonesia-pintar-kuliah",
  },
  {
    id: 2,
    image: <JakartaIcon />,
    title: "Kartu Jakarta Mahasiswa Unggul (KJMU)",
    description:
      "Kartu Jakarta Mahasiswa Unggul (KJMU) adalah program beasiswa dari Pemerintah Provinsi DKI Jakarta yang ditujukan bagi mahasiswa berprestasi dari keluarga kurang mampu yang berdomisili di Jakarta. Program ini memberikan bantuan biaya pendidikan dan biaya penunjang pendidikan untuk mahasiswa yang sedang menempuh pendidikan di perguruan tinggi, baik negeri maupun swasta. KJMU bertujuan untuk meningkatkan akses pendidikan tinggi bagi warga Jakarta serta membantu mahasiswa mengatasi kendala finansial.",
    path: "/beasiswa/kartu-jakarta-mahasiswa-unggul",
  },
  {
    id: 3,
    image: <BankIndonesiaIcon />,
    title: "Beasiswa Bank Indonesia (BI)",
    description:
      "Beasiswa Bank Indonesia adalah program bantuan pendidikan yang diberikan oleh Bank Indonesia kepada mahasiswa berprestasi di perguruan tinggi. Tujuannya adalah untuk mendukung peningkatan kualitas SDM Indonesia melalui pendidikan. Beasiswa ini mencakup bantuan dana pendidikan, pengembangan soft skills, dan pembinaan karakter. Selain bantuan finansial, penerima beasiswa juga mendapatkan kesempatan untuk mengikuti berbagai kegiatan pengembangan diri dan kepemimpinan yang diselenggarakan oleh Bank Indonesia. ",
    path: "/beasiswa/beasiswa-bank-indonesia",
  },
];

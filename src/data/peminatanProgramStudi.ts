import ImacIcon from "@/components/Icons/ImacIcon";
import StudentsIcon from "@/components/Icons/StudentsIcon";

export interface PeminatanProgramStudi {
  id: number;
  icon: string;
  title: string;
  subtitle: string;
}

export const peminatanSarjanaSistemInformasi: PeminatanProgramStudi[] = [
  {
    id: 1,
    icon: "ImacIcon",
    title: "Pengembangan Aplikasi",
    subtitle:
      "Pengembang Aplikasi Mobile, Pengembang Aplikasi Web, Pengembang Aplikasi Berbasis Cloud, dsb.",
  },
  {
    id: 2,
    icon: "ImacIcon",
    title: "Analisis Data",
    subtitle:
      "Data Scientist, Data Analyst, Data Engineer, Business Intelligence (BI) Developer, Data Architect, Machine Learning Engineer, dsb.",
  },
  {
    id: 3,
    icon: "ImacIcon",
    title: "Audit Teknologi Informasi",
    subtitle:
      "Internal Auditor TI, Eksternal Auditor TI, Konsultan Keamanan TI, Peneliti Keamanan TI, Manajer Audit TI, Auditor Kepatuhan Regulasi, dsb.",
  },
];

export const peminatanSarjanaInformatika: PeminatanProgramStudi[] = [];

export const peminatanSarjanaSainsData: PeminatanProgramStudi[] = [];

export const peminatanDiplomaSistemInformasi: PeminatanProgramStudi[] = [
  {
    id: 1,
    icon: "StudentsIcon",
    title: "Data Mining",
    subtitle:
      "Data Scientist, Data Analyst, Data Engineer, Business Intelligence (BI) Developer, Data Architect, Machine Learning Engineer, dsb.",
  },
  {
    id: 2,
    icon: "ImacIcon",
    title: "Visualisasi Data",
    subtitle:
      "Data Scientist, Data Analyst, Data Engineer, Business Intelligence (BI) Developer, Data Architect, Machine Learning Engineer, dsb.",
  },
  {
    id: 3,
    icon: "ImacIcon",
    title: "Komunikasi Bisnis",
    subtitle:
      "Internal Auditor TI, Eksternal Auditor TI, Konsultan Keamanan TI, Peneliti Keamanan TI, Manajer Audit TI, Auditor Kepatuhan Regulasi, dsb.",
  },
  {
    id: 4,
    icon: "ImacIcon",
    title: "Pemrograman Web Lanjut",
    subtitle:
      "Pengembang Aplikasi Mobile, Pengembang Aplikasi Web, Pengembang Aplikasi Berbasis Cloud, dsb.",
  },
  {
    id: 5,
    icon: "ImacIcon",
    title: "Manajemen Kualitas Bisnis",
    subtitle:
      "Internal Auditor TI, Eksternal Auditor TI, Konsultan Keamanan TI, Peneliti Keamanan TI, Manajer Audit TI, Auditor Kepatuhan Regulasi, dsb.",
  },
];

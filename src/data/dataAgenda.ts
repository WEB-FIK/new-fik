import { StaticImageData } from "next/image";
import RektoratUPN from "../../public/images/RektoratUPN.webp";

interface agendaItemProps {
  imageSrc: StaticImageData;
  AgendaDate: string;
  AgendaMonth: string;
  AgendaTitle: string;
  AgendaHour: string;
  AgendaLocation: string;
  slug: string;
}

export const agendaItems: agendaItemProps[] = [
  {
    imageSrc: RektoratUPN,
    AgendaDate: "25",
    AgendaMonth: "Feb",
    AgendaTitle:
      "Seminar Nasional Mahasiswa Bidang Ilmu Komputer dan Aplikasinya (SENAMIKA) – 7",
    AgendaHour: "10:00 WIB - 16:00 WIB",
    AgendaLocation: "Auditorium Bhineka Tunggal Ika UPN “Veteran” Jakarta",
    slug: "seminar-nasional-senamika-7",
  },
  {
    imageSrc: RektoratUPN,
    AgendaDate: "25",
    AgendaMonth: "Feb",
    AgendaTitle:
      "Seminar Nasional Mahasiswa Bidang Ilmu Komputer dan Aplikasinya (SENAMIKA) – 7",
    AgendaHour: "10:00 WIB - 16:00 WIB",
    AgendaLocation: "Auditorium Bhineka Tunggal Ika UPN “Veteran” Jakarta",
    slug: "seminar-nasional-senamika-7",
  },
  {
    imageSrc: RektoratUPN,
    AgendaDate: "25",
    AgendaMonth: "Feb",
    AgendaTitle:
      "Seminar Nasional Mahasiswa Bidang Ilmu Komputer dan Aplikasinya (SENAMIKA) – 7",
    AgendaHour: "10:00 WIB - 16:00 WIB",
    AgendaLocation: "Auditorium Bhineka Tunggal Ika UPN “Veteran” Jakarta",
    slug: "seminar-nasional-senamika-7",
  },
  {
    imageSrc: RektoratUPN,
    AgendaDate: "25",
    AgendaMonth: "Feb",
    AgendaTitle:
      "Seminar Nasional Mahasiswa Bidang Ilmu Komputer dan Aplikasinya (SENAMIKA) – 7",
    AgendaHour: "10:00 WIB - 16:00 WIB",
    AgendaLocation: "Auditorium Bhineka Tunggal Ika UPN “Veteran” Jakarta",
    slug: "seminar-nasional-senamika-7",
  },
  {
    imageSrc: RektoratUPN,
    AgendaDate: "25",
    AgendaMonth: "Feb",
    AgendaTitle:
      "Seminar Nasional Mahasiswa Bidang Ilmu Komputer dan Aplikasinya (SENAMIKA) – 7",
    AgendaHour: "10:00 WIB - 16:00 WIB",
    AgendaLocation: "Auditorium Bhineka Tunggal Ika UPN “Veteran” Jakarta",
    slug: "seminar-nasional-senamika-7",
  },
];

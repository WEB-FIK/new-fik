import { StaticImageData } from "next/image";
import RektoratUPN from "../../public/images/RektoratUPN.webp";

interface agendaItemProps {
  imageSrc: StaticImageData;
  AgendaDate: string;
  AgendaMonth: string;
  AgendaTitle: string;
  AgendaHour: string;
  AgendaLocation: string;
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
  },
  {
    imageSrc: RektoratUPN,
    AgendaDate: "25",
    AgendaMonth: "Feb",
    AgendaTitle:
      "Seminar Nasional Mahasiswa Bidang Ilmu Komputer dan Aplikasinya (SENAMIKA) – 7",
    AgendaHour: "10:00 WIB - 16:00 WIB",
    AgendaLocation: "Auditorium Bhineka Tunggal Ika UPN “Veteran” Jakarta",
  },
  {
    imageSrc: RektoratUPN,
    AgendaDate: "25",
    AgendaMonth: "Feb",
    AgendaTitle:
      "Seminar Nasional Mahasiswa Bidang Ilmu Komputer dan Aplikasinya (SENAMIKA) – 7",
    AgendaHour: "10:00 WIB - 16:00 WIB",
    AgendaLocation: "Auditorium Bhineka Tunggal Ika UPN “Veteran” Jakarta",
  },
  {
    imageSrc: RektoratUPN,
    AgendaDate: "25",
    AgendaMonth: "Feb",
    AgendaTitle:
      "Seminar Nasional Mahasiswa Bidang Ilmu Komputer dan Aplikasinya (SENAMIKA) – 7",
    AgendaHour: "10:00 WIB - 16:00 WIB",
    AgendaLocation: "Auditorium Bhineka Tunggal Ika UPN “Veteran” Jakarta",
  },
  {
    imageSrc: RektoratUPN,
    AgendaDate: "25",
    AgendaMonth: "Feb",
    AgendaTitle:
      "Seminar Nasional Mahasiswa Bidang Ilmu Komputer dan Aplikasinya (SENAMIKA) – 7",
    AgendaHour: "10:00 WIB - 16:00 WIB",
    AgendaLocation: "Auditorium Bhineka Tunggal Ika UPN “Veteran” Jakarta",
  },
];

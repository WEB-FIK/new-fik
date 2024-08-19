import Dekan from "../../public/images/Dekan.webp";
import WadekAkademik from "../../public/images/WadekAkademik.webp";
import WadekKeuangan from "../../public/images/WadekKeuangan.webp";
import WadekKemahasiswaan from "../../public/images/WadekKemahasiswaan.webp";
import KepalaLabCyber from "../../public/images/KepalaLabCyber.webp";
import KepalaLabDatabase from "../../public/images/KepalaLabDatabase.webp";
import KepalaLabDataScience from "../../public/images/KepalaLabDataScience.webp";
import KepalaLabMultimedia from "../../public/images/KepalaLabMultimedia.webp";
import KoordinatorTU from "../../public/images/KoordinatorTU.webp";
import KaprodiS1Sisfor from "../../public/images/KaprodiS1Sisfor.webp";
import KaprodiD3Sisfor from "../../public/images/KaprodiD3Sisfor.webp";
import KaprodiS1Informatika from "../../public/images/KaprodiS1Informatika.webp";
import { StaticImageData } from "next/image";

export interface manajemenDetail {
  image: StaticImageData;
  name: string;
  position: string;
  role: string;
  profileRoute?: string;
  lhkpnRoute?: string;
  linkLHKPN?: string;
}

export const dekanatDetails: manajemenDetail[] = [
  {
    image: Dekan,
    name: "Prof. Dr. Ir. Supriyanto, M.Sc., IPM.",
    position: "Dekan",
    role: "Dekanat",
    profileRoute: "/manajemen/profile/supriyanto",
    lhkpnRoute: "/manajemen/LHKPN/supriyanto",
    linkLHKPN:
      "https://drive.google.com/file/d/13JqFUD3q3T_jDgfYHvKNbEIsbeFwB3u1/view",
  },
  {
    image: WadekAkademik,
    name: "Erly Krisnanik, S.Kom.,MM",
    position: "Wakil Dekan Bidang Akademik",
    role: "Dekanat",
    profileRoute: "/manajemen/profile/erly-krisnanik",
    lhkpnRoute: "/manajemen/LHKPN/erly-krisnanik",
    linkLHKPN:
      "https://drive.google.com/file/d/1suxmjkfpBZe8Of6jWl3T8nk8_nDS9Dvm/view?usp=sharing",
  },
  {
    image: WadekKeuangan,
    name: "Dr. Bambang Saras Yulistiawan, S.T.",
    position: "Wakil Dekan Bidang Umum dan Keuangan",
    role: "Dekanat",
    profileRoute: "/manajemen/profile/bambang-saras-yulistiawan",
    lhkpnRoute: "/manajemen/LHKPN/bambang-saras-yulistiawan",
    linkLHKPN:
      "https://drive.google.com/file/d/1lgLB81KOtmndAbfhQrQKS74ECjccjCeO/view?usp=sharing",
  },
  {
    image: WadekKemahasiswaan,
    name: "Ati Zaidiah, S.Kom, MTI.",
    position: "Wakil Dekan Bidang Kemahasiswaan dan Kerja Sama",
    role: "Dekanat",
    profileRoute: "/manajemen/profile/ati-zaidiah",
    lhkpnRoute: "/manajemen/LHKPN/ati-zaidiah",
    linkLHKPN:
      "https://drive.google.com/file/d/13YzYHIL2H21xzhlOm4J1rznfXIWWuH_f/view?usp=sharing",
  },
];

export const kaprodiDetails: manajemenDetail[] = [
  {
    image: KaprodiS1Sisfor,
    name: "Anita Muliawati, S.Kom. M.TI",
    position: "Ketua Jurusan merangkap Kaprodi S1 Sistem Informasi",
    role: "Kaprodi",
    profileRoute: "/manajemen/profile/anita-muliawati",
  },
  {
    image: KaprodiD3Sisfor,
    name: "Rio Wirawan, S.Kom., MMSI.",
    position: "Kaprodi D3 Sistem Informasi",
    role: "Kaprodi",
    profileRoute: "/manajemen/profile/rio-wirawan",
  },
  {
    image: KaprodiS1Informatika,
    name: "Dr. Widya Cholil, M.I.T",
    position: "Kaprodi S1 Informatika",
    role: "Kaprodi",
    profileRoute: "/manajemen/profile/widya-cholil",
  },
];

export const koorTUDetails: manajemenDetail[] = [
  {
    image: KoordinatorTU,
    name: "Saimin, S.Kom",
    position: "Koordinator Tata Usaha",
    role: "Tata Usaha",
    profileRoute: "/manajemen/profile/saimin",
  },
];

export const kepalaLabDetails: manajemenDetail[] = [
  {
    image: KepalaLabCyber,
    name: "Hamonangan Kinantan P., S.T, MT",
    position: "Kalab. Keamanan Siber, Jaringan, Dan Internet Of Things",
    role: "Kepala Lab",
    profileRoute: "/manajemen/profile/hamonangan-kinantan",
  },
  {
    image: KepalaLabDatabase,
    name: "Muhammad Adrezo, S.Kom.,M.Sc",
    position: "Kalab. Rekayasa Perangkat Lunak, Pemrograman, dan Basis Data",
    role: "Kepala Lab",
    profileRoute: "/manajemen/profile/muhammad-adrezo",
  },
  {
    image: KepalaLabDataScience,
    name: "Dr. Tjahjanto, S.Kom., M.M.",
    position: "Kalab. Data Science dan Data Mining",
    role: "Kepala Lab",
    profileRoute: "/manajemen/profile/tjahjanto",
  },
  {
    image: KepalaLabMultimedia,
    name: "I Wayan Widi Pradnyana, M.TI",
    position: "Kalab. Pengembangan Sistem dan Multimedia",
    role: "KaLab",
    profileRoute: "/manajemen/profile/i-wayan-widi-pradnyana",
  },
];

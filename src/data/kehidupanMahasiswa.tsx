import { StaticImageData } from "next/image";
import BemFIKUPNVJ from "../../public/images/BemFIKUPNVJ.png";
import SenatFIK from "../../public/images/SenatFIK.png";
import HimaIF from "../../public/images/HimaIF.png";
import HimaD3SI from "../../public/images/HimaD3SI.png";
import HimaS1SI from "../../public/images/HimaS1SI.png";
import KSMCyber from "../../public/images/KSMCyber.png";
import KSMAndroid from "../../public/images/KSMAndroid.png";
import KSMMultimedia from "../../public/images/KSMMultimedia.png";
import KSMRobotika from "../../public/images/KSMRobotika.png";
import KSMIArRisalah from "../../public/images/KSMIArRisalah.png";
import FikFair from "../../public/images/FikFair.png";
import Slashcom from "../../public/images/Slashcom.png";
import PemiraFIK from "../../public/images/PemiraFIK.png";
import FKBMIK from "../../public/images/FKBMIK.png";

export interface KehidupanMahasiswaCardProps {
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
  linkTitle: string;
}

export const dataOrganisasiMahasiswa: KehidupanMahasiswaCardProps[] = [
  {
    title: "Badan Eksekutif Mahasiswa",
    description:
      "Badan Eksekutif Mahasiswa (BEM) Fakultas Ilmu Komputer Universitas Pembangunan Nasional Veteran Jakarta (FIK UPNVJ) adalah organisasi kemahasiswaan di tingkat fakultas yang bertugas menjalankan peran eksekutif di lingkungan FIK UPNVJ. BEM FIK UPNVJ berperan penting dalam mengkoordinasikan berbagai kegiatan mahasiswa, menyuarakan aspirasi mahasiswa, dan mendorong pengembangan bakat serta minat di bidang ilmu komputer.",
    image: BemFIKUPNVJ,
    link: "https://www.instagram.com/bemfikupnvj/",
    linkTitle: "bemfikupnvj",
  },
  {
    title: "SENAT Mahasiswa FIK",
    description:
      "Senat BEM Fakultas Ilmu Komputer Universitas Pembangunan Nasional Veteran Jakarta (UPNVJ) adalah bagian dari Badan Eksekutif Mahasiswa yang memiliki fungsi legislatif di tingkat fakultas. Senat BEM bertugas menyusun, mengawasi, dan mengevaluasi kebijakan-kebijakan yang diambil oleh BEM FIK UPNVJ. Selain itu, Senat juga berperan dalam menampung dan menyuarakan aspirasi mahasiswa.",
    image: SenatFIK,
    link: "https://www.instagram.com/senatfikupnvj",
    linkTitle: "senatfikupnvj",
  },
  {
    title: "HIMA S1 Informatika",
    description:
      "Himpunan Mahasiswa (HIMA) S1 Informatika Fakultas Ilmu Komputer Universitas Pembangunan Nasional Veteran Jakarta (UPNVJ) adalah organisasi mahasiswa yang menaungi mahasiswa program studi S1 Informatika. HIMA S1 Informatika berfungsi sebagai wadah bagi mahasiswa untuk mengembangkan potensi akademis, keterampilan teknis, dan kemampuan soft skills.",
    image: HimaIF,
    link: "https://www.instagram.com/hmif_upnvj",
    linkTitle: "hmif_upnvj",
  },
  {
    title: "HIMA S1 Sistem Informasi",
    description:
      "Badan Eksekutif Mahasiswa (BEM) Fakultas Ilmu Komputer Universitas Pembangunan Nasional Veteran Jakarta (FIK UPNVJ) adalah organisasi kemahasiswaan di tingkat fakultas yang bertugas menjalankan peran eksekutif di lingkungan FIK UPNVJ. BEM FIK UPNVJ berperan penting dalam mengkoordinasikan berbagai kegiatan mahasiswa, menyuarakan aspirasi mahasiswa, dan mendorong pengembangan bakat serta minat di bidang ilmu komputer. ",
    image: HimaS1SI,
    link: "https://www.instagram.com/himas1siupnvj",
    linkTitle: "himas1siupnvj",
  },
  {
    title: "HIMA D3 Sistem Informasi",
    description:
      "Badan Eksekutif Mahasiswa (BEM) Fakultas Ilmu Komputer Universitas Pembangunan Nasional Veteran Jakarta (FIK UPNVJ) adalah organisasi kemahasiswaan di tingkat fakultas yang bertugas menjalankan peran eksekutif di lingkungan FIK UPNVJ. BEM FIK UPNVJ berperan penting dalam mengkoordinasikan berbagai kegiatan mahasiswa, menyuarakan aspirasi mahasiswa, dan mendorong pengembangan bakat serta minat di bidang ilmu komputer. ",
    image: HimaD3SI,
    link: "https://www.instagram.com/himad3si_upnvj",
    linkTitle: "himad3si_upnvj",
  },
  {
    title: "KSM Robotika",
    description:
      "KSM Robotika Fakultas Ilmu Komputer UPNVJ adalah kelompok studi mahasiswa yang fokus pada pengembangan dan eksplorasi teknologi robotika. Mereka aktif dalam mendalami konsep-konsep teori dan aplikasi praktis dalam bidang robotika, seperti desain robot, pemrograman, dan pengembangan sistem kontrol. ",
    image: KSMRobotika,
    link: "https://www.instagram.com/robotikaupnvj/",
    linkTitle: "robotikaupnvj",
  },
  {
    title: "KSM Android",
    description:
      "KSM Android Fakultas Ilmu Komputer UPNVJ adalah kelompok studi dan organisasi yang didedikasikan untuk mahasiswa jurusan ilmu komputer di UPNVJ. Kelompok ini menyediakan platform bagi para anggotanya untuk mempelajari pengembangan Android, pengembangan web, desain UI/UX, dan manajemen proyek. Mereka aktif mengadakan pertemuan rutin, workshop, serta kegiatan pembelajaran lainnya untuk meningkatkan keterampilan teknis dan profesionalisme anggotanya dalam bidang-bidang tersebut",
    image: KSMAndroid,
    link: "https://www.instagram.com/androidupnvj/",
    linkTitle: "androidupnvj",
  },
  {
    title: "KSM Cyber",
    description:
      "KSM Cyber adalah singkatan dari Kelompok Studi Mahasiswa Cyber di Fakultas Ilmu Komputer UPNVJ. Kelompok ini bertujuan untuk memperdalam pemahaman mahasiswa terhadap isu-isu keamanan cyber, teknologi informasi, dan kecerdasan buatan. Anggota KSM Cyber aktif dalam diskusi, penelitian, dan pelatihan untuk meningkatkan keterampilan teknis dan keahlian dalam bidang keamanan digital. ",
    image: KSMCyber,
    link: "https://www.instagram.com/cyberupnvj/",
    linkTitle: "cyberupnvj",
  },
  {
    title: "KSM Multimedia",
    description:
      "KSM Multimedia merupakan singkatan dari Kelompok Studi Mahasiswa Multimedia di Fakultas Ilmu Komputer UPNVJ. Kelompok ini didedikasikan untuk memperluas pengetahuan dan keterampilan mahasiswa dalam bidang multimedia, yang meliputi desain grafis, dan produksi multimedia lainnya. Anggota KSM Multimedia aktif dalam mengadakan workshop, seminar, dan proyek kolaboratif untuk mengembangkan kreativitas dan keahlian di bidang multimedia.",
    image: KSMMultimedia,
    link: "https://www.instagram.com/multimediaupnvj/",
    linkTitle: "multimediaupnvj",
  },
  {
    title: "KSM Rohis Ar Risalah",
    description:
      "Kelompok Studi Mahasiswa Islam Ar-Risalah (Rohis FIK UPNVJ) merupakan organisasi mahasiswa di Fakultas Ilmu Komputer Universitas Pembangunan Nasional Veteran Jakarta (UPNVJ) yang didedikasikan untuk memperkuat dan mengembangkan pemahaman serta praktik keagamaan dalam lingkungan akademis. Rohis FIK UPNVJ juga berperan sebagai wadah untuk membangun solidaritas dan mempererat hubungan antar-mahasiswa yang beragama Islam.",
    image: KSMIArRisalah,
    link: "https://www.instagram.com/ksmi_arrisalah/",
    linkTitle: "ksmi_arrisalah",
  },
];

export const dataKepanitiaanMahasisiwa: KehidupanMahasiswaCardProps[] = [
  {
    title: "FIK FAIR (Fakultas Ilmu Komputer Fair)",
    description:
      "FIK FAIR adalah acara tahunan yang diselenggarakan oleh Fakultas Ilmu Komputer Universitas Pembangunan Nasional Veteran Jakarta (UPNVJ). Acara ini mencakup berbagai perlombaan yang dirancang untuk menguji kemampuan akademik dan non-akademik para peserta. FIK FAIR  bertujuan untuk mendorong semangat kompetisi yang sehat, mengembangkan keterampilan peserta, dan mempererat hubungan antar mahasiswa di lingkungan fakultas.",
    image: FikFair,
    link: "https://www.instagram.com/fik.fair/",
    linkTitle: "fik.fair",
  },
  {
    title: "Festival Keluarga Besar Mahasiswa Ilmu Komputer",
    description:
      "Festival Keluarga Besar Mahasiswa Ilmu Komputer atau disingkat FKBM-IK merupakan kegiatan kolaborasi yang diselenggarakan oleh tiga organisasi mahasiswa UPN “Veteran” se-Indonesia. Kegiatan ini merupakan kegiatan tahunan yang diselenggarakan secara rutin dan memiliki tuan rumah yang berganti secara bergiliran.",
    image: FKBMIK,
    link: "https://www.instagram.com/fkbmik_upn/",
    linkTitle: "fkbmik_upn",
  },
  {
    title: "Pemira FIK UPNVJ",
    description:
      "PEMIRA (Pemilihan Raya) Fakultas Ilmu Komputer Universitas Pembangunan Nasional Veteran Jakarta (FIK UPNVJ) adalah sebuah tim yang dibentuk untuk mengorganisir dan menyelenggarakan pemilihan umum di lingkungan fakultas. Tujuan utama kepanitiaan ini adalah untuk memastikan proses pemilihan berlangsung secara adil, transparan, dan demokratis, sehingga mahasiswa dapat memilih perwakilan mereka di Badan Eksekutif Mahasiswa (BEM) dan lembaga kemahasiswaan lainnya. ",
    image: PemiraFIK,
    link: "https://www.instagram.com/pemirafikupnvj/",
    linkTitle: "pemirafikupnvj",
  },
  {
    title: "SLASH NATIONAL COMPETITION",
    description:
      "SLASH NATIONAL COMPETITION adalah sebuah ajang perlombaan nasional yang ditujukan khusus untuk bidang komputer dan teknologi, dengan tujuan mengasah kemampuan dan kreativitas para peserta di bidang tersebut. Kepanitiaan ini terdiri dari mahasiswa FIK UPNVJ yang berdedikasi dalam merancang, mengorganisir, dan menjalankan berbagai kompetisi, seperti hackathon, lomba pemrograman, desain aplikasi, dan inovasi teknologi.",
    image: Slashcom,
    link: "https://www.instagram.com/slashcom2024/",
    linkTitle: "slashcom2024",
  },
];

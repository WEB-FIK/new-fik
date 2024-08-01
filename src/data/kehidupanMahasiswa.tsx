import { StaticImageData } from "next/image";
import BemFIKUPNVJ from "../../public/images/BemFIKUPNVJ.png";
import SenatFIK from "../../public/images/SenatFIK.png";
import HimaIF from "../../public/images/HimaIF.png";
import HimaD3SI from "../../public/images/HimaD3SI.png";
import HimaS1SI from "../../public/images/HimaS1SI.png";
import KSMCyber from "../../public/images/KSMCyber.png";
import KSMAndroid from "../../public/images/KSMAndroid.png";
import KSMMultimedia from "../../public/images/KSMMultimedia.png";
import KSMrobotika from "../../public/images/KSMrobotika.png";
import KSMIArRisalah from "../../public/images/KSMIArRisalah.png";

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
    title: "HIMA D3 Sistem Informasi",
    description:
      "Badan Eksekutif Mahasiswa (BEM) Fakultas Ilmu Komputer Universitas Pembangunan Nasional Veteran Jakarta (FIK UPNVJ) adalah organisasi kemahasiswaan di tingkat fakultas yang bertugas menjalankan peran eksekutif di lingkungan FIK UPNVJ. BEM FIK UPNVJ berperan penting dalam mengkoordinasikan berbagai kegiatan mahasiswa, menyuarakan aspirasi mahasiswa, dan mendorong pengembangan bakat serta minat di bidang ilmu komputer. ",
    image: HimaD3SI,
    link: "https://www.instagram.com/himad3si_upnvj",
    linkTitle: "himad3si_upnvj",
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

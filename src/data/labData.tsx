import SekretariatLaboratoriumImage from "../../public/images/SekretariatLaboratorium.webp"
import ProgrammingLabImage from "../../public/images/ProgrammingLabImage.png";
import CyberSecurityLabImage from "../../public/images/CyberSecurityLabImage.png";
import ArtificialIntelligenceLabImage from "../../public/images/ArtificialIntelligenceLabImage.png";
import BusinessIntelligenceLabImage from "../../public/images/BusinessIntelligenceLabImage.png";
import DatabaseLabImage from "../../public/images/DatabaseLabImage.png";
import IOTLabImage from "../../public/images/IOTLabImage.png";
import DataMiningLabImage from "../../public/images/DataMiningLabImage.png";
import { StaticImageData } from "next/image";

export interface LabDetail {
    image: StaticImageData;
    LabName: string;
    LabHead: string;
    LabLocation: string;
    LabDesc: string;
    LabFunctions: string[];
  }
  
export const labDetails = [
  {
    image: SekretariatLaboratoriumImage,
    LabName: "Sekretariat Laboratorium",
    LabHead: "I Wayan Widi Pradnyana, M.TI",
    LabLocation: "Gedung Ki Hadjar Dewantara Lantai 3",
    LabDesc:
      "Ruangan Sekretariat Laboratorium yang terletak di Gedung Ki Hadjar Dewantara Lantai 3, berfungsi sebagai pusat administrasi dan koordinasi kegiatan laboratorium.",
    LabFunctions: [
      "Administration and Management",
      "Coordination of Laboratory Activities",
      "Service and Technical Support",
      "Development and Research",
    ],
  },
  {
    image: ProgrammingLabImage,
    LabName: "Lab Programming",
    LabHead: "I Wayan Widi Pradnyana, M.TI",
    LabLocation: "Gedung Ki Hadjar Dewantara Lantai 3",
    LabDesc:
      "Pusat praktikum dan penelitian di bidang pemrograman komputer, dilengkapi dengan komputer terbaru, jaringan internet berkecepatan tinggi, proyektor, dan papan tulis digital untuk mendukung proses belajar mengajar.",
    LabFunctions: [
      "Software and Application Development",
      "Technical Support and Troubleshooting",
      "Operating Systems",
      "Development and Research",
    ],
  },
  {
    image: CyberSecurityLabImage,
    LabName: "Lab Cybersecurity",
    LabHead: "I Wayan Widi Pradnyana, M.TI",
    LabLocation: "Gedung Ki Hadjar Dewantara Lantai 3",
    LabDesc:
      "Pusat kegiatan praktikum dan penelitian di bidang keamanan siber, dilengkapi dengan perangkat keras canggih, perangkat lunak keamanan terkini, serta jaringan simulasi serangan siber.",
    LabFunctions: [
      "Network Security",
      "Ethical Hacking",
      "Cyber Defense Strategies",
      "Incident Response and Management",
    ],
  },
  {
    image: ArtificialIntelligenceLabImage,
    LabName: "Lab Artificial Intelligence",
    LabHead: "Hamonangan Kinantan P., S.T, MT",
    LabLocation: "Gedung Ki Hadjar Dewantara Lantai 3",
    LabDesc:
      "Pusat praktikum dan penelitian dalam bidang kecerdasan buatan, dilengkapi dengan komputer berperforma tinggi, perangkat lunak AI terbaru, serta fasilitas pengolahan data besar (big data) dan machine learning.",
    LabFunctions: [
      "AI Ethics and Bias",
      "Machine Learning Algorithms",
      "Robotics and Autonomous Systems",
      "AI Applications",
    ],
  },
  {
    image: BusinessIntelligenceLabImage,
    LabName: "Lab Business Intelligence",
    LabHead: "I Wayan Widi Pradnyana, M.TI",
    LabLocation: "Gedung Ki Hadjar Dewantara Lantai 3",
    LabDesc:
      "Pusat praktikum dan penelitian dalam bidang intelijen bisnis, dilengkapi dengan komputer berperforma tinggi, perangkat lunak analitik terkini, dan platform visualisasi data untuk mendukung pengambilan keputusan bisnis.",
    LabFunctions: [
      "Ethical Considerations in BI",
      "Market Intelligence",
      "Real-time Analytics",
      "Business Process Optimization",
    ],
  },
  {
    image: DatabaseLabImage,
    LabName: "Lab Database",
    LabHead: "Muhammad Adrezo, S.Kom.,M.Sc",
    LabLocation: "Gedung Ki Hadjar Dewantara Lantai 3",
    LabDesc:
      "Pusat praktikum dan penelitian dalam bidang manajemen basis data, dilengkapi dengan komputer berperforma tinggi, perangkat lunak database terkini seperti SQL Server, Oracle, dan MySQL, serta fasilitas untuk pengolahan data besar.",
    LabFunctions: [
      "Performance Tuning and Optimization",
      "Data Integration and ETL",
      "Cloud Databases",
      "Backup and Recovery",
    ],
  },
  {
    image: DataMiningLabImage,
    LabName: "Lab Data Mining dan Data Science",
    LabHead: " Dr. Tjahjanto, S.Kom., M.M",
    LabLocation: "Gedung Ki Hadjar Dewantara Lantai 3",
    LabDesc:
      "Pusat kegiatan praktikum dan penelitian dalam bidang penambangan data dan ilmu data, dilengkapi dengan komputer berkinerja tinggi, perangkat lunak analisis data terkini, dan fasilitas big data.",
    LabFunctions: [
      "Data Warehousing and ETL",
      "Big Data Technologies",
      "Data Visualization",
      "Statistical Analysis",
    ],
  },
  {
    image: IOTLabImage,
    LabName: "Lab Internet of Things",
    LabHead: "Hamonangan Kinantan P., S.T, MT",
    LabLocation: "Gedung Ki Hadjar Dewantara Lantai 3",
    LabDesc:
      "Pusat kegiatan praktikum dan penelitian dalam bidang teknologi IoT, dilengkapi dengan perangkat keras canggih seperti sensor, mikrokontroler, dan modul komunikasi nirkabel, serta perangkat lunak pengembangan IoT terkini.",
    LabFunctions: [
      "Embedded Systems Development",
      "IoT Prototyping and Development",
      "IoT Standards and Interoperability",
      "Ethical and Regulatory Considerations",
    ],
  },
];
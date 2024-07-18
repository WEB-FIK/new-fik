"use client";

import React from "react";
import ListLaboratoriumCard from "@/components/ui/ListLaboratoriumCard/ListLaboratoriumCard";
import SekretariatLaboratoriumImage from "../../../../public/images/SekretariatLaboratorium.webp";
import ProgrammingLabImage from "../../../../public/images/ProgrammingLabImage.png";
import CyberSecurityLabImage from "../../../../public/images/CyberSecurityLabImage.png";
import ArtificialIntelligenceLabImage from "../../../../public/images/ArtificialIntelligenceLabImage.png";
import BusinessIntelligenceLabImage from "../../../../public/images/BusinessIntelligenceLabImage.png";
import DatabaseLabImage from "../../../../public/images/DatabaseLabImage.png";
import IOTLabImage from "../../../../public/images/IOTLabImage.png";
import DataMiningLabImage from "../../../../public/images/DataMiningLabImage.png";

import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

function ListLaboratorium() {
  useEffect(() => {
    AOS.init();
  }, []);
  const sekretariatLabDetails = {
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
    ]
  };

  const programmingLabDetails = {
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
    ]
  };

  const CyberSecurityLabDetails = {
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
    ]
  };

  const artificialIntelligenceLabDetails = {
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
    ]
  };

  const businessIntelligenceLabDetails = {
    image: BusinessIntelligenceLabImage,
    LabName: "Lab Bussiness Intelligence",
    LabHead: "I Wayan Widi Pradnyana, M.TI",
    LabLocation: "Gedung Ki Hadjar Dewantara Lantai 3",
    LabDesc:
      "Pusat praktikum dan penelitian dalam bidang intelijen bisnis, dilengkapi dengan komputer berperforma tinggi, perangkat lunak analitik terkini, dan platform visualisasi data untuk mendukung pengambilan keputusan bisnis.",
    LabFunctions: [
      "Ethical Considerations in BI",
      "Market Intelligence",
      "Real-time Analytics",
      "Business Process Optimization",
    ]
  };

  const databaseLabDetails = {
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
    ]
  };

  const dataMiningLabDetails = {
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
    ]
  };

  const IOTLabDetails = {
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
    ]
  };

  return (
    <section className="w-full px-4 py-8 flex flex-col justify-center space-y-5 md:px-[100px]">
      <div
        className="flex flex-row-reverse items-center justify-between space-x-1"
        data-aos="fade-down"
      >
        <p className="w-[70%] text-[24px] font-extrabold text-right md:text-[48px]">
          Daftar Laboratorium Komputer
        </p>
        <hr className="w-[20%] border-primary-500 rounded-xl border-[3px] md:min-w-[50%]" />
      </div>
      <div>
        <p
          className="text-primary-500 text-[16px] pb-5 text-right font-semibold md:text-[24px]"
          data-aos="fade-down"
        >
          Ruangan Laboratorium Komputer yang ada di dalam Fakultas Ilmu Komputer
          UPNVJ.
        </p>
      </div>

      <div className="w-full space-y-5 md:flex md:flex-row md:flex-wrap md:space-y-0 md:justify-center md:items-center md:gap-y-8 md:gap-x-8">
        <div data-aos="fade-right" className="md:flex md:justify-center md:items-center">
          <ListLaboratoriumCard {...sekretariatLabDetails} />
        </div>

        <div data-aos="fade-left"  className="md:flex md:justify-center md:items-center">
          <ListLaboratoriumCard {...programmingLabDetails} />
        </div>

        <div data-aos="fade-right"  className="md:flex md:justify-center md:items-center">
          <ListLaboratoriumCard {...CyberSecurityLabDetails} />
        </div>

        <div data-aos="fade-left"  className="md:flex md:justify-center md:items-center">
          <ListLaboratoriumCard {...artificialIntelligenceLabDetails} />
        </div>
        
        <div data-aos="fade-right"  className="md:flex md:justify-center md:items-center">
          <ListLaboratoriumCard {...businessIntelligenceLabDetails} />
        </div>

        <div data-aos="fade-left"  className="md:flex md:justify-center md:items-center">
          <ListLaboratoriumCard {...databaseLabDetails} />
        </div>

        <div data-aos="fade-right"  className="md:flex md:justify-center md:items-center">
          <ListLaboratoriumCard {...dataMiningLabDetails} />
        </div>

        <div data-aos="fade-left"  className="md:flex md:justify-center md:items-center">
          <ListLaboratoriumCard {...IOTLabDetails} />
        </div>
      </div>
    </section>
  );
}

export default ListLaboratorium;

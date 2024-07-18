"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LabCardWrapper from "@/components/Laboratorium/LabCardWrapper/LabCardWrapper";
import { labDetails } from "@/data/labData";

function ListLaboratorium() {
  useEffect(() => {
    AOS.init();
  }, []);

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
        <LabCardWrapper labDetails={labDetails} />
      </div>
    </section>
  );
}

export default ListLaboratorium;
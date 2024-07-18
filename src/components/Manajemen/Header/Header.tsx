"use client"

import React from "react";
import Image from "next/image";
import ManajemenHeaderMobile from "../../../../public/images/ManajemenHeaderMobile.png";
import ManajemenHeaderDesktop from "../../../../public/images/ManajemenHeaderDesktop.png";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
function ManajemenHeader() {
  useEffect(() => {
    AOS.init({duration:1000});
  }, []);
  return (
    <section>
      {/* Mobile */}
      <div className="relative w-full h-[279px] block md:hidden">
        <Image
          src={ManajemenHeaderMobile}
          alt="Laboratorium Header"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-white text-left">
          <div className="font-bold text-[29px] space-y-2" data-aos="fade-right">
            <p>Pimpinan Fakultas Ilmu Komputer</p>
            <p className="font-bold text-[18px] text-left" data-aos="fade-up">
              UPN Veteran Jakarta
            </p>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="relative w-full h-[550px] hidden md:block">
        <Image
          src={ManajemenHeaderDesktop}
          alt="Laboratorium Header"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-end text-white text-right md:px-8 lg:px-12 xl:px-16">
          <div className="w-full md:w-auto md:flex md:flex-col md:items-end">
            <div className="font-bold text-[29px] md:text-[60px] md:mr-5 space-y-2 text-left" data-aos="fade-right">
              <p>
                Pimpinan Fakultas Ilmu <br />
                Komputer
              </p>
              <p className="font-bold text-[18px] text-left" data-aos="fade-up">
                UPN Veteran Jakarta
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ManajemenHeader;

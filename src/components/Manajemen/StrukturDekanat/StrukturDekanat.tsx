"use client"
import StrukturManajemenCard from "@/components/ui/StrukturManajemenCard/StrukturManajemenCard";
import { dekanatDetails } from "@/data/manajemenDetails";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const StrukturDekanat: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="min-h-screen w-full px-4 py-8 flex flex-col justify-center space-y-5 md:px-[100px] md:min-h-[400px]">
      <div
        className="flex flex-row items-center justify-between space-x-1"
        data-aos="fade-down"
      >
        <p className="w-[70%] text-[24px] font-extrabold md:text-[48px]">
          Struktur Dekanat FIK
        </p>
        <hr className="w-[30%] border-primary-500 rounded-xl border-[3px] md:min-w-[50%]" />
      </div>
      <div>
        <p
          className="text-primary-500 text-[16px] font-semibold md:text-[24px]"
          data-aos="fade-down"
        >
          Susunan organisasi dan peran-peran yang ada di dalam dekanat Fakultas komputer UPNVJ.
        </p>
      </div>

      <div className="w-full flex flex-col items-center space-y-5 md:pt-5 md:grid md:grid-cols-3 md:gap-4">
        {dekanatDetails.map((person, index:number) => (
          <div className={`md:col-span-${index === 0 ? 3 : 1} md:flex justify-center`} key={person.name}  data-aos={index === 0 ? "fade-down" : "fade-up"}>
            <StrukturManajemenCard 
              image={person.image} 
              name={person.name} 
              position={person.position} 
              profileRoute={person.profileRoute} 
              lhkpnRoute={person.lhkpnRoute} 
              showMenu 
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default StrukturDekanat;
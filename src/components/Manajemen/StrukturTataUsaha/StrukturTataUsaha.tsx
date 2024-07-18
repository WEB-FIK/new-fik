import StrukturManajemenCard from "@/components/ui/StrukturManajemenCard/StrukturManajemenCard";
import React from "react";
import { koorTUDetails } from "@/data/manajemenDetails";

function StrukturTataUsaha() {
  return (
    <section className="min-h-[400px] w-full px-4 flex flex-col justify-center space-y-5 md:px-[100px] md:min-h-[400px]">
      <div
        className="flex flex-row items-center justify-between space-x-1"
        data-aos="fade-down"
      >
        <p className="w-[70%] text-[24px] font-extrabold text-left md:text-[48px]">
          Sub Bagian Tata Usaha
        </p>
        <hr className="w-[50%] border-primary-500 rounded-xl border-[3px] md:min-w-[50%]" />
      </div>
      <div>
        <p
          className="text-primary-500 text-[16px] font-semibold md:text-[24px]"
          data-aos="fade-down"
        >
          Susunan Sub Bagian Tata Usaha di Fakultas Ilmu komputer UPNVJ.
        </p>
      </div>

      <div className="w-full flex flex-col items-center space-y-5 md:pt-5 md:grid md:gap-4 md:space-y-0">
      {koorTUDetails.map((person, index:number) => (
          <div className={`md:col-span-${index === 0 ? 3 : 1} md:flex justify-center`} key={person.name} data-aos="fade-up">
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

export default StrukturTataUsaha;

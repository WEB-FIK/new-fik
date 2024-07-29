import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import React from "react";
import { kurikulumData } from "../../../../data/kurikulumData";
import BookIcon from "@/components/Icons/BookIcon";

function KurikulumSarjanaSistemInformasi() {
  return (
    <section className="min-h-screen w-full px-4 py-8 flex flex-col items-center space-y-6 md:px-[100px]">
      <div className="w-full">
        <SectionHeader
          title="Kurikulum"
          subtitle="Mengetahui lebih lanjut Kurikulum Fakultas komputer UPNVJ."
          textAlign="left"
        />
      </div>
      <div className="flex-grow flex justify-center items-center w-full max-w-6xl">
        <div className="grid md:grid-cols-2 gap-10 w-full">
          {kurikulumData.map((item, index) => (
            <div
              key={index}
              className="min-h-[480px] w-full rounded-[16px] p-5 border border-[#D4D2E3] gap-y-4"
            >
              <div className="pb-4">
                <p className="text-[18px] text-primary-500 font-bold">
                  {item.semester}
                </p>
              </div>
              <div className="flex flex-col space-y-4">
                {item.mataKuliah.map((mataKuliah, index) => (
                  <div key={index} className="text-[14px]">
                    <div className="flex gap-x-4 font-bold">
                      <BookIcon />
                      {mataKuliah.toUpperCase()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default KurikulumSarjanaSistemInformasi;

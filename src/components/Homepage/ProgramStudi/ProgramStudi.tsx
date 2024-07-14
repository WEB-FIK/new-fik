import React from "react";
import line from "../../../../public/Line.png";
import Image from "next/image";
export default function ProgramStudi() {
  return (
    <section className="px-4 py-8 min-h-screen bg-red-200">
      <div className="flex">
        <p className="text-[24px] text-black font-bold">
          Fakultas Ilmu Komputer UPNVJ
        <Image src={line} alt="line" width={135} height={0}/>
        </p>
      </div>
    </section>
  );
}

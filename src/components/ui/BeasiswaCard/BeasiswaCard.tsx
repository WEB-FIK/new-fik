import Image from "next/image";
import React from "react";
import Link from "next/link";
import { dataBeasiswa } from "@/data/dataBeasiswa";
import { truncateText } from "@/lib/utils";
function BeasiswaCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {dataBeasiswa.map((beasiswa) => (
        <div
          key={beasiswa.title}
          className="group w-full min-h-[350px] flex flex-col justify-between border rounded-[12px] p-5 space-y-3 hover:border hover:border-primary-500 transform transition-all hover:shadow-xl duration-500 ease-in-out md:space-y-6"
        >
          <div className="flex space-x-4 items-center">
            <div className="rounded-[12px]">{beasiswa.image}</div>
            <div className="text-[23px] font-bold">{beasiswa.title}</div>
          </div>

          <div>
            <p className="text-[14px] text-justify md:text-[18px]">
              {truncateText(beasiswa.description, 50)}
            </p>
          </div>
          <Link
            href={beasiswa.path}
            className="w-full h-6 flex items-center justify-center bg-primary-500 py-6 text-white rounded-lg transform transition-all ease-in-out duration-300 font-semibold border hover:border-primary-500 hover:bg-white hover:text-primary-500"
          >
            <p>Selengkapnya</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BeasiswaCard;

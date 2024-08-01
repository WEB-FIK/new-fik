import Image from "next/image";
import React from "react";
import Link from "next/link";
import { dataBeasiswa } from "@/data/dataBeasiswa";
import { truncateText } from "@/lib/utils";
function BeasiswaCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {dataBeasiswa.map((beasiswa) => (
        <Link
          href={beasiswa.path}
          key={beasiswa.title}
          className="group w-full min-h-[350px] border rounded-[12px] p-5 space-y-3 hover:border hover:border-primary-500 transform transition-all hover:shadow-xl duration-500 ease-in-out md:space-y-6"
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
        </Link>
      ))}
    </div>
  );
}

export default BeasiswaCard;

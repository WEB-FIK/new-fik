import React from "react";
import Link from "next/link";
import { truncateText } from "@/lib/utils";
import { dataBeasiswaProps } from "@/data/dataBeasiswa";
import BeasiswaCardLayout from "./BeasiswaCardLayout";

interface BeasiswaCardItemProps {
  beasiswa: dataBeasiswaProps;
}

const BeasiswaCardItem: React.FC<BeasiswaCardItemProps> = ({ beasiswa }) => {
  if (!beasiswa) {
    return <div aria-live="polite">Beasiswa data is not available</div>;
  }

  return (
    <BeasiswaCardLayout>
      <header className="flex space-x-4 items-center">
        <div className="rounded-[12px]" aria-hidden="true">
          {beasiswa.image}
        </div>
        <h2 className="text-[23px] font-bold">{beasiswa.title}</h2>
      </header>

      <div>
        <p className="text-[14px] text-justify md:text-[18px]">
          {truncateText(beasiswa.description, 50)}
        </p>
      </div>
      <Link
        href={beasiswa.path}
        className="w-full h-6 flex items-center justify-center bg-primary-500 py-6 text-white rounded-lg transform transition-all ease-in-out duration-300 font-semibold border hover:border-primary-500 hover:bg-white hover:text-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        aria-label={`Learn more about ${beasiswa.title}`}
      >
        Selengkapnya
      </Link>
    </BeasiswaCardLayout>
  );
};

export default BeasiswaCardItem;

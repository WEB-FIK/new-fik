import React from "react";
import Image from "next/image";
import { galeriFotoProps } from "@/data/kehidupanMahasiswa";
import Link from "next/link";

const GaleriFotoCard: React.FC<{ data: galeriFotoProps }> = ({ data }) => {
  return (
    <Link
      href={data.path}
      className="w-full min-h-[450px] rounded-[8px] p-4 border border-[#F5F5F5] space-y-4 hover:border-primary-500 transform transition-all ease-in-out duration-300 flex flex-col justify-between"
    >
      <div className="w-full min-h-[200px] flex items-center justify-center rounded-[8px] overflow-hidden">
        <Image
          src={data.image}
          alt={data.description}
          className="w-full object-cover"
        />
      </div>
      <div className="mt-4">
        <p className="text-[20px] font-semibold">{data.description}</p>
      </div>
    </Link>
  );
};

export default GaleriFotoCard;

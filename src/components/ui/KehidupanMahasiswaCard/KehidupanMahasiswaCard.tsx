import Link from "next/link";
import React from "react";
import InstagramIcon from "@/components/Icons/InstagramIcon";
import Image from "next/image";
import { KehidupanMahasiswaCardProps } from "@/data/kehidupanMahasiswa";
import { truncateText } from "@/lib/utils";

const KehidupanMahasiswaCard: React.FC<{
  data: KehidupanMahasiswaCardProps;
}> = ({ data }) => {
  return (
    <div className="w-full min-h-[700px] lg:min-h-[100px] rounded-[8px] p-4 border border-slate-200 space-y-6 hover:border-primary-500 transform transition-all ease-in-out duration-300 hover:shadow-lg">
      <div className="w-full flex justify-center items-center min-h-[340px] rounded-[16px] border border-slate-200">
        <Image
          src={data.image}
          alt={data.title}
          className="object-cover rounded-[8px]"
        />
      </div>
      <div className="flex flex-col justify-between space-y-6">
        <p className="text-[26px] font-bold">{data.title}</p>

        <p className="text-neutral-500 text-[18px] font-bold text-justify">
          {truncateText(data.description, 30)}
        </p>
        <div className="flex items-center space-x-2">
          <InstagramIcon />
          <Link
            href={data.link}
            className="text-primary-500 text-[20px] font-bold"
          >
            {data.linkTitle}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default KehidupanMahasiswaCard;

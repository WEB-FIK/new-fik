import Link from "next/link";
import React from "react";
import InstagramIcon from "@/components/Icons/InstagramIcon";
import Image from "next/image";
import { KehidupanMahasiswaCardProps } from "@/data/kehidupanMahasiswa";
import { truncateText } from "@/lib/utils";

const KehidupanMahasiswaCard: React.FC<{
  data: KehidupanMahasiswaCardProps;
}> = ({ data }) => {
  const truncatedDescription = truncateText(data.description, 30);

  const renderImage = data.image && (
    <Image
      src={data.image}
      alt={data.title}
      className="px-28 py-12 object-coverrounded-[8px]"
      layout="fill"
    />
  );

  return (
    <div className="w-full min-h-[700px] lg:min-h-[100px] rounded-lg p-4 border border-slate-200 space-y-6 hover:border-primary-500 transform transition-all ease-in-out duration-300 hover:shadow-lg">
      <div className="w-full flex justify-center items-center min-h-80 rounded-2xl border border-slate-200 relative">
        {renderImage}
      </div>
      <div className="flex flex-col justify-between space-y-6">
        <p className="text-[26px] font-bold">{data.title}</p>

        <p className="text-neutral-500 text-[18px] font-bold text-justify">
          {truncatedDescription}
        </p>

        <div className="flex items-center space-x-2">
          <InstagramIcon aria-label="Instagram Icon" />
          <Link href={data.link}>
            <p className="text-primary-500 text-[20px] font-bold focus:outline-none focus:ring-2 focus:ring-primary-500">
              {data.linkTitle}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default KehidupanMahasiswaCard;

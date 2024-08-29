import Link from "next/link";
import React, { useMemo } from "react";
import InstagramIcon from "@/components/Icons/InstagramIcon";
import Image, { StaticImageData } from "next/image";
import { KehidupanMahasiswaCardProps } from "@/data/kehidupanMahasiswa";
import { truncateText } from "@/lib/utils";

const CardImage: React.FC<{ src: StaticImageData; alt: string }> = ({
  src,
  alt,
}) => {
  return (
    <div className="w-full flex justify-center items-center min-h-80 rounded-2xl border border-slate-200 relative">
      <Image
        src={src}
        alt={alt}
        className="object-cover rounded-[8px] px-8 md:px-32 py-4"
        layout="fill"
      />
    </div>
  );
};

const CardLink: React.FC<{ href: string; title: string }> = ({
  href,
  title,
}) => (
  <Link href={href} passHref>
    <p className="text-primary-500 text-[20px] font-bold focus:outline-none focus:ring-2 focus:ring-primary-500">
      {title}
    </p>
  </Link>
);

const KehidupanMahasiswaCard: React.FC<{
  data: KehidupanMahasiswaCardProps;
}> = ({ data }) => {
  const truncatedDescription = useMemo(
    () => truncateText(data.description, 30),
    [data.description]
  );

  return (
    <div className="w-full min-h-[700px] lg:min-h-[100px] rounded-lg p-4 border border-slate-200 space-y-6 hover:border-primary-500 transform transition-all ease-in-out duration-300 hover:shadow-lg">
      {data.image && <CardImage src={data.image} alt={data.title} />}

      <div className="flex flex-col justify-between space-y-6">
        <p className="text-[26px] font-bold">{data.title}</p>
        <p className="text-neutral-500 text-[18px] font-bold text-justify">
          {truncatedDescription}
        </p>
        <div className="flex items-center space-x-2">
          <InstagramIcon aria-label="Instagram Icon" />
          <CardLink href={data.link} title={data.linkTitle} />
        </div>
      </div>
    </div>
  );
};

export default KehidupanMahasiswaCard;

import React from "react";
import ImacIcon from "@/components/Icons/ImacIcon";

interface PeminatanCardItemProps {
  title: string;
  subtitle: string;
}

const PeminatanCardItem: React.FC<PeminatanCardItemProps> = ({
  title,
  subtitle,
}) => (
  <div className="shadow-lg w-full md:w-[400px] min-h-[280px] flex flex-col justify-center items-center px-5 py-4 rounded-[30px] bg-white mb-4">
    <div className="flex flex-col justify-center items-center gap-y-2">
      <div>
        <ImacIcon />
      </div>
      <div className="text-black text-center gap-y-2 flex flex-col">
        <p className="text-[18px] font-bold text-primary-500">{title}</p>
        <p className="text-[14px]">{subtitle}</p>
      </div>
    </div>
  </div>
);

export default PeminatanCardItem;

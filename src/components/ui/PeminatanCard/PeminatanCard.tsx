import React from 'react';
import ImacIcon from '@/components/Icons/ImacIcon';
import { PeminatanProgramStudi } from '@/data/peminatanProgramStudi';

interface PeminatanCardProps {
  data: PeminatanProgramStudi[];
}

const PeminatanCard: React.FC<PeminatanCardProps> = ({ data }) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-5 text-[14px] md:flex-row font-medium md:space-y-0 md:grid-cols-5 md:justify-between">
      {data.map((peminatan, index) => (
        <div key={index} className="shadow-lg w-full md:w-[400px] min-h-[280px] flex flex-col justify-center items-center px-5 rounded-[30px] bg-white mb-4">
          <div className="flex flex-col justify-center items-center gap-y-2">
            <div>
              <ImacIcon />
            </div>
            <div className="text-black text-center gap-y-2 flex flex-col">
              <p className="text-[24px] font-bold text-primary-500">{peminatan.title}</p>
              <p className="text-[14px]">{peminatan.subtitle}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PeminatanCard;

import React from 'react';
import Link from 'next/link';
import { PermohonanSuratAkademikProps } from '@/data/PermohonanSuratAkademik';

interface LayananMahasiswaCardProps {
  data: PermohonanSuratAkademikProps[];
}

const LayananMahasiswaCard: React.FC<LayananMahasiswaCardProps> = ({ data }) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center md:justify-between">
      {data.map((item, index) => (
        <div 
          key={index} 
          className='w-[360px] h-[140px] md:w-[375px] md:h-[180px] rounded-[12px] flex flex-col justify-between p-6 bg-primary-500 text-white mb-4 transition duration-300 ease-in-out md:bg-white md:text-black md:border md:hover:bg-primary-500 md:hover:text-white'
        >
          <p className='text-[18px] font-semibold md:text-black md:hover:text-white'>{item.title}</p>
          <Link href={item.path} className='text-[14px] underline md:text-primary-500 md:hover:text-white'>Lihat Video Tutorial</Link>
        </div>
      ))}
    </div>
  );
};

export default LayananMahasiswaCard;

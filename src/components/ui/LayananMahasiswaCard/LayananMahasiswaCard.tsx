import React from 'react';
import Link from 'next/link';
import { PermohonanSuratAkademikProps } from '@/data/dataFormLayananMahasiswa';

interface LayananMahasiswaCardProps {
  data: PermohonanSuratAkademikProps[];
}

const LayananMahasiswaCard: React.FC<LayananMahasiswaCardProps> = ({ data }) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-x-8">
      {data.map((item, index) => (
        <Link
          href={item.path} 
          key={index} 
          className='group shadow-lg w-full h-[140px] md:h-[160px] rounded-[12px] flex flex-col justify-between p-6 bg-primary-500 text-[18px] font-semibold text-white mb-4 transition duration-300 ease-in-out md:bg-white md:text-black md:border md:hover:bg-primary-500 md:hover:text-white'
        >
          {item.title}
          <p className='text-[14px] underline md:text-primary-500 md:group-hover:text-white'>Akses Form</p>
        </Link>
      ))}
    </div>
  );
};

export default LayananMahasiswaCard;

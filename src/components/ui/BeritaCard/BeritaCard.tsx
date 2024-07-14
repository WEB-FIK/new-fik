import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Button from '../Button/Button';

interface BeritaCardProps {
  image: StaticImageData;
  title: string;
  desc: string;
}

function BeritaCard({ image, title, desc }: BeritaCardProps) {
  return (
    <div className='w-[358px] h-[478px] border-[#DEE2E6] border-2 md:shadow-md rounded-[12px] flex flex-col'>
      <div className="w-full h-[192px] relative">
        <Image 
          src={image} 
          alt="image" 
          layout='fill' 
          objectFit='cover' 
          className='rounded-t-[12px]' 
        />
      </div>

      <div className='px-6 py-4 flex flex-col justify-between flex-grow'>
        <p className='text-[24px] font-bold'>{title}</p>
        <p className='font-medium py-2 text-[14px]'>{desc}</p>
        <div className='mt-auto'>
          <Button text='Baca' path='/berita' bgColor='primary-500' width='100px' />
        </div>
      </div>
    </div>
  );
}

export default BeritaCard;

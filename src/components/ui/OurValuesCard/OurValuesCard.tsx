import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface OurValuesCardProps {
  image: StaticImageData;
}

function OurValuesCard({ image }: OurValuesCardProps) {
  return (
    <div className='w-[357px] md:w-[268px] md:h-[245px] h-[327px] bg-white rounded-[8px] flex justify-center items-center'>
      <Image src={image} alt="Our Values" className='rounded-[8px]'/>
    </div>
  );
}

export default OurValuesCard;

'use client';

import React from 'react';
import Image from 'next/image';
import ProgramStudiHeaderMobile from '../../../../../public/images/ProgramStudiHeaderMobile.jpg';
import ProgramStudiHeaderDesktop from '../../../../../public/images/ProgramStudiHeaderDesktop.jpg';
import { useAOS } from '@/hooks/useAOS';

const HeaderContent = ({ isMobile }: { isMobile: boolean }) => (
  <div className={`relative w-full h-[${isMobile ? '279px' : '550px'}] ${isMobile ? 'block md:hidden' : 'hidden md:block'}`}>
    <Image
      src={isMobile ? ProgramStudiHeaderMobile : ProgramStudiHeaderDesktop}
      alt="Laboratorium Header"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 flex flex-col justify-center items-end text-white text-left px-6 lg:px-12 xl:px-16">
      <div className={`w-full md:w-auto md:flex md:flex-col md:items-end`}>
        <div className={`md:w-[70%] font-bold text-[${isMobile ? '29px' : '60px'}] md:text-[60px] space-y-2 text-left`} data-aos="fade-right">
          <p className='md:text-[60px]'>Program Studi Sarjana Sistem Informasi FIK</p>
          <p className="font-bold text-[18px] md:text-[24px]" data-aos="fade-up">
            UPN Veteran Jakarta
          </p>
        </div>
      </div>
    </div>
  </div>
);

const ProgramStudiHeader = () => {
  useAOS();

  return (
    <section>
      <HeaderContent isMobile={true} />
      <HeaderContent isMobile={false} />
    </section>
  );
};

export default ProgramStudiHeader;

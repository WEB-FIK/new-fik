'use client';

import React from 'react';
import Image from 'next/image';
import ManajemenHeaderMobile from '../../../../public/images/ManajemenHeaderMobile.png';
import ManajemenHeaderDesktop from '../../../../public/images/ManajemenHeaderDesktop.png';
import { useAOS } from '@/hooks/useAOS';

const HeaderContent = ({ isMobile }: { isMobile: boolean }) => (
  <div className={`relative w-full h-[${isMobile ? '279px' : '550px'}] ${isMobile ? 'block md:hidden' : 'hidden md:block'}`}>
    <Image
      src={isMobile ? ManajemenHeaderMobile : ManajemenHeaderDesktop}
      alt="Laboratorium Header"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 flex flex-col justify-center items-end text-white text-right px-8 lg:px-12 xl:px-16">
      <div className={`w-full md:w-auto md:flex md:flex-col md:items-end`}>
        <div className={`w-[90%] font-bold text-[${isMobile ? '29px' : '60px'}] md:text-[60px] space-y-2 text-left`} data-aos="fade-right">
          <p>Pimpinan Fakultas Ilmu Komputer</p>
          <p className="font-bold text-[18px] text-left" data-aos="fade-up">
            UPN Veteran Jakarta
          </p>
        </div>
      </div>
    </div>
  </div>
);

const ManajemenHeader = () => {
  useAOS();

  return (
    <section>
      <HeaderContent isMobile={true} />
      <HeaderContent isMobile={false} />
    </section>
  );
};

export default ManajemenHeader;

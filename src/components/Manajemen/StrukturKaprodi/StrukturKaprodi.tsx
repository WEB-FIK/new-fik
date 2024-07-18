'use client';

import React from 'react';
import StrukturManajemenCard from '@/components/ui/StrukturManajemenCard/StrukturManajemenCard';
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader';
import { kaprodiDetails } from '@/data/manajemenDetails';
import { useAOS } from '@/hooks/useAOS';

const StrukturKaprodi = () => {
  useAOS();
  return (
    <section className="min-h-screen w-full px-4 py-8 flex flex-col justify-center space-y-5 md:px-[100px] md:min-h-[400px]">
      <SectionHeader title="Ketua Program Studi" subtitle="Susunan Ketua Program Studi di Fakultas Ilmu komputer UPNVJ." textAlign="left" />
      <div className="md:grid md:grid-cols-3 space-y-5 md:space-y-0 md:pt-5">
        {kaprodiDetails.map((person, index) => (
          <div className="flex flex-col items-center justify-center md:flex-row" key={index} data-aos={index === 0 ? 'fade-right' : index === 1 ? 'fade-up' : 'fade-left'}>
            <StrukturManajemenCard {...person} showMenu />
          </div>
        ))}
      </div>
    </section>
  );
};

export default StrukturKaprodi;

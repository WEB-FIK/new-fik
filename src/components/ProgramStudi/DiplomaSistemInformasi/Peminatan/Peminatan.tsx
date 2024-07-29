import React from 'react';
import PeminatanCard from '@/components/ui/PeminatanCard/PeminatanCard';
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader';
import { peminatanDiplomaSistemInformasi } from '@/data/peminatanProgramStudi';

const Peminatan: React.FC = () => {
  return (
    <div>
      <section className="bg-[#EDEDED] min-h-[200px] w-full px-4 py-8 flex flex-col justify-center space-y-5 md:px-[100px] md:min-h-[400px]">
        <SectionHeader
          title="Peminatan"
          subtitle="Peminatan yang terdapat pada Program Diploma Sistem Informasi Fakultas komputer UPNVJ."
          textAlign="right"
        />
        <div className=''>
          <PeminatanCard data={peminatanDiplomaSistemInformasi} />
        </div>
      </section>
    </div>
  );
};

export default Peminatan;

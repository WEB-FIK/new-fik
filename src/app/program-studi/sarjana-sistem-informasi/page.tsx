import ProgramStudiHeader from '@/components/ProgramStudi/ProgramStudiHeader'
import HeroSection from '@/components/ProgramStudi/SarjanaSistemInformasi/HeroSection/HeroSection'
import ProfilLulusan from '@/components/ProgramStudi/ProfilLulusan/ProfilLulusan'
import React from 'react'
import CapaianPembelajaranLulusan from '@/components/ProgramStudi/SarjanaSistemInformasi/CapaianPembelajaranLulusan/CapaianPembelajaranLulusan'
import LamaStudi from '@/components/ProgramStudi/LamaStudi/LamaStudi'
import KurikulumSarjanaSistemInformasi from '@/components/ProgramStudi/SarjanaSistemInformasi/KurikulumSarjanaSistemInformasi/KurikulumSarjanaSistemInformasi'
import Peminatan from '@/components/ProgramStudi/SarjanaSistemInformasi/Peminatan/Peminatan'
function page() {
  return (
    <div>
        <ProgramStudiHeader />
        <HeroSection/>
        <ProfilLulusan/>
        <CapaianPembelajaranLulusan/>
        <LamaStudi/>
        <KurikulumSarjanaSistemInformasi/>
        <Peminatan/>
    </div>
  )
}

export default page
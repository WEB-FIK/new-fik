import ProgramStudiHeader from '@/components/ProgramStudi/ProgramStudiHeader'
import HeroSection from '@/components/ProgramStudi/SarjanaSistemInformasi/HeroSection/HeroSection'
import ProfilLulusan from '@/components/ProgramStudi/ProfilLulusan/ProfilLulusan'
import React from 'react'

function page() {
  return (
    <div>
        <ProgramStudiHeader />
        <HeroSection/>
        <ProfilLulusan/>
    </div>
  )
}

export default page
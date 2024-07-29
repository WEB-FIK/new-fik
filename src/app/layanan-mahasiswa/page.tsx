import Header from '@/components/LayananMahasiswa/Header/Header'
import HeroSection from '@/components/LayananMahasiswa/HeroSection/HeroSection'
import PermohonanSuratAkademik from '@/components/LayananMahasiswa/PermohonanSuratAkademik/PermohonanSuratAkademik'
import PermohonanSuratKerjaPraktek from '@/components/LayananMahasiswa/PermohonanSuratKerjaPraktek/PermohonanSuratKerjaPraktek'
import React from 'react'

function page() {
  return (
    <div>
        <Header/>
        <HeroSection/>
        <PermohonanSuratAkademik/>
        <PermohonanSuratKerjaPraktek/>
    </div>
  )
}

export default page
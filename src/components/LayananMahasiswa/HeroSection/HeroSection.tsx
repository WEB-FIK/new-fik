import React from 'react'
import Image from 'next/image'
import LayananMahasiswaHeroSection from "../../../../public/images/LayananMahasiswaHeroImage.png"
function HeroSection() {
  return (
    <section className='px-4 py-8'>
        <Image src={LayananMahasiswaHeroSection} alt='Layanan Mahasiswa Hero Section' className="w-[360px] h-[140px]"/>
    </section>
  )
}

export default HeroSection
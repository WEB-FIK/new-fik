import React from 'react'
import Image from 'next/image'
import LayananMahasiswaHeroSectionMobile from "../../../../public/images/LayananMahasiswaHeroSectionMobile.png"
import LayananMahasiswaHeroSectionDesktop from "../../../../public/images/LayananMahasiswaHeroSectionDesktop.png"

function HeroSection() {
  return (
    <section className='px-4 py-8 md:px-[100px]'>
        <Image src={LayananMahasiswaHeroSectionMobile} alt='Layanan Mahasiswa Hero Section' className="w-[360px] h-full md:hidden block"/>
        <Image src={LayananMahasiswaHeroSectionDesktop} alt='Layanan Mahasiswa Hero Section' className="w-full h-full hidden md:block"/>
    </section>
  )
}

export default HeroSection
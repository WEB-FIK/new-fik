import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface ProgramStudiCardProps {
    icon: StaticImageData
    programStudi: string
    deskripsi: string
}
function ProgramStudiCard({icon, programStudi, deskripsi}: ProgramStudiCardProps) {
  return (
    <div className='w-[358px] md:w-[302px] md:min-h-[319px] min-h-[285px] rounded-[8px] border border-[#D4D2E3] flex flex-col justify-between items-center space-y-4 text-center p-5 md:space-y-0 md:shadow-xl'>
        <Image src={icon} alt="icon"/>
        <p className='text-[24px] font-bold text-primary-500'>{programStudi}</p>
        <p className='text-[#6B7280] text-[14px] md:text-[16px]'>{deskripsi}</p>
    </div>
  )
}

export default ProgramStudiCard
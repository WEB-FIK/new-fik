import StudentsIcon from '@/components/Icons/StudentsIcon'
import React from 'react'
import { peminatanSarjanaSistemInformasi } from '@/data/peminatanProgramStudi'

function PeminatanCard() {
  return (
    <div>
      {peminatanSarjanaSistemInformasi.map((peminatan, index) => (
        <div key={index} className='w-full min-h-[280px] flex flex-col justify-center items-center px-5 rounded-[30px] bg-gradient-to-br from-primary-700 to-primary-500 mb-4'>
          <div className='flex flex-col justify-center items-center gap-y-2'>
            <div>
              <StudentsIcon />
            </div>
            <div className='text-white text-center gap-y-2 flex flex-col'>
              <p className='text-[24px] font-bold'>{peminatan.title}</p>
              <p className='text-[14px]'>{peminatan.subtitle}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PeminatanCard

import ImacIcon from '@/components/Icons/ImacIcon'
import React from 'react'
import { peminatanSarjanaSistemInformasi } from '@/data/peminatanProgramStudi'

function PeminatanCard() {
  return (
    
      <div className="flex flex-col justify-center items-center space-y-5 text-[14px] font-medium md:flex-row md:space-y-0 md:grid-cols-4 md:justify-between">
        {peminatanSarjanaSistemInformasi.map((peminatan, index) => (
          <div key={index} className='shadow-lg w-full md:w-[400px] min-h-[280px] flex flex-col justify-center items-center px-5 rounded-[30px] bg-white mb-4'>
            <div className='flex flex-col justify-center items-center gap-y-2'>
              <div>
                <ImacIcon />
              </div>
              <div className='text-black text-center gap-y-2 flex flex-col'>
                <p className='text-[24px] font-bold text-primary-500'>{peminatan.title}</p>
                <p className='text-[14px]'>{peminatan.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
  )
}

export default PeminatanCard

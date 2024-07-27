import SectionHeader from '@/components/ui/SectionHeader/SectionHeader'
import React from 'react'
import { kurikulumData } from '../../../../data/kurikulumData'
import BookIcon from '@/components/Icons/BookIcon'

function KurikulumSarjanaSistemInformasi() {
    return (
        <section className="min-h-[200px] w-full px-4 py-8 flex flex-col justify-center space-y-5 md:px-[100px] md:min-h-[400px]">
            <SectionHeader
                title="Kurikulum"
                subtitle="Mengetahui lebih lanjut Kurikulum Fakultas komputer UPNVJ."
                textAlign="left"
            />
            {kurikulumData.map((item, index) => (
                <div key={index} className='min-h-[480px] w-full rounded-[16px] p-5 border border-[#D4D2E3] gap-y-4'>
                    <div className='pb-4'>
                        <p className='text-[18px] text-primary-500 font-bold'>{item.semester}</p>
                    </div>
                    <div className='flex flex-col space-y-4'>
                        {item.mataKuliah.map((mataKuliah, index) => (
                            <div key={index} className='text-[14px]'>
                                <div className='flex gap-x-4'>

                                <BookIcon/>
                                {mataKuliah.toUpperCase()}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    )
}

export default KurikulumSarjanaSistemInformasi

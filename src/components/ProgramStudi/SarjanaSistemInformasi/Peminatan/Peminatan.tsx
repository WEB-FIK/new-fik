import PeminatanCard from '@/components/ui/PeminatanCard/PeminatanCard'
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader'
import React from 'react'

function Peminatan() {
  return (
    <div>
        <section className="min-h-[200px] w-full px-4 py-8 flex flex-col justify-center space-y-5 md:px-[100px] md:min-h-[400px]">
            <SectionHeader
                title="Peminatan"
                subtitle="Peminatan yang terdapat pada Program Sarjana Sistem Informasi Fakultas komputer UPNVJ."
                textAlign="right"
            />

            <div>
                <PeminatanCard/>
            </div>
        </section>
    </div>

  )
}

export default Peminatan
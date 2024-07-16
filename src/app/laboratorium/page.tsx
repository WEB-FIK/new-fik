import AboutLaboratorium from '@/components/Laboratorium/AboutLaboratorium/AboutLaboratorium'
import LaboratoriumPageHeader from '@/components/Laboratorium/Header/Header'
import Header from '@/components/Laboratorium/Header/Header'
import ListLaboratorium from '@/components/Laboratorium/ListLaboratorium/ListLaboratorium'
import React from 'react'

export default function page() {
  return (
    <div>
        <LaboratoriumPageHeader />
        <AboutLaboratorium/>
        <ListLaboratorium/>
    </div>
  )
}

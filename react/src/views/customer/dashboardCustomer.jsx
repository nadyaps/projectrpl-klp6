import React from 'react'
import Jumbotron from '../../components/content/jumbotron'
import LayananListCus from '../../components/content/layananListCus'
import ArtikelListCus from '../../components/content/artikelListCus'
import AboutusCus from '../../components/content/aboutusCus'

export default function dashboardCustomer() {
  return (
    <div className="bg-white">
      <Jumbotron></Jumbotron>
      <LayananListCus></LayananListCus>
      <ArtikelListCus></ArtikelListCus>
      <AboutusCus></AboutusCus>
    </div>
  )
}

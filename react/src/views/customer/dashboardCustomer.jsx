import React from 'react'
import JumbotronCus from '../../components/content/jumbotronCus'
import LayananListCus from '../../components/content/layananListCus'
import ArtikelListCus from '../../components/content/artikelListCus'
import Aboutus from '../../components/content/aboutus'


export default function dashboardCustomer() {
  
  return (
    <div className="bg-white">
      <JumbotronCus></JumbotronCus>
      <LayananListCus></LayananListCus>
      <ArtikelListCus></ArtikelListCus>
      <Aboutus></Aboutus>
    </div>
  )
}

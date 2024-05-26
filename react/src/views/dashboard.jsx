import React from 'react'
import Jumbotron from '../components/content/jumbotron'
import LayananList from '../components/content/layananList'
import ArtikelList from '../components/content/artikelList'
import Aboutus from '../components/content/aboutus'

export default function dashboard() {
  return (
    <div className="bg-white">
      <Jumbotron></Jumbotron>
      <LayananList></LayananList>
      <ArtikelList></ArtikelList>
      <Aboutus></Aboutus>
    </div>
    
  )
}

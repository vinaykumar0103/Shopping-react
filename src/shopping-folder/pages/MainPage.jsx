import React, { useState } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Collection from '../components/Collection';
import Banner from '../components/Banner';
import { Gents, Ladies } from '../data';
import WomanCollection from '../components/WomanCollection';



const MainPage = () => {

  const [gentsFashion, setGentsFashion] = useState(Gents);
  const [ladiesFashion, setLadiesFashion] = useState(Ladies);

  console.log(Gents);

  return (
    <div>
      <Header />
      <Banner /> 
      <Collection gentsFashion = {gentsFashion} />
      <WomanCollection ladiesFashion = {ladiesFashion} />
      <Footer />
     
    </div>
  )
}

export default MainPage

import React from 'react'

import About from '../About/About'
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Reviews from '../Reviews/Reviews';
import Form from '../Form/Form';


import './header.css'
const Header = () => {
  return (
    <>
      <header className='header__landing'>
        <div className='front_contain_img'>
        </div>
      </header>
      
      <About />
      <Reviews />
      <Banner />
      <Gallery />
      <Form />
      
    </>
  )
}

export default Header
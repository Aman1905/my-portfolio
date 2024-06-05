import React from 'react'
import Navbar from './Navbar'
import aman from './aman-chopra.png'
import './index.css'

const Home = () => {
  return (
    <div className='container'>
      <Navbar />

      <div className='home__page'>
        <div className='home__text'>
          <h1>Hola!!</h1>
          <h2>This is Aman Chopra</h2>
          <h3>DevRel - Technical Writer | Product Builder | Cloud and DevOps Evangelist </h3>
          
        </div>

        <div className='home__image'>
          <img src={aman} alt='my-profile-pic'/>
        </div>
      </div>
    </div>
  )
}

export default Home
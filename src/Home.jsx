import React from 'react'
import Navbar from './Navbar'
import aman from './assets/aman-chopra.png'
import Social from './Social'
import './index.css'
import twitterIcon from './assets/twitter.png'
import linkedIcon from './assets/linkedin.png'
import githubIcon from './assets/github.png'
import mediumIcon from './assets/medium.png'

const Home = () => {

  const socialData = [
    { socialUrl: 'https://www.linkedin.com/in/iam-aman-chopra/', platform: 'LinkedIn', handle: '@iam_chopra_aman', icon: linkedIcon },
    { socialUrl: 'https://twitter.com/iam_chopra_aman', platform: 'Twitter', handle: '@iam-aman-chopra', icon: twitterIcon },
    { socialUrl: 'https://github.com/Aman1905', platform: 'GitHub', handle: '@aman1905', icon: githubIcon },
    { socialUrl: 'https://amanchopra-atg.medium.com/', platform: 'Medium', handle: '@amanchopra-atg', icon: mediumIcon },
  ];
  
  return (
    <div className='container'>
      <Navbar />

      <div className='home__page'>
        <div className='home__text'>
          <h1>Aman Chopra</h1>
          <h4><span style={{color:'var(--light-purple-color)'}}> DevRel - Technical Writer | Product Builder | Cloud and DevOps Evangelist</span> </h4>

          <div className="home__social">
          {socialData.map((social, index) => (
            <Social
              key={index}
              socialUrl={social.socialUrl}
              platform={social.platform}
              username={social.username}
              handle={social.handle}
              icon={social.icon}
            />
          ))}
        </div>

        </div>
        <div className='home__image'>
          <img src={aman} alt='my-profile-pic'/>
        </div>
      </div>
    </div>
  )
}

export default Home
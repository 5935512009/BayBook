import React from 'react'
import './footer.css'
import AboutCard from './aboutCard/AboutCard'
import Services from './services/Services'
import Language from './language/Language'
import FollowUs from './followUs/FollowUs'
export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-middle'>
        <AboutCard/>
        <Services/>
        <Language/>
        <FollowUs/>
      </div>
    </div>
  )
}

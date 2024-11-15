import React from 'react'
import './hero.css'
import hero_books from '../../assets/icons/hero-books.jpg'
export default function Hero() {
  return (
    <div className='hero'>
      <div className="hero-left">
        <div className='hero-left-letter'>
          Buy many books <br/>
          for best price
        </div>
        <p>Read for life and learn for your.<br/>
          we provide only the best books rent.
        </p>
        <div className='search-bar'>
          <input type="text" placeholder="Search.."/>
          <button>Search</button>
        </div>
      </div>
      <div className="hero-right">
          <img src={hero_books} alt="no images" />
      </div>
    </div>
  )
}

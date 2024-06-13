import React from 'react'
import './Book.css'
import dark_verse from '../../assets/images/dark_verse.jpeg'
import twisted from '../../assets/images/twisted.jpg'
import shatter from '../../assets/images/shatter.jpg'



const Books = () => {
  return (
    <div className='books'>
        <div className="book">
            <img src={dark_verse}alt=" "/>
            <div className="caption">
              <p>Dark Verse Series by RuynX</p>
            </div>
        </div>
        <div className="book">
            <img src={twisted} alt=" "/>
            <div className="caption">
              <p>Twisted Series by Ana Huang</p>
            </div>
        </div>
        <div className="book">
            <img src={shatter} alt=" "/>
            <div className="caption">
              <p>Shatter Me Series by Tahereh Mafi</p>
            </div>
        </div>
    </div>
  )
}

export default Books
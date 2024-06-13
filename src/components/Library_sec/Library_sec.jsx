import React from 'react'
import './Library_sec.css'
import pride from '../../assets/images/pride.png'
import harry from '../../assets/images/harry.jpg'
import bride from '../../assets/images/bride.jpg'
import vampire from '../../assets/images/vampire.jpg'
const Library_sec = () => {
  return (
    <div className='show'>
        <div className='gallery'>
            <img src = {pride} alt=" "/>
            <img src = {harry} alt= " "/>
            <img src = {bride} alt=" "/>
            <img src = {vampire} alt= " "/> 
        </div>
    </div>
  )
}
export default Library_sec
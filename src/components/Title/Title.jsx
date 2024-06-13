import React from 'react'
import './Title.css'
const Title = ({title,subtitle}) => {
  return (
    <div className='title'>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>

    </div>
  )
}

export default Title

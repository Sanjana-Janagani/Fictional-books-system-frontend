import React from 'react'
import './About_section.css'
import about_section from '../../assets/images/about_section.jpg'
import play_icon from '../../assets/images/play_icon.jpg'
const About_section = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_section} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h2>ABOUT OUR COMMUNITY</h2>
            <h4>Step into the Story: Your Next Chapter Starts Here</h4>
            <p>Welcome to Open Book, your gateway to a world of imagination and discovery.
            At Open Book we are passionate about literature and dedicated to bringing you on a journey through the boundless realms of fiction.</p>
            <p>Our curated collection spans genres and eras, from timeless classics to cutting-edge contemporary fiction. We believe in the power of storytelling to inspire, provoke thought, and foster empathy.</p>
            <p>Discover your next great read with insightful reviews, author interviews, and recommendations tailored just for you. Join our community of book lovers, where stories come alive and imagination knows no bounds. Start your journey today and let the magic of books ignite your imagination.</p>
        </div>
    </div>
  )
}

export default About_section
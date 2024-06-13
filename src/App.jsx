import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Books from './components/Book/Book'
import Title from './components/Title/Title'
import About_section from './components/About_section/About_section'
import Library_sec from './components/Library_sec/Library_sec'
import Tests from './components/Tests/Tests'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title title='Current Trends' subtitle="Recent Trends are shown below"/>
        <Books/>
        <Title title='Our Famous Collections' subtitle="Pick your favourite one"/>
        <Library_sec/>
        <About_section setPlayState = {setPlayState}/>
        <Title title='Users' subtitle="Their Reviews"/>
        <Tests/>
        <Title title='Contact Us' subtitle="Let's connect"/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState = {playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
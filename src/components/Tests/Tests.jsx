import React, { useRef } from 'react'
import './Tests.css'
import next_btn from '../../assets/images/next_btn.png'
import back_btn from '../../assets/images/back_btn.png'
import user1 from '../../assets/images/user1.jpg'
import user2 from '../../assets/images/user2.jpg'
import user3 from '../../assets/images/user3.jpeg'

const Tests = () => {

    const slider = useRef();
    let tx = 0;

const slideForward=()=>{
    if (tx > -50){
        tx -= 25
    }
    slider.current.style.transform = `translateX(${tx}%)`
}

const slideBackward=()=>{
    if (tx < 0){
        tx +=25
    }
    slider.current.style.transform = `translateX(${tx}%)`
}
  return (
    <div className='tests'>
        <img src = {next_btn} alt=" " className='next-btn'onClick={slideForward}/>
        <img src = {back_btn} alt=" " className='back-btn'onClick={slideBackward}/>
        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user1} alt=""/>
                            <div>
                                <h3>Janagani Sanjana</h3>
                                <span>Hyderabad, India</span>
                            </div>
                        </div>
                        <p>"Pride and Prejudice" is a charming and witty novel that never gets old. Elizabeth Bennet and Mr. Darcy's romance is one for the ages. Austen's keen observations of society and human nature add depth to this delightful story. Highly recommend for anyone who enjoys a good romance.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user2} alt=""/>
                            <div>
                                <h3>Lakshmi Sowjanya</h3>
                                <span>Hyderabad, India</span>
                            </div>
                        </div>
                        <p>"Dune" is a groundbreaking sci-fi epic that transports you to the desert planet of Arrakis. Herbert's world-building is unmatched, and the intricate political and social dynamics make the story incredibly rich. It's a complex and rewarding read for any science fiction enthusiast.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user3} alt=""/>
                            <div>
                                <h3>Bhavana Patel</h3>
                                <span>Hyderabad, India</span>
                            </div>
                        </div>
                        <p>The first book in the Harry Potter series is pure magic. Rowling creates a whimsical and immersive world that captivates readers of all ages. Harry's journey from a neglected child to a young wizard discovering his destiny is heartwarming and inspiring. A fantastic start to an unforgettable series.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user3} alt=""/>
                            <div>
                                <h3>Laya Mahitha</h3>
                                <span>Hyderabad, India</span>
                            </div>
                        </div>
                        <p>"The Hunger Games" is an exhilarating dystopian novel with a strong and relatable heroine. Katniss Everdeen's fight for survival in a brutal arena is gripping from start to finish. Collins' commentary on society and media makes this more than just an action-packed story. Highly recommend for YA readers and beyond.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Tests
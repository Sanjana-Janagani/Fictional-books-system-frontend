import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/images/msg_icon.png'
import phone from '../../assets/images/phone.png'
import mail from '../../assets/images/mail.png'
import location from '../../assets/images/location.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "b2922455-d04b-4069-81d9-9a803ed2596f");
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res)=>res.json())
  
  
      if (res.success) {
        console.log("Success", res)
        setResult(res.message);
        event.target.reset();
      } else {
        console.log("Error", res);
        setResult(res.message);
      }
    };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt=" "/></h3>
            <p>Feel free to reach out to us. Your feedback, questions and suggestions are important to us.</p>
            <ul>
                {/*add icons*/}
                <li><img src={mail} alt=" "/>openbook@community.com</li>
                <li><img src={phone} alt=" "/>+91 1234 567 890</li>
                <li><img src={location} alt=" "/>Hyderabad, India, 501301</li>
            </ul>
        </div>

        <div className="contact-col">
            <form onSubmit = {onSubmit}>
                <label>Your name</label>
                <input type="text" name="name" placeholder="Enter your name" required/>
                <label>Phone Number</label>
                <input type="tel" name="phone" placeholder="Enter your mobile number"required/>
                <label>Write your opinion here</label>
                <textarea name="message" rows="6" placeholder="Your message here" required></textarea>
                <button type="submit" className='btn dark-btn'>Submit now</button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact
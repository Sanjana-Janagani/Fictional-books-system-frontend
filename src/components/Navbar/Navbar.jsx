import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logos from '../../assets/images/logos.png'
import menu_icon from '../../assets/images/menu_icon.png'
import { Link } from 'react-scroll';
import Login from '../Login/Login';
import Register from '../Register/Register';

const Navbar = () => {
  const[sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 70 ? setSticky(true) : setSticky(false)
    })
  });

  const [menu, setMenu] = useState(false)
  const toggleMenu = () =>{
    menu? setMenu(false) : setMenu(true)
  }

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const openLoginModal = () => setIsLoginOpen(true);
  const closeLoginModal = () => setIsLoginOpen(false);

  const openRegisterModal = () => setIsRegisterOpen(true);
  const closeRegisterModal = () => setIsRegisterOpen(false);

  return (
    <nav className ={`container ${sticky? 'dark-nav': ''}`}>
        <img src = {logos} alt = "" className = "logo"/>
        <ul className={menu ? '' : 'hide-menu'}>
            <li><Link to='hero' smooth = {true} offset={0} duration = {500}>Home</Link></li>
            <li><Link to='show' smooth = {true} offset={-260} duration = {500}>Library</Link></li>
            <li onClick={openLoginModal}>Login</li>
            <li onClick={openRegisterModal}>Register</li>
            <li><Link to='about' smooth = {true} offset={-200} duration = {500}>About Us</Link></li>
            <li><Link to='contact' smooth = {true} offset={-260} duration = {500} className='btn'>Contact Us</Link></li>
        </ul>
        <img src = {menu_icon} alt='' className='menu-icon' onClick = {toggleMenu}/>
        {isLoginOpen && <Login closeModal={closeLoginModal} />}
        {isRegisterOpen && <Register closeModal={closeRegisterModal} />}
    </nav>
  )
}

export default Navbar
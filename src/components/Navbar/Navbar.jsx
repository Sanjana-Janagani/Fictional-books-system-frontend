import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logos from '../../assets/images/logos.png'
import menu_icon from '../../assets/images/menu_icon.png'
import { Link } from 'react-scroll';
import Login from '../Login/Login';
import Register from '../Register/Register';
import { Route, Routes, NavLink } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const[sticky, setSticky] = useState(false);

  const [menu, setMenu] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const openLoginModal = () => setIsLoginOpen(true);
  const closeLoginModal = () => setIsLoginOpen(false);

  const openRegisterModal = () => setIsRegisterOpen(true);
  const closeRegisterModal = () => setIsRegisterOpen(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 70 ? setSticky(true) : setSticky(false)
    })
  });

  const toggleMenu = () =>{
    menu? setMenu(false) : setMenu(true);
  };


  return (
    <nav className ={`container ${sticky? 'dark-nav': ''}`}>
        <img src = {logos} alt = "" className = "logo"/>
        <ul className={menu ? '' : 'hide-menu'}>
            <li><Link to='hero' smooth = {true} offset={0} duration = {500}>Home</Link></li>
            <li><Link to='show' smooth = {true} offset={-260} duration = {500}>Library</Link></li>
            <li>
            <NavLink to="login">Login</NavLink></li>
            <li>
            <NavLink to="register">Register</NavLink>
            </li>
            <li><Link to='about' smooth = {true} offset={-200} duration = {500}>About Us</Link></li>
            <li><Link to='contact' smooth = {true} offset={-260} duration = {500} className='btn'>Contact Us</Link></li>
        </ul>
        <img src = {menu_icon} alt='' className='menu-icon' onClick = {toggleMenu}/>
        
        <Routes>
        <Route
          path="login"
          element={<Login/>}
        ></Route>
        <Route
          path="register"
          element={<Register/>}
        ></Route>
      </Routes>
    </nav>
  )
}

export default Navbar
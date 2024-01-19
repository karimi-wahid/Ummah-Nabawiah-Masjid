import React from 'react'
import './style.css'
import logo from '../../images/logo.png'
const Navbar = () => {
  return (
    <>
        <nav>
          <input id="nav-toggle" type="checkbox"/>
          <div class="logo"><img src={logo} alt='logo' /></div>
          <ul class="links">
            <li><a href="#header">Home</a></li>
            <li><a href="#service">Services</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#event">Events</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#">Donate</a></li>
          </ul>
        <div><button><a href="#" >Donate</a></button></div>
        
        <label for="nav-toggle" class="icon-burger">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </label>
      </nav>
    </>
  )
}

export default Navbar
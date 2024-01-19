import React from 'react'
import './style.css'
import logo from '../../images/footer-logo.png'

const Footer = () => {
  return (
    <>
        <div className="container5">
            <div className="image"><img src={logo} alt='pic' /></div>
            <div className='contact'>
                <div><i class="fa-solid fa-location-dot"></i><span>2074 Kipling Ave Etobicoke, ON. M9W 4J9</span>
                </div>
                <div><i class="fa-solid fa-phone"></i><span>T: (416) 748-8033</span><span>F: (416) 740-1551</span>
                </div>
                <div><i class="fa-solid fa-envelope"></i><span>nfo@theunm.com</span></div>
            </div>
            <div className='social'>
                <p>Social Media</p>
                <div>
                    <a href='#' ><i class="fa-brands fa-facebook"></i></a>
                    <a href='#' ><i class="fa-brands fa-instagram"></i></a>
                    <a href='#' ><i class="fa-brands fa-youtube"></i></a>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Footer
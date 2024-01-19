import React from 'react'
import './style.css'
import frame from '../../images/Frame.png'

const Header = () => {
  return (
    <>
        <div className='container' id='header'>
            <div className='right_side'>
                <h1>Ummah <br /> Nabawiah <br /> Masjid</h1>
                <p>On the First Saturday of Every Month f.Lectures in Dari and English, Quran Competition for Kids, Youth Program coming soon and Free Food.</p>
            </div>
            <div className='left_side'>
                <div className='pray-time'>    
                    <ul>
                        <li>Fajr <span className='time'>06:30AM</span> <span>6:45AM</span></li>
                        <li>Zuhr <span className='time'>06:30AM</span> <span>6:45AM</span></li>
                        <li>Asr <span className='time'>06:30AM</span> <span>6:45AM</span></li>
                        <li>Maghrib <span className='time'>06:30AM</span> <span>6:45AM</span></li>
                        <li>Isha <span className='time'>06:30AM</span> <span>6:45AM</span></li>
                    </ul>
                </div>

                <div className='right-pray'>
                    <div className='juma'>
                        <div className='frame'><img src={frame} alt='juma logo' /></div>
                        <h6>Juma Mubarak</h6>
                    </div>

                    <div className='juma-time'>
                        <p><span></span><span className='lecture'>lecture</span> <span className='lecture'>Iqma</span></p>
                        <h3 className='juma1'>Juma 1 <span>06:30AM</span> <span>6:45AM</span></h3>
                        <h3 className='juma1'>Juma 2 <span>06:30AM</span> <span>6:45AM</span></h3>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Header
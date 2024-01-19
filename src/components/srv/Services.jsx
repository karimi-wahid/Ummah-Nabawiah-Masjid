import React from 'react'
import './style.css'
import frame from '../../images/Frame.png'

const Services = () => {
  return (
    <>
        <div className='container2'>
            <h1 className='heading'>Services</h1>
            <div className='main-part' id='service'>
                
                <div className='card'>
                    <div className='card-item'>
                        <div style={{background: '#D9E9B8'}} className='pic'><img src={frame} alt='card-pic' /></div>
                        <h1>Five Daily Prayer</h1>
                        <p>Ummah Nabawiah Masjid <br /> provides five daily prayers to the Muslim community.</p>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-item'>
                        <div style={{background:'#FFE17F'}} className='pic'><img src={frame} alt='card-pic' /></div>
                        <h1>Jumah(Friday) Prayer</h1>
                        <p>The Friday prayer khutba <br/> (sermon) is given in Dari (Farsi), Arabic and English.</p>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-item'>
                        <div style={{background: '#D9E9B8'}} className='pic'><img src={frame} alt='card-pic' /></div>
                        <h1>Funeral Services</h1>
                        <p>Nabawiah Masjid offers funeral assistance with a equipped mortuary and cold storage, aided by volunteers.</p>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-item'>
                        <div style={{background:'#FFE17F'}} className='pic'><img src={frame} alt='card-pic' /></div>
                        <h1>Taraweeh Prayers</h1>
                        <p>The schedule will be announced<br /> every year on the home page.</p>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-item'>
                        <div style={{background: '#D9E9B8'}} className='pic'><img src={frame} alt='card-pic' /></div>
                        <h1>Eid Prayers</h1>
                        <p>Ummah Nabawiah Masjid<br/> holds 3 eid prayers.</p>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-item'>
                        <div style={{background:'#FFE17F'}} className='pic'><img src={frame} alt='card-pic' /></div>
                        <h1>Nikah Services</h1>
                        <p>Ummah Nabawiah Masjid offers Nikah Services.Click <a href="#">here</a> for details.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Services
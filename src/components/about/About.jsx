import React from 'react'
import './style.css'
import aboutPic from '../../images/about.png'

const About = () => {
  return (
    <>
        <div className='container1' id='about'>
            <div className='main'>
                <div className='left-side'>
                    <p>/About</p>
                    <h1><strong>Ummah Nabawiah <br/> Masjid (UNM)</strong></h1>
                </div>
                <div className='right-side'>
                    <p>UNM is a registered non-profit charitable organization established in 1994. The current masjid building (approximately 28000 SF) was purchased in 1996 and converted to its current state in the last 12 years. The centre is located centrally and is easily accessible by all modes of transportation.</p>
                    <div className='address'>
                        <p><span className='span1'>Status</span><span className="span2">Non-Profit Organization</span></p>
                        <p><span className='span1'>Registration Status</span><span className="span2">Registered Charitable Organization</span></p>
                        <p><span className='span1'>Location</span><span className="span2">2074 Kipling Avenue, Toronto, Ontario, Canada M9W 4J9</span></p>
                    </div>
                </div>
            </div>

            <div className='main-pic'>
                <img src={aboutPic} alt='pic'/>


            </div>

        </div>
    </>
  )
}

export default About
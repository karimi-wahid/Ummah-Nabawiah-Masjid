import React from 'react'
import './style.css'
import pic from '../../images/campaign.png'

const Campaign = () => {
  return (
    <>
        <div className='container3'>
            <div className='body'>
                <div className='left-content'>
                    <h5>/UNM Campaign</h5>
                    <h1>UNM Campaign to Help the Victims of Herat's Earthquakes</h1>
                    <p>On October 13 and 15, UNM raised $13,300.00CDN to help the victims of Herat's earthquakes. May Allah SWT reward every single donor immensely, Ameen!The work of distributing your donations has already began. We will provide regular weekly updates as the work continues. Here are the initial pictures from week one.</p>
                    <button>Learn More</button>
                </div>
                <div className='right-pic'> <img src={pic} alt='pic' /></div>
            </div>
        </div>
    </>
  )
}

export default Campaign
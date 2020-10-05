import React from 'react'
import { Link } from 'react-router-dom'
import Borders from '../common/Borders'
import SpeechOne from '../common/SpeechOne'
import SpeechTwo from '../common/SpeechTwo'




const LandingPage: React.FC = () => {
  const [mouseXposition, setX] = React.useState('50%')

  // track mouse to affect lower section movement
  const trackMouse = (e: any) => {
    setX(e.clientX)
  }


  return (
    <div onMouseMove={trackMouse}>
      <Borders />
      <SpeechOne />
      <SpeechTwo />
      {/* START BUTTON */}
      <Link to='/decks' className='start-button'>Start Building</Link>
      {/* UPPER LANDING PAGE SECTION */}

      <div className='page-container'>
        <div className='landing-header'>
          <img src='https://res.cloudinary.com/dy7eycl8m/image/upload/v1600526924/logo_je8112.png' alt='logo' className='main-logo animate__zoomInUp animate__animated' />
          <h1 className='logo-subheader'>Super Quick Deck Builder</h1>
        </div>


        {/* LOWER LANDING PAGE SECTION */}
        {/* LEFT VIEW */}
        <div className='lower-landing background-standard'>
          <div className='left-view' style={{ width: mouseXposition }}>
            <div className='character-flex'>
              <img id='char1' className={characterEntranceClass} src='https://res.cloudinary.com/dy7eycl8m/image/upload/v1600523790/testChar_k5dhho.png' alt='hearthstone character one' />
              <img id='char2' className={characterEntranceClass} src='https://res.cloudinary.com/dy7eycl8m/image/upload/v1600627927/pngwave_56_xx0k3i.png' alt='hearthstone character two' />
              <img id='char3' className={characterEntranceClass} src='https://res.cloudinary.com/dy7eycl8m/image/upload/v1600627905/pngwave_55_xx49zi.png' alt='hearthstone character three' />
              <img id='char4' className={characterEntranceClass} src='https://res.cloudinary.com/dy7eycl8m/image/upload/v1600627906/pngwave_54_pkklmq.png' alt='hearthstone character four' />
            </div>
          </div>

          {/* RIGHT VIEW */}

          <div className='right-view'>
            <img className='card-image animate__bounceInRight animate__animated' src='https://res.cloudinary.com/dy7eycl8m/image/upload/v1600525467/cardTest_jeynmb.png' />
            <img className={parseInt(mouseXposition) < 900 ? bounceInAnimations : bounceOutAnimations} src={cardBackSource} />
            <img className={parseInt(mouseXposition) < 600 ? bounceInAnimations : bounceOutAnimations} src={cardBackSource} />
            <img className={parseInt(mouseXposition) < 300 ? bounceInAnimations : bounceOutAnimations} src={cardBackSource} />
            <img className={parseInt(mouseXposition) < 100 ? bounceInAnimations : bounceOutAnimations} src={cardBackSource} />
          </div>
        </div>
      </div>

    </div>
  )
}


//  CLASSNAMES
const characterEntranceClass = 'characters animate__bounceInUp animate__animated'
const bounceInAnimations = 'card-image animate__bounceInRight animate__animated'
const bounceOutAnimations = 'card-image animate__bounceOutRight animate__animated'
const cardBackSource = 'https://res.cloudinary.com/dy7eycl8m/image/upload/v1600525467/cardTest_jeynmb.png'

export default LandingPage
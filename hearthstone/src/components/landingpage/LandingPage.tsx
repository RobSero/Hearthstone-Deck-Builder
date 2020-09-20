import React from 'react'
import {Link} from 'react-router-dom'
import Borders from '../common/Borders'
import SpeechOne from '../common/SpeechOne'
import SpeechTwo from '../common/SpeechTwo'

const LandingPage: React.FC = () => {
  const [mouseXposition, setX] = React.useState('50%')

  const trackMouse = (e: any) => {
    setX(e.clientX)
  }


  return (
    <div onMouseMove={trackMouse}>
      <Borders />
      <SpeechOne />
      <SpeechTwo />
      <Link to='/decks' className='start-button'>Start Building</Link>
      <div className='page-container'>
        <div className='landing-header'>
          <img src='https://res.cloudinary.com/dy7eycl8m/image/upload/v1600526924/logo_je8112.png' alt='logo' className='main-logo animate__zoomInUp animate__animated' />
          <h1>Super Quick Deck Builder</h1>
        </div>

        <div className='left-view' style={{ width: mouseXposition }}>
          <div className='character-flex'>
            <img className='characters animate__bounceInUp animate__animated'src='https://res.cloudinary.com/dy7eycl8m/image/upload/v1600523790/testChar_k5dhho.png' alt='hearthstone character' />
            <img className='characters animate__bounceInUp animate__animated'src='https://res.cloudinary.com/dy7eycl8m/image/upload/v1600627927/pngwave_56_xx0k3i.png' alt='hearthstone character' />
            <img className='characters animate__bounceInUp animate__animated'src='https://res.cloudinary.com/dy7eycl8m/image/upload/v1600627905/pngwave_55_xx49zi.png' alt='hearthstone character' />
            <img className='characters animate__bounceInUp animate__animated'src='https://res.cloudinary.com/dy7eycl8m/image/upload/v1600627906/pngwave_54_pkklmq.png' alt='hearthstone character' />
           
            
          </div>

        </div>

        <div className='right-view'>
        
            <img className='card-image animate__bounceInRight animate__animated' src='https://res.cloudinary.com/dy7eycl8m/image/upload/v1600525467/cardTest_jeynmb.png' />

            <img className={parseInt(mouseXposition) < 900? 'card-image animate__bounceInRight animate__animated' : 'card-image animate__bounceOutRight animate__animated' } src='https://res.cloudinary.com/dy7eycl8m/image/upload/v1600525467/cardTest_jeynmb.png' /> 

            <img className={parseInt(mouseXposition) < 600? 'card-image animate__bounceInRight animate__animated' : 'card-image animate__bounceOutRight animate__animated' } src='https://res.cloudinary.com/dy7eycl8m/image/upload/v1600525467/cardTest_jeynmb.png' /> 

            <img className={parseInt(mouseXposition) < 300? 'card-image animate__bounceInRight animate__animated' : 'card-image animate__bounceOutRight animate__animated' } src='https://res.cloudinary.com/dy7eycl8m/image/upload/v1600525467/cardTest_jeynmb.png' /> 

            <img className={parseInt(mouseXposition) < 100? 'card-image animate__bounceInRight animate__animated' : 'card-image animate__bounceOutRight animate__animated' } src='https://res.cloudinary.com/dy7eycl8m/image/upload/v1600525467/cardTest_jeynmb.png' /> 
          </div>
        </div>

      
    </div>
  )
}

export default LandingPage
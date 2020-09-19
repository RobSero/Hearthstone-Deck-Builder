import React from 'react'
import CSS from 'csstype'

const LandingPage: React.FC = () => {
const [mouseXposition, setX] = React.useState('50%')

const trackMouse = (e:any) => {
  setX(e.clientX)
}

return (
  <div onMouseMove={trackMouse}>
    <div id='left-border'></div>
    <div id='right-border'></div>
    <div id='top-border'></div>
    <div id='bottom-border'></div>
    <button className='start-button'>Start Building</button>
    <div className='page-container'>
      <div className='landing-header'>
      </div>
      <div className='left-view' style={{width:mouseXposition}}>
      </div>
      
      <div className='right-view'>
      </div>
    </div>
  </div>
)
}

export default LandingPage
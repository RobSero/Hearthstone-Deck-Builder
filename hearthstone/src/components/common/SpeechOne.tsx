import React from 'react'



const SpeechOne = () => {
  const [speechBubbleVisible, toggleSpeech] = React.useState(false)

  React.useEffect(()=> {
    setTimeout(()=> {
      toggleSpeech(true)
    }, 1200)
  }, [])

  return (
    <img className={speechBubbleVisible ? 'speech animate__animated animate__zoomIn': 'speech hide animate__animated animate__zoomOut'} src='https://res.cloudinary.com/dy7eycl8m/image/upload/v1600631577/speech_tx8ycf.png'/>
  )
}

export default SpeechOne
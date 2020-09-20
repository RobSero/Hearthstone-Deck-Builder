import React from 'react'



const SpeechOne = () => {
  const [speechBubbleVisible, toggleSpeech] = React.useState(false)

  React.useEffect(()=> {
    setTimeout(()=> {
      toggleSpeech(true)
    }, 2000)
  }, [])

  return (
    <img className={speechBubbleVisible ? 'speech-right animate__animated animate__zoomIn': 'speech-right hide animate__animated animate__zoomOut'} src='https://res.cloudinary.com/dy7eycl8m/image/upload/v1600631980/speech_lmxa8y.png' />
    )
}

export default SpeechOne
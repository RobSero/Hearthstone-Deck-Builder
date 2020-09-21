import React from 'react'





function CardPopup({ cardPopUpSource }: any) {
  const [posX, setX] = React.useState(0)
  const [posY, setY] = React.useState(0)

  React.useEffect(() => {
    window.addEventListener('mousemove', setCardLocation)
  }, [])

  // if the mouse is below the half way point of the screen, the card popup position will show above the cursor so it is not cropped by the window edges
  const setCardLocation = (e: any) => {
    if (e.clientY < (window.innerHeight / 2)) {
      setY(e.clientY);
    } else {
      setY(e.clientY - 400);
    }
    if (e.clientX < (window.innerWidth / 2)) {
      setX(e.clientX);
    } else {
      setX(e.clientX - 250);
    }
  }

  // position of the card popup on hover
  const popupPosition = {
    top: posY - 10,
    left: posX - 10
  }

  if (!cardPopUpSource) {
    return null
  }
  return (
    <img src={cardPopUpSource}
      className='card-popup'
      alt='card-popup'
      style={popupPosition} />
  )
}

export default CardPopup
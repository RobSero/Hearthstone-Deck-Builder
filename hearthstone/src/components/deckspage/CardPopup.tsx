import React from 'react'





function CardPopup({cardPopUpSource}:any){
const [posX, setX] = React.useState(0)
const [posY, setY] = React.useState(0)
const [mouseInTopHalf, setMouseArea] = React.useState(true)


React.useEffect(()=> {
  window.addEventListener('mousemove', setCardLocation)
},[])


const setCardLocation = (e:any) => {
  if(e.clientY < (window.innerHeight / 2)){
    setY(e.clientY);
  }else {
    setY(e.clientY - 400);
  }
  if(e.clientX < (window.innerWidth / 2)){
    setX(e.clientX);
  }else {
    setX(e.clientX - 250);
  }
 
  
}
const popupPositionTopHalf = {
  top: posY - 10,
  left: posX - 10
}


  if(!cardPopUpSource) {
    return null
  }
  return (
    <img src={cardPopUpSource} 
    className='card-popup' 
    alt='card-popup'
    style={popupPositionTopHalf} />
  )
}

export default CardPopup
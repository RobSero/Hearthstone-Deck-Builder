import React from 'react'

interface Props {
  selectedCard: CardDetails
}

interface CardDetails {
  image:string
}

function ComparisonZone(props:Props){


  return (
    <div className='comparison-zone'>
      <div className='card-compare'>
        {!props.selectedCard.image? 
        <img className='main-card no-card' src="https://res.cloudinary.com/dy7eycl8m/image/upload/v1600525467/cardTest_jeynmb.png" alt='card one' /> :
        <img className='main-card' src={props.selectedCard.image} alt='card one' />
        }
        
      </div>
      <div className='central-info'>
        <p>Drag over to add to deck</p>
      </div>
      <div className='card-compare'>
        <img className='main-card no-card' src="https://res.cloudinary.com/dy7eycl8m/image/upload/v1600525467/cardTest_jeynmb.png" alt='card two' />
      </div>
    </div>
  )

}

export default ComparisonZone
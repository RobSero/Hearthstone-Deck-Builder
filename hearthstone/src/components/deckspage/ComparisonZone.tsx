import React from 'react'

interface Props {
  selectedCard: CardDetails,
  selectedUserCard: CardDetails,
  addCard(card:CardDetails): void
  removeCard(card:CardDetails): void
}

interface CardDetails {
  id: number,
  manaCost: number,
  image: string,
  rarityId: number,
  name: string
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
        <p onClick={()=> {props.addCard(props.selectedCard)}}>add to deck</p>
        <p onClick={()=> {props.removeCard(props.selectedUserCard)}}>remove deck</p>
      </div>
      <div className='card-compare'>
      {!props.selectedUserCard.image? 
        <img className='main-card no-card' src="https://res.cloudinary.com/dy7eycl8m/image/upload/v1600525467/cardTest_jeynmb.png" alt='card one' /> :
        <img className='main-card' src={props.selectedUserCard.image} alt='card one' />
        }
      </div>
    </div>
  )

}

export default ComparisonZone
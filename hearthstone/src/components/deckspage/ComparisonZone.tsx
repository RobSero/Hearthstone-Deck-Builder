import React from 'react'

interface Props {
  selectedCard: CardDetails,
  selectedClass: string,
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
  const [newCardAnimate, toggleAnimate] = React.useState(false)

const animateCard = () => {
  toggleAnimate(true)
  setTimeout(()=> {
    toggleAnimate(false)
  }, 500)
}

  return (
    <div className={props.selectedClass? 'comparison-zone animate__animated animate__fadeInUp':'card-list-container hide' }>
      <div className='card-compare'>
        {!props.selectedCard.image? 
        <img className='main-card no-card' src="https://res.cloudinary.com/dy7eycl8m/image/upload/v1600525467/cardTest_jeynmb.png" alt='card one' /> :
        <img className='main-card' src={props.selectedCard.image} alt='card one' style={newCardAnimate? animateFlash : removeAnimate} />
        }
        
      </div>
      <div className='central-info'>
        <img onClick={()=> {props.removeCard(props.selectedCard)}} src='https://res.cloudinary.com/dy7eycl8m/image/upload/v1600614566/redarrow_r1igpx.png' className='select-arrow'  />
        <br />
        <img onClick={()=> {props.addCard(props.selectedCard); animateCard()}} src='https://res.cloudinary.com/dy7eycl8m/image/upload/v1600614566/greenarrow_pe24eu.png' className='select-arrow' />
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


const animateFlash = {
  scale: 1.5
}
const removeAnimate = {}

export default ComparisonZone
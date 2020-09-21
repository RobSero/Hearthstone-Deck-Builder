import React from 'react'


interface Props {
  userDeck: Card[],
  selectedClass: string
  setCardSource(image:string): void,
  setUserCard(card:Card): void
}

interface Card {
  id: number,
  manaCost: number,
  image: string,
  rarityId: number,
  name: string
}

function UserCardList(props:Props){
  const [newCardAnimate, toggleAnimate] = React.useState(false)
    const {userDeck, setCardSource, setUserCard, selectedClass} = props

  React.useEffect(()=> {
    toggleAnimate(true)
    setTimeout(()=> {
      toggleAnimate(false)
    }, 500)
  },[userDeck])

    return (
      <div className={selectedClass? 'card-list-container animate__animated animate__fadeInRight glow-transition':'card-list-container hide glow-transition' } style={newCardAnimate? animateFlash : removeAnimate}>
        <h3 className='card-list-title' style={newCardAnimate? {fontWeight: 700} : {fontWeight: 400} }>Your Deck ({userDeck.length}/30)</h3>
        <ul className='card-list'>
          {userDeck.length !== 0 ? userDeck.map((card:Card) => {
            return (
              <li key={Math.random()}>
                <div className='card-container list-background' 
                onMouseOver={()=> {setCardSource(card.image)}} 
                  onMouseLeave={()=> {setCardSource('')}} 
                  onClick = {()=> {setUserCard(card)}}
                  style={newCardAnimate? animateCard : removeAnimate}
                  >
                  <div className='card-cost'>{card.manaCost}</div>
                  <p className='card-name' ><span className={`rarity-${card.rarityId}`} >{card.name}</span></p>
                </div>
              </li>
            )
          }) : <p className='warning-text'>Changing your class will reset your deck hehe. Cant be mixing!</p>} 
          
        </ul>
      </div>
    )
}

const animateFlash = {
  boxShadow: "0 0 40px white"
}
const removeAnimate = {}

const animateCard = {
  transform: 'scale(1.02)',
  boxShadow: "0 0 10px white"
}


export default UserCardList
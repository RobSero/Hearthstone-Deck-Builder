import React from 'react'


interface Props {
  userDeck: Card[],
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
    const {userDeck, setCardSource, setUserCard} = props
    return (
      <div className='card-list-container'>
        <h3 className='card-list-title'>Your Deck</h3>
        <ul className='card-list'>
          {userDeck ? userDeck.map((card:Card) => {
            return (
              <li key={Math.random()}>
                <div className='card-container'>
                  <div className='card-cost'>{card.manaCost}</div>
                  <p className='card-name' 
                  onMouseOver={()=> {setCardSource(card.image)}} 
                  onClick = {()=> {setUserCard(card)}}
                  ><span className={`rarity-${card.rarityId}`} >{card.name}</span></p>
                </div>
              </li>
            )
          }) : ''} 
        </ul>
      </div>
    )
  
}


export default UserCardList
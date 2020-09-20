import React from 'react'


interface Props {
  cardList: Card[],
  selectedClass: string,
  setCardSource(image:string): void
}

interface Card {
  id: number,
  manaCost: number,
  image: string,
  rarityId: number,
  name: string
}

function CardList(props:Props){
    const {cardList, selectedClass, setCardSource} = props
    return (
      <div className='card-list-container'>
        <h3 className='card-list-title'>Available <span className={`class-${selectedClass.toLowerCase()}`}>{selectedClass}</span> Cards</h3>
        <ul className='card-list'>
          {cardList ? cardList.map((card:Card) => {
            return (
              <li key={card.id}>
                <div className='card-container' >
                  <div className='card-cost'>{card.manaCost}</div>
                  <p className='card-name' onMouseOver={()=> {
                    setCardSource(card.image)
                  }}><span className={`rarity-${card.rarityId}`} >{card.name}</span></p>
                </div>
              </li>
            )
          }) : ''} 
        </ul>
      </div>
    )
  
}


export default CardList
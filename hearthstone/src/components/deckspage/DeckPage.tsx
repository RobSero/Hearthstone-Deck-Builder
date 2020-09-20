import React from 'react'
import ClassContainer from './ClassContainer'
import {getCardData} from '../../lib/api'
import CardList from './CardList'
import ComparisonZone from './ComparisonZone'
import UserCardList from './UserCardList'
import CardPopup from './CardPopup'

interface CardDetails {
  id: number,
  manaCost: number,
  image: string,
  rarityId: number,
  name: string
}

const DeckPage: React.FC = () => {
const [cardList, setCards] = React.useState([{id: 0, name:'', manaCost: 0, rarityId: 1, image: ''}])
const [selectedClass, setClass] = React.useState('none')
const [cardPopUpSource, setCardSource] = React.useState('')
const [selectedCard, setCard] = React.useState<CardDetails>({id: 0, name:'', manaCost: 0, rarityId: 1, image: ''})
const [selectedUserCard, setUserCard] = React.useState<CardDetails>({id: 0, name:'', manaCost: 0, rarityId: 1, image: ''})
const [userDeck, setUserDeck] = React.useState<CardDetails[]>([{id: 0, name:'', manaCost: 0, rarityId: 1, image: ''}])

const classSelected = async(e:string) => {
  console.log(e);
  try {
    const res = await getCardData(e)
    const cleanedCardList = res.data.cards.map((card:CardDetails) => {
      return {
        id: card.id,
        name: card.name,
        manaCost: card.manaCost,
        rarityId: card.rarityId,
        image: card.image
      }
    })
    setCards(cleanedCardList)
    setClass(e.charAt(0).toUpperCase() + e.slice(1))
  } catch(err) {
    console.log(err.message);
    
  }
}

const addCard = (newCard:CardDetails) => {
  setUserDeck([...userDeck, newCard])
}

const removeCard = (removedCard:CardDetails) => {
    const removedCardIndex = userDeck.findIndex((card)=> {return card.id === removedCard.id})
    console.log(removedCardIndex);
    const newUserDeck = userDeck.filter((card,index) => {
      return  index !== removedCardIndex
    })
    setUserDeck(newUserDeck)
}

return (
  <div>
     <div id='left-border'></div>
      <div id='right-border'></div>
      <div id='top-border'></div>
      <div id='bottom-border'></div>
      <div className='page-container background-standard'>
        {/* CARD IMAGE POPUP */}
        <CardPopup cardPopUpSource={cardPopUpSource} />
        {/* CLASSES SECTION */}
     <ClassContainer classSelected = {classSelected} />

    {/* CARD LIST SECTION */}
    <div className='decks-flex'>
    <CardList cardList={cardList} selectedClass={selectedClass} setCardSource={setCardSource} setCard={setCard}  />
  <ComparisonZone selectedCard={selectedCard} selectedUserCard={selectedUserCard}  addCard={addCard} removeCard={removeCard}/>
  <UserCardList userDeck={userDeck} setCardSource={setCardSource} setUserCard={setUserCard} />
    </div>
   
      </div>
  </div>
)
}

export default DeckPage


//  click on class to fire function
// function get 
import React from 'react'
import ClassContainer from './ClassContainer'
import {getCardData} from '../../lib/api'
import CardList from './CardList'
import ComparisonZone from './ComparisonZone'
import UserCardList from './UserCardList'
import CardPopup from './CardPopup'
import Borders from '../common/Borders'
import { Alert } from 'antd';
import openNotification from '../common/Notification'


interface CardDetails {
  id: number,
  manaCost: number,
  image: string,
  rarityId: number,
  name: string,
  cardTypeId? : number
}



const DeckPage: React.FC = () => {
const [cardList, setCards] = React.useState([{id: 0, name:'', manaCost: 0, rarityId: 1, image: ''}])
const [selectedClass, setClass] = React.useState('')
const [cardPopUpSource, setCardSource] = React.useState('')
const [selectedCard, setCard] = React.useState<CardDetails>({id: 0, name:'', manaCost: 0, rarityId: 1, image: ''})
const [selectedUserCard, setUserCard] = React.useState<CardDetails>({id: 0, name:'', manaCost: 0, rarityId: 1, image: ''})
const [userDeck, setUserDeck] = React.useState<CardDetails[]>([{id: 0, name:'', manaCost: 0, rarityId: 1, image: ''}])

const classSelected = async(e:string) => {
  setUserDeck([])
  setCard({id: 0, name:'', manaCost: 0, rarityId: 1, image: ''})
  console.log(e);
  try {
    const res = await getCardData(e)
    const filteredList = res.data.cards.filter((card:CardDetails) => {
      return card.cardTypeId !== 3
    })
    const cleanedCardList = filteredList.map((card:CardDetails) => {
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
  const counter = userDeck.filter(card => {
    return card.name === newCard.name
  })
  if (counter.length > 1) {
    openNotification()
  } else {
    setUserDeck([...userDeck, newCard])
  }
}

const removeCard = (removedCard:CardDetails) => {
    const removedCardIndex = userDeck.findIndex((card)=> {return card.id === removedCard.id})
    console.log(removedCardIndex);
    const newUserDeck = userDeck.filter((card,index) => {
      return index !== removedCardIndex
    })
setUserDeck(newUserDeck)
if(newUserDeck.findIndex((card)=> {return card.id === removedCard.id}) === -1) {
  setUserCard({id: 0, name:'', manaCost: 0, rarityId: 1, image: ''})
}
}


return (
  <div>
     <Borders />
      <div className='page-container background-standard'>
        <div className='border-shadow'>
        {/* CARD IMAGE POPUP */}
        <CardPopup cardPopUpSource={cardPopUpSource} />
        {/* CLASSES SECTION */}
     <ClassContainer classSelected = {classSelected} />

    {/* CARD LIST SECTION */}
    <div className='decks-flex'>
    <CardList cardList={cardList} selectedClass={selectedClass} setCardSource={setCardSource} setCard={setCard}  />
  <ComparisonZone selectedClass={selectedClass} selectedCard={selectedCard} selectedUserCard={selectedUserCard}  addCard={addCard} removeCard={removeCard}/>
  <UserCardList selectedClass={selectedClass} userDeck={userDeck} setCardSource={setCardSource} setUserCard={setUserCard} />

    </div>
   
      </div>
      </div>
  </div>
)
}

export default DeckPage


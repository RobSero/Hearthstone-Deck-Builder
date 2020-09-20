import React from 'react'
import ClassContainer from './ClassContainer'
import {getCardData} from '../../lib/api'
import CardList from './CardList'
import ComparisonZone from './ComparisonZone'

interface CardDetails {
  name: string
}


const DeckPage: React.FC = () => {
const [cardList, setCards] = React.useState([{id: 0, name:'', manaCost: 0, rarityId: 1, image: ''}])
const [selectedClass, setClass] = React.useState('none')
const [cardPopUpSource, setCardSource] = React.useState('')
const [selectedCard, setCard] = React.useState({image:''})
const [userDeck, setUserDeck] = React.useState([{id: 0, name:'', manaCost: 0, rarityId: 1, image: ''}])

const classSelected = async(e:string) => {
  console.log(e);
  try {
    const res = await getCardData(e)
    setCards(res.data.cards)
    setClass(e.charAt(0).toUpperCase() + e.slice(1))
  } catch(err) {
    console.log(err.message);
    
  }
}


return (
  <div>
     <div id='left-border'></div>
      <div id='right-border'></div>
      <div id='top-border'></div>
      <div id='bottom-border'></div>
      <div className='page-container background-standard'>
        {/* CARD IMAGE POPUP */}
        <img src={cardPopUpSource} className='card-popup' />
        {/* CLASSES SECTION */}
     <ClassContainer classSelected = {classSelected} />

    {/* CARD LIST SECTION */}
    <div className='decks-flex'>
    <CardList cardList={cardList} selectedClass={selectedClass} setCardSource={setCardSource} setCard={setCard}  />
  <ComparisonZone selectedCard={selectedCard} />
  <CardList cardList={cardList} selectedClass={selectedClass} setCardSource={setCardSource} setCard={setCard} />
    </div>
   
      </div>
  </div>
)
}

export default DeckPage


//  click on class to fire function
// function get 
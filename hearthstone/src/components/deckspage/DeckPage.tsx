import React from 'react'
import ClassContainer from './ClassContainer'
import {getCardData} from '../../lib/api'

interface CardDetails {
  name: string
}


const DeckPage: React.FC = () => {
const [cardList, setCards] = React.useState([{name:'', manaCost: '', rarityId: 1, image: ''}])
const [selectedClass, setClass] = React.useState('none')
const [cardPopUpSource, setCardSource] = React.useState('')

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
    <div className='card-list-container'>
      <h3 className='card-list-title'>Available <span className={`class-${selectedClass.toLowerCase()}`}>{selectedClass}</span> Cards</h3>
    <ul className='card-list'>
      {cardList? cardList.map(card => {
        return (
          <li>
          <div className='card-container' >
        <div className='card-cost'>{card.manaCost}</div>
          <p className='card-name' onMouseOver={()=> {setCardSource(card.image)}}><span className={`rarity-${card.rarityId}`} >{card.name}</span></p>
          </div>
          </li>
        )
      }): ''} 
    </ul>
    </div>

      </div>
  </div>
)
}

export default DeckPage


//  click on class to fire function
// function get 
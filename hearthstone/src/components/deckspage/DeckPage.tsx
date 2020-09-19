import React from 'react'
import ClassContainer from './ClassContainer'
import {getCardData} from '../../lib/api'

const DeckPage: React.FC = () => {
const [testdata, setCards] = React.useState(undefined)


const classSelected = async(e:string) => {
  console.log(e);
  try {
    const res = await getCardData(e)
    setCards(res.data)
    
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
        {/* CLASSES SECTION */}
     <ClassContainer classSelected = {classSelected} />

      </div>
  </div>
)
}

export default DeckPage


//  click on class to fire function
// function get 
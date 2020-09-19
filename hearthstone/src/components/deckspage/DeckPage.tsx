import React from 'react'
import ClassContainer from './ClassContainer'


const DeckPage: React.FC = () => {



const classSelected = (e:string) => {
  console.log(e);
  
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
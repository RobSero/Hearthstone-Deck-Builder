import React from 'react'
import {Switch, BrowserRouter, Route} from 'react-router-dom'
import LandingPage from './components/landingpage/LandingPage'
import DeckPage from './components/deckspage/DeckPage'

const App: React.FC = () => {
  return (
    <BrowserRouter>
    
    <Switch>
      <Route exact path='/' component={LandingPage}/>
      <Route exact path='/decks' component={DeckPage}/>
    </Switch>
    </BrowserRouter>
  )
}

export default App

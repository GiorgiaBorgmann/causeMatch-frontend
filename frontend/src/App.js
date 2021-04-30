import React from 'react'
import ControlPanel from './components/ControlPanel'
import CardsContainer from './components/CardsContainer'
import './style/app.css'

function App() {
  return (
    <div className="App">
      <ControlPanel/>
      <CardsContainer/>
    </div>
  );
}

export default App;

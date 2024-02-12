import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
    <div>
    <h1>How much damage does a maxed-out MK-7 assault rifle do?</h1>
    
    <ul>
      <div className="coolGrid">
          <button className="answerChoices">20</button>
          <button className="answerChoices">21</button>
          <button className="answerChoices">22</button>
          <button className="answerChoices">23</button>
      </div>
    </ul>

    </div>
    <button className="resetButton">Reset</button>
    </>
  )
}

export default App

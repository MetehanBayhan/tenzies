import React from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from 'react-confetti'

export default function App(){ 

  const [dice, setDice] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)
   
  React.useEffect(()=> {
    const allHeld = dice.every(die => die.isHeld)
    const allSame = dice.every(die => die.value === dice[0].value)
    
    if(allHeld && allSame){
      setTenzies(true)
    }
  },[dice])


  function allNewDice(){
    const diceArray = Array(10).fill(null).map(() => (
      {
        id: nanoid(),
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
      }
    ));
    return diceArray
  }

  function generateNewDie(){
    return {
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
    }
  }
  
  function holdDice(id){
    setDice(oldDiceArray => {
      return oldDiceArray.map((die) => {
        return die.id === id ? {...die, isHeld:!die.isHeld} : die
      })
    })
  } 

  const diceElements = dice.map((die)=>
    <Die 
      value={die.value} 
      key={die.id}
      holdDice={()=> {holdDice(die.id)}}
      isHeld={die.isHeld}
    />
  )

  function rollDice(){
    if(!tenzies){
      setDice(oldDiceArray => oldDiceArray.map((die)=>{
          return die.isHeld  ? die : generateNewDie()
        }))
    } else {
      setTenzies(false)
      setDice(allNewDice())
    }
  }
 
  return (
    <main>
      {
        tenzies &&
      <Confetti
        width={600}
        height={600}
        numberOfPieces={31}
      />
      }
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        { tenzies ?
          "You Won!" : 
          "Roll until all dice are the same. Click each die to freeze it at its current value between rolls."
        }
      </p>
      <div className="die-wrapper">
        {diceElements}
      </div>
      <button
        onClick={rollDice}
      >
        {tenzies ? `New Game` : `Roll Dice`}
      </button>

    </main>
  )
}
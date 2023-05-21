import React from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";

export default function App(){ 

  const [dice, setDice] = React.useState(allNewDice())

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
    if(dice){
      setDice(oldDiceArray => {
        return oldDiceArray.map((die)=>{
          return die.isHeld === false ? 
          {...die, value:Math.ceil(Math.random() * 6)}: die
        })
      })
    }else{
      setDice(allNewDice())
    }
  }
 
  return (
    <main>
      <div className="die-wrapper">
        {diceElements}
      </div>
      <button
        onClick={rollDice}
      >
        Roll Dice
      </button>

    </main>
  )
}
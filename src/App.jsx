import React from "react";
import Die from "./components/Die";

export default function App(){ 

  const [dice, setDice] = React.useState(allNewDice())

  function allNewDice(){
    const diceArray = Array(10).fill(null).map(() => (
      Math.ceil(Math.random() * 6)
    ));
    return diceArray
  }

  const diceElements = dice.map((die)=> <Die value={die} />)

  return (
    <main>
      <div className="die-wrapper">
        {/* {diceArray} */}
      </div>
    </main>
  )
}
import React from "react";
import "./die.css";

export default function Die(props){
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "#FFF"
  }

  const pipCount = Array(props.value).fill(null).map((_,index)=>{
    return (<span className="pip" key={index}></span>)
  })

  return (
    <div 
    className={!props.isHeld && props.shake ? `die shake-${Math.ceil(Math.random()*3)}` : 'die'}
      style={styles} 
      onClick={props.holdDice}
    >
      <div className="face">
        {pipCount}
      </div>
    </div>
  )
}
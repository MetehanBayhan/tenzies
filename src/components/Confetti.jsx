import React from 'react'
import Confetti from 'react-confetti'

export default function Animation(){

  return (
    <Confetti
      width={600}
      height={600}
      numberOfPieces={31}
    />
  )
}
import React from 'react'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const Stonepaper = () => {
  const [player1, setPlayer1] = useState("")
  const [player2, setPlayer2] = useState("")
  const [result, setResult] = useState("")

  function playGame() {
    if (player1 === player2) {
      setResult("It's a Tie!")
    }

    else if (player1 === "stone" && player2 === "paper") {
      setResult("Player 2 wins")
    }
    else if (player1 === "paper" && player2 === "stone") {
      setResult("Player 1 wins")
    }

    else if (player1 === "scissors" && player2 === "paper") {
      setResult("Player 1 wins")
    }
    else if (player1 === "paper" && player2 === "scissors") {
      setResult("Player 2 wins")
    }

    else if (player1 === "stone" && player2 === "scissors") {
      setResult("Player 1 wins")
    }
    else if (player1 === "scissors" && player2 === "stone") {
      setResult("Player 2 wins")
    }

  }

  return (
    <div style={{textAlign:"center"}}>
      <h1>Stone Paper Scissors Game</h1>
      <h3>Player 1</h3>
      <Button className="m-3" onClick={() => setPlayer1("stone")}>Stone</Button>
      <Button className="m-3" onClick={() => setPlayer1("paper")}>Paper</Button>
      <Button className="m-3" onClick={() => setPlayer1("scissors")}>Scissors</Button>

      <h3>Player1:{player1}</h3>

      <h3>Player 2</h3>
      <Button className="m-3" onClick={() => setPlayer2("stone")}>Stone</Button>
      <Button className="m-3" onClick={() => setPlayer2("paper")}>Paper</Button>
      <Button className="m-3" onClick={() => setPlayer2("scissors")}>Scissors</Button><br></br>

      <Button className="m-3" onClick={playGame}>Result</Button>
      
      <h3>Player2:{player2}</h3>
      <h1>{result}</h1>
    </div>
  )
}

export default Stonepaper

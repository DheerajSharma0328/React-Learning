import { useState } from "react"

export default function LudoBoard() {

    let [moves, setMoves] = useState(
        {
            red: 0,
            blue: 0,
            yellow: 0,
            green: 0
        }
    )


    let updateRed = ()=>{

        setMoves((prevMoves)=>{
            return {...prevMoves, red: prevMoves.red + 1}
        })

    }
    let updateblue = ()=>{

        setMoves((prevMoves)=>{
            return {...prevMoves, blue: prevMoves.blue + 1}
        })

    }
    let updateyellow = ()=>{

        setMoves((prevMoves)=>{
            return {...prevMoves, yellow: prevMoves.yellow + 1}
        })

    }
    let updategreen = ()=>{

        setMoves((prevMoves)=>{
            return {...prevMoves, green: prevMoves.green + 1}
        })

    }

  return (
    <div>
        <p>Game Begin</p>

        <div className="board">
            <p>Red Moves = {moves.red} </p>
            <button style={{backgroundColor: "red"}} onClick={updateRed}>+1</button>

            <p>Blue Moves = {moves.blue}</p>
            <button style={{backgroundColor: "blue"}} onClick={updateblue}>+1</button>

            <p>Yellow Moves = {moves.yellow}</p>
            <button style={{backgroundColor: "yellow"}} onClick={updateyellow}>+1</button>

            <p>Green Moves = {moves.green}</p>
            <button style={{backgroundColor: "green"}} onClick={updategreen}>+1</button>
        </div>
    </div>
  )
}

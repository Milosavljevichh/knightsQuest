'use client'
import TextContent from "../textContent"
import ChessBoard from "../chessBoard"
import { useState } from "react"

export default function HomePage() {
  const [movesMade, setMovesMade] = useState(0)
  const [path, setPath] = useState([])

  function updateStates(moves,path){
    setMovesMade(moves)
    setPath(path)
  }

    return (
        <main className="flex items-center justify-between px-56 py-26 w-[100vw]">
            <TextContent movesMade={movesMade} path={path} />
            <ChessBoard updateParentStates={updateStates} />
        </main>
    )
}
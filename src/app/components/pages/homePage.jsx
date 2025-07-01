'use client'
import TextContent from "../textContent"
import ChessBoard from "../chessBoard"
import ActionButtons from "../actionButtons"
import { useState } from "react"

export default function HomePage() {
  const [movesMade, setMovesMade] = useState(0)
  const [path, setPath] = useState([])

  function updateStates(moves,path){
    setMovesMade(moves)
    setPath(path)
  }

    return (
        <main className="flex items-center justify-between gap-16 max-w-6xl py-26 w-[100vw] m-auto">
          <section className="w-fit">
            <TextContent movesMade={movesMade} path={path} />
            <ActionButtons />
          </section>
            <ChessBoard updateParentStates={updateStates} />
        </main>
    )
}
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
        <main className="flex flex-col lg:flex-row items-center justify-between lg:justify-center gap-8 max-w-6xl py-26 px-10 w-[100vw] m-auto ">
          <section className="w-fit p-6 lg:max-w-[524px]">
            <TextContent movesMade={movesMade} path={path} />
            <ActionButtons />
          </section>
          <section className="w-full p-6 max-w-[524px]">
            <ChessBoard updateParentStates={updateStates} />
          </section>
        </main>
    )
}
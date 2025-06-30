'use client'
import KnightPiece from "./knightPiece";
import { useState, useEffect } from "react";
import knightMoves from "../logic/knightMoves";
import printShortestPath from "../logic/printShortestPath";

export default function ChessBoard() {

    const [activeTile, setActiveTile] = useState(null)
    const [chessboard, setChessboard] = useState([
        [0, 0, 0, 0, 0, 0, 0, 0], //0
        [0, 0, 0, 0, 0, 0, 0, 0], //1
        [0, 0, 0, 0, 0, 0, 0, 0], //2
        [0, 0, 0, 0, 0, 0, 0, 0], //3
        [0, 0, 0, 0, 0, 0, 0, 0], //4
        [0, 0, 0, 0, 0, 0, 0, 0], //5
        [0, 0, 0, 0, 0, 0, 0, 0], //6
        [0, 0, 0, 0, 0, 0, 0, 0]  //7
    ])
    const [startingTile, setStartingTile] = useState(null)
    const [endingTile, setEndingTile] = useState(null)
    const [isFindingPath, setIsFindingPath] = useState(false)

    useEffect(() => {
        if (startingTile && endingTile && !isFindingPath) {
            findPath()
        }
    }, [endingTile])

    function activateTile(x, y, tile) {
        let newChessboard = [
            [0, 0, 0, 0, 0, 0, 0, 0], //0
            [0, 0, 0, 0, 0, 0, 0, 0], //1
            [0, 0, 0, 0, 0, 0, 0, 0], //2
            [0, 0, 0, 0, 0, 0, 0, 0], //3
            [0, 0, 0, 0, 0, 0, 0, 0], //4
            [0, 0, 0, 0, 0, 0, 0, 0], //5
            [0, 0, 0, 0, 0, 0, 0, 0], //6
            [0, 0, 0, 0, 0, 0, 0, 0]  //7
        ]
        newChessboard[x][y] = 1
        setChessboard(newChessboard)
    }

    function setStartAndEnd(x, y) {
        if (isFindingPath) { return }

        if (!startingTile) {
            let tile = [x, y]
            activateTile(x, y)
            setStartingTile(tile)
        } else if (!endingTile) {
            let tile = [x, y]
            setEndingTile(tile)
        }
    }

    function findPath() {
        setIsFindingPath(true)
        const [moves, path, end] = knightMoves(startingTile, endingTile)
        printShortestPath(moves, path, end)
        console.log(path)
        renderPath(path, end)
        // resetBoardState()
    }

    function resetBoardState() {
        setStartingTile(null)
        setEndingTile(null)
        setIsFindingPath(false)
        let newChessboard = [
            [0, 0, 0, 0, 0, 0, 0, 0], //0
            [0, 0, 0, 0, 0, 0, 0, 0], //1
            [0, 0, 0, 0, 0, 0, 0, 0], //2
            [0, 0, 0, 0, 0, 0, 0, 0], //3
            [0, 0, 0, 0, 0, 0, 0, 0], //4
            [0, 0, 0, 0, 0, 0, 0, 0], //5
            [0, 0, 0, 0, 0, 0, 0, 0], //6
            [0, 0, 0, 0, 0, 0, 0, 0]  //7
        ]
        setChessboard(newChessboard)
    }

    function renderPath(path, end){
        let delay = 0
        path.slice().reverse().forEach((coordinates, index)=>{
            // if (index === path.length - 1) return;
            setTimeout(()=>{
                let newBoard = [...chessboard]
                if (index >= 1) {
                    newBoard[path[path.length-index][0]][path[path.length-index][1]] = 2
                }
                console.log(index)
                newBoard[coordinates[0]][coordinates[1]] = 1
                setChessboard(newBoard)
            },delay)
            delay += 1000
        })
        // newBoard[end[0]][end[1]] = 2
    }

    function renderTiles(row, isLastRow, index) {
        return (row.map((tile, tileIndex) => {
            switch (tile) {
                case 0:
                    return (<div
                        key={'tile' + tileIndex}
                        className={
                            "w-[64px] h-[64px] " + (index % 2 !== 0 ? tileIndex % 2 !== 0 ? "bg-black" : "bg-amber-50" : tileIndex % 2 !== 0 ? "bg-amber-50" : "bg-black") + " hover:cursor-pointer relative"
                        }
                        onClick={(e) => { setStartAndEnd(index, tileIndex) }}
                    >
                        {isLastRow && <span className="absolute left-1/2 -translate-x-1/2 -bottom-[25px] text-white">{String.fromCharCode(97 + tileIndex)}</span>}
                    </div>)
                case 1:
                 return (<div
                    key={'tile' + tileIndex}
                    className={
                        " w-[64px] h-[64px] bg-[#97B067] border-4 border-solid border-[#437057] hover:cursor-pointer relative"
                    }
                    onClick={(e) => { setStartAndEnd(index, tileIndex) }}
                >
                    {isLastRow && <span className="absolute left-1/2 -translate-x-1/2 -bottom-[25px] text-white">{String.fromCharCode(97 + tileIndex)}</span>}
                    <KnightPiece />
                </div>)
                case 2:
                    return (<div
                        key={'tile' + tileIndex}
                        className={
                            "w-[64px] h-[64px] hover:cursor-pointer relative bg-[#E14434] border-4 border-solid border-[#B22222]"
                        }
                        onClick={(e) => { setStartAndEnd(index, tileIndex) }}
                    >
                        {isLastRow && <span className="absolute left-1/2 -translate-x-1/2 -bottom-[25px] text-white">{String.fromCharCode(97 + tileIndex)}</span>}
                    </div>)
            }
        }))
    }

    return (
        <section id="chessboard" className="w-fit rounded-3xl flex flex-col-reverse">
            {
                chessboard.map((row, index) => {
                    let isLastRow = index === 0
                    return (
                        <div key={'row' + index} className="flex w-fit relative">
                            <span className="absolute top-1/2 -translate-y-1/2 -left-[25px] text-white">{index + 1}</span>
                            {renderTiles(row, isLastRow, index)}
                        </div>
                    )
                })
            }
        </section>
    )
}
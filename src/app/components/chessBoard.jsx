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
        if (startingTile && endingTile && !isFindingPath){
            findPath()
        }
    }, [endingTile])

    function activateTile(x,y, tile) {
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

    function setStartAndEnd(x,y){
        if (isFindingPath) {return}

        if (!startingTile) {
            let tile = [x,y]
            activateTile(x,y)
            setStartingTile(tile)
        } else if (!endingTile) {
            let tile = [x,y]
            setEndingTile(tile)
        }
    }

    function findPath(){
        setIsFindingPath(true)
        const [moves,path,end] = knightMoves(startingTile, endingTile)
        printShortestPath(moves,path,end)
        setStartingTile(null)
        setEndingTile(null)
        setIsFindingPath(null)
    }

    return (
        <section id="chessboard" className="w-fit rounded-3xl overflow-hidden flex flex-col-reverse">
            {
                chessboard.map((row, index) => (
                    <div key={'row' + index} className="flex w-fit">
                        {
                            row.map((tile, tileIndex) => (
                                tile === 0 ?
                                <div
                                    key={'tile' + tileIndex}
                                    className={
                                        "w-[64px] h-[64px] " + (index % 2 !== 0 ? tileIndex % 2 !== 0 ? "bg-black" : "bg-amber-50" : tileIndex % 2 !== 0 ? "bg-amber-50" : "bg-black") + " hover:cursor-pointer"
                                    }
                                    onClick={(e)=>{setStartAndEnd(index, tileIndex)}}
                                    >

                                </div>
                                :
                                <div
                                    key={'tile' + tileIndex}
                                    className={
                                        "w-[64px] h-[64px] " + (index % 2 !== 0 ? tileIndex % 2 !== 0 ? "bg-black" : "bg-amber-50" : tileIndex % 2 !== 0 ? "bg-amber-50" : "bg-black") + " hover:cursor-pointer relative"
                                    }
                                    onClick={(e)=>{setStartAndEnd(index, tileIndex)}}
                                    >
                                        <KnightPiece />
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </section>
    )
}
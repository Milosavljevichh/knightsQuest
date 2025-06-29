'use client'
import KnightPiece from "./knightPiece";
import { useState, useEffect } from "react";

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

    useEffect(() => {

    }, [activeTile])

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
                                    onClick={(e)=>{activateTile(index, tileIndex)}}
                                    >

                                </div>
                                :
                                <div
                                    key={'tile' + tileIndex}
                                    className={
                                        "w-[64px] h-[64px] " + (index % 2 !== 0 ? tileIndex % 2 !== 0 ? "bg-black" : "bg-amber-50" : tileIndex % 2 !== 0 ? "bg-amber-50" : "bg-black") + " hover:cursor-pointer relative"
                                    }
                                    onClick={(e)=>{activateTile(index, tileIndex)}}
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
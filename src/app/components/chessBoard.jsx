export default function ChessBoard(){
    const chessboard = [
        [0,0,0,0,0,0,0,0], //0
        [0,0,0,0,0,0,0,0], //1
        [0,0,0,0,0,0,0,0], //2
        [0,0,0,0,0,0,0,0], //3
        [0,0,0,0,0,0,0,0], //4
        [0,0,0,0,0,0,0,0], //5
        [0,0,0,0,0,0,0,0], //6
        [0,0,0,0,0,0,0,0]  //7
    ];
    return (
        <section id="chessboard">
            {
                chessboard.map((row,index)=>(
                    <div key={'row'+index} className="row">
                        {
                            row.map((tile,tileIndex)=>(
                                <div key={'tile'+tileIndex} className={index % 2 !== 0 ? tileIndex % 2 !== 0 ? "black" : "white" : tileIndex % 2 !== 0 ? "white" : "black"}>

                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </section>
    )
}
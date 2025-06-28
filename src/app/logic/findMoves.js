//function which finds knights available moves
export default function findMoves(x, y) {
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
    let arr = [];

    if(chessboard[x+2] !== undefined && chessboard[x+2][y+1] !== undefined) arr.push([x+2, y+1]);
    if(chessboard[x+2] !== undefined && chessboard[x+2][y-1] !== undefined) arr.push([x+2, y-1]);
    if(chessboard[x-2] !== undefined && chessboard[x-2][y+1] !== undefined) arr.push([x-2, y+1]);
    if(chessboard[x-2] !== undefined && chessboard[x-2][y-1] !== undefined) arr.push([x-2, y-1]);
    if(chessboard[x+1] !== undefined && chessboard[x+1][y+2] !== undefined) arr.push([x+1, y+2]);
    if(chessboard[x-1] !== undefined && chessboard[x-1][y+2] !== undefined) arr.push([x-1, y+2]);
    if(chessboard[x+1] !== undefined && chessboard[x+1][y-2] !== undefined) arr.push([x+1, y-2]);
    if(chessboard[x-1] !== undefined && chessboard[x-1][y-2] !== undefined) arr.push([x-1, y-2]);
    
    return arr;
};
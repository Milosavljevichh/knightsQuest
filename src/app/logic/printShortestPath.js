
export default function printShortestPath(moves, path, end){
    //printing the solution
    console.log(`You made it in ${moves} moves! Here's your path:`)
    for (let i = path.length-1; i>=0; i--) {
        console.log(path[i])
    };
    console.log('---------------------')
    console.log(end)
    console.log('')
}
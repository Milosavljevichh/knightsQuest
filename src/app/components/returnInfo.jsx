export default function ReturnInfo({ movesMade = '#', path = [] }) {

    function createChessboardCoordinate(tile){
        //[1,0]
        let coordinate = ''
        coordinate += String.fromCharCode(97 + tile[1]) + (tile[0] + 1)
        return coordinate   
    }

    return (
        <div>
            <p>Your knight made {movesMade} moves!</p>
            <ul>
                <li>The path it took is:</li>
                {
                    path && path.slice().reverse().map((tile,index) => {
                        if (index === 0) return;
                        else return <li key={JSON.stringify(tile)}>{createChessboardCoordinate(tile)}</li>
                    })
                }
            </ul>
        </div>
    )
}
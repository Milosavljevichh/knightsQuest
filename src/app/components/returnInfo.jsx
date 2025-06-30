export default function ReturnInfo({ movesMade = '#', path = [] }) {
    return (
        <div>
            <p>Your knight made {movesMade} moves!</p>
            <ul>
                <li>The path it took is:</li>
                {
                    path && path.slice().reverse().map((tile,index) => {
                        if (index === 0) return;
                        else return <li key={JSON.stringify(tile)}>{JSON.stringify(tile)}</li>
                    })
                }
            </ul>
        </div>
    )
}
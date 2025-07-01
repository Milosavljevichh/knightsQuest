import GradientText from "./ui/GradientText"

export default function ReturnInfo({ movesMade = '#', path = [] }) {

    function createChessboardCoordinate(tile) {
        let coordinate = ''
        coordinate += String.fromCharCode(97 + tile[1]) + (tile[0] + 1)
        return coordinate
    }

    return (
        <div className="mt-6">
            <p className="text-xl flex">Your knight made {<GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
                className="flex"
            >
                {movesMade} </GradientText>} moves!</p>
            <p className="text-xl mt-6">The path it took is:</p>
            {
                path.length ? 
                    <ul className="list-decimal ml-10 text-xl flex flex-wrap gap-12">
                        {
                            path && path.slice().reverse().map((tile, index) => {
                                if (index === 0) return;
                                else return <li key={JSON.stringify(tile)} className="text-neutral-500">
                                    <p className="text-white">{createChessboardCoordinate(tile)}</p>
                                </li>
                            })
                        }
                    </ul>
                    :
                    <p>
                        No path yet! Follow the instructions to create one. 
                    </p>
            }
            {/* <button className="rounded-full bg-blue-400 py-1 px-6 mt-5">
                Reset
            </button> */}
        </div>
    )
}
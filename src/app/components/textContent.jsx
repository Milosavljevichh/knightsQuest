import ReturnInfo from "./returnInfo"

export default function TextContent({movesMade, path}){
    return(
        <article className="h-fit border-3 border-solid border-gray-800 rounded-2xl p-6">
            <h1 className="text-5xl text-center">Knight's Quest</h1>
            <h4 className="text-2xl text-center text-neutral-300">A journey of shortest path finding</h4>
            <ReturnInfo movesMade={movesMade} path={path} />
        </article>
    )
}
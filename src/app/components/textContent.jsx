import ReturnInfo from "./returnInfo"

export default function TextContent({movesMade, path}){
    return(
        <section className="h-full">
            <h1>Knight's Quest</h1>
            <h4>A journey of shortest path finding</h4>
            <ReturnInfo movesMade={movesMade} path={path} />
        </section>
    )
}
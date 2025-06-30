
export default function findShortestPath(start,end,adjacencyList, head, printend){
    let movesMade = 0;
    let lastPoint = end
    //we'll find the shortest path starting from the end position (last move we've made)
    let path = [];
    //we repeat this until our last move made is the same as the starting position
    while (JSON.stringify(end) !== JSON.stringify(start)) {
        for (let i = adjacencyList.length-1; i>=0; i--) {
            head = adjacencyList[i];
            while (head.nextNode !== null) {
                //in our adjecency list, only one move leads to our end
                //when we find it, we set it as the new end
                if (JSON.stringify(head.nextNode.value) === JSON.stringify(end)) {
                    end = adjacencyList[i].value;
                    movesMade++;
                    path.push(end);
                    break;
                }
                head = head.nextNode;
            };
        }
    }
    path.unshift(lastPoint)
    return [movesMade, path, printend]
}
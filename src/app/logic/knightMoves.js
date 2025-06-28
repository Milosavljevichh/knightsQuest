

//this is the factory for the node which will be every move that is possible from the current
function Node(value, nextNode) {
    return {
        value: value,
        nextNode: nextNode
    }
};


function knightMoves(start, end) {
    console.log('dudlaj kurac')
    let head;
    let adjacencyList = [];
    let depthLevel = 0;
    let endFound = false;

    let currentSquare = Node(start, null);
    adjacencyList.push(currentSquare);

    let initStart = start;

    //we will repeat this until we find the end position
    while (!endFound) {
        start = adjacencyList[depthLevel].value;
        x = start[0];
        y = start[1];
        //we find the possible moves from the current position
        console.log('dudlaj kurac')
        let availableMoves = findMoves(x, y);
        
        //creating a linked list out of available moves
        availableMoves = availableMoves.map(mapFunc);
        function mapFunc(move) {
            if (JSON.stringify(move) !== JSON.stringify(start) && JSON.stringify(move) !== JSON.stringify(initStart)) {
                let availableMove = Node(move, null);
                head = adjacencyList[depthLevel];
                while (head.nextNode !== null) {
                    head = head.nextNode;
                };
                head.nextNode = availableMove;
                head = adjacencyList[depthLevel];
            };
        };
        //checking if the current moves we've found are the searched position
        for (let i=depthLevel; i < adjacencyList.length;i++) {
            if (JSON.stringify(adjacencyList[i].value) === JSON.stringify(end)) {
                endFound = true;
                break;
                };
            };
        //if they are, we break the loop
        if (endFound) break;
        //if not, we add the currents positions available moves to adjacency list
        while (head.nextNode !== null) {
            let newPos = Node(head.nextNode.value, null);
            adjacencyList.push(newPos);
            head = head.nextNode;
        };
        //we move onto the next move in the list
        depthLevel++;
    };

    let parentMove = end
    findShortestPath(initStart, parentMove, adjacencyList, head, end)
    
};
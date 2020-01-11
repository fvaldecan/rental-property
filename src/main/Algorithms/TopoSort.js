let animations = [];
export const createTopoList = adjList =>{
    const topoList = [];
    const count = []
    const queue = new Queue();
    let vertex;
    const adjListSize = adjList.length;
    const mainColor = "#fa9f42";
    const topoColor = "#5acfc9"
    const neighborColor = "#fcc893";

    const queueColor = "black";
    // const comparedColor = "#f3533a";
    // const matchColor = "#8ad879";
    for(vertex = 0; vertex < adjListSize; vertex++) count.push(0);
    for(vertex = 0; vertex < adjListSize; vertex++){
        let vertexName = 'vertex-'+ adjList[vertex].clientNum;
        animations.push(
            {
                clientID: vertexName,
                color: topoColor
            }
        );
        let neighborList = adjList[vertex].neighbors;
        let neighborListSize = neighborList.length;
        let neighbor;
        for(neighbor = 0; neighbor < neighborListSize; neighbor++){
            let neighborClientNum = neighborList[neighbor].clientNum;
            let neighborClientName = neighborList[neighbor].clientNum;
            if(neighborClientNum === "end")
                neighborClientNum = adjListSize - 1;
            
            count[neighborClientNum]++;
            animations.push(
                {
                    clientID: vertexName + 'neighbor-'+ neighborClientName,
                    color: topoColor
                },
                {
                    clientID: 'counter-'+ neighborClientName,
                    count: count[neighborClientNum]
                },
                {
                    clientID: vertexName + 'neighbor-'+ neighborClientName,
                    color: neighborColor
                },
            );
        }
        animations.push(
            {
                clientID: vertexName,
                color: mainColor
            }
        );
    }
    for(vertex = 0; vertex < adjListSize; vertex++){
        if(count[vertex] === 0){
            queue.push(adjList[vertex]);
            animations.push({
                clientID: "vertex-"+ adjList[vertex].clientNum,
                color: queueColor
            });
            
        }
    }
    while(!queue.size() == 0){
        topoList.push(queue.front());
        let neighborList = queue.front().neighbors;
        let topoName = "topo-node-" + queue.front().clientNum;
        let vertexName = "vertex-" + queue.front().clientNum;
        animations.push(
            {
                clientID: topoName,
                color: topoColor
            },
            {
                clientID: vertexName,
                color: mainColor
            },

        );
        queue.pop();
        
        let neighborListSize = neighborList.length;
        let neighbor;
        for(neighbor = 0; neighbor < neighborListSize; neighbor++){
            let neighborClientNum = neighborList[neighbor].clientNum;
            let neighborClientName = neighborList[neighbor].clientNum;
            if(neighborClientNum === "end")
                neighborClientNum = adjListSize - 1;
            count[neighborClientNum]--;
            animations.push(
                {
                    clientID: vertexName +"neighbor-"+ neighborClientName,
                    color: topoColor
                },
                {
                    clientID: 'counter-'+ neighborClientName,
                    count: count[neighborClientNum]
                },
                {
                    clientID: vertexName +"neighbor-"+ neighborClientName,
                    color: neighborColor
                },

            );
            if(count[neighborClientNum] === 0){
                queue.push(adjList[neighborClientNum]);
                animations.push(
                    {
                        clientID: "vertex-"+ adjList[neighborClientNum].clientNum,
                        color: queueColor
                    }
                );
            }
        }
    }
    return topoList;
}
export const getTopoAnimations = ()=>{
    return animations;
}

//Q
function Queue() {
    this.data = [];
}
Queue.prototype.push = function(record) {
    this.data.unshift(record);
}
Queue.prototype.pop = function() {
    this.data.pop();
}
Queue.prototype.first = function() {
    return this.data[0];
}
Queue.prototype.front = function() {
return this.data[this.data.length - 1];
}
Queue.prototype.size = function() {
return this.data.length;
}
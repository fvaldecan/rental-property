export function Node(){
    this.clientNum = 'start'; //0 CLIENT NUM
    this.startDay = 0; //1 START 
    this.endDay = 0; //2 END
    this.revenue = 0; //3 REVENUE
    this.incomingEdges = 0; //4 IE
    this.neighbors = [];
    //this.next = null; //5 NEXT
    this.clientsTaken = []; //6 CLIENTS TAKEN ARRAY
    //let node =[0,0,0,0,0,null,[]]
    //return node;
}
function copyNode(originalNode){
    let copy = new Node();
    copy.clientNum = originalNode.clientNum;
    copy.startDay = Number(originalNode.startDay);
    copy.endDay = Number(originalNode.endDay);
    copy.revenue = Number(originalNode.revenue);
    copy.neighbors = originalNode.neighbors;
    if(originalNode.incomingEdges ===  'none')    
        copy.incomingEdges = 0;
 
    else{
        copy.incomingEdges = Number(originalNode.incomingEdges + 1);
        originalNode.incomingEdges = copy.incomingEdges;
    }
    copy.clientsTaken = originalNode.clientsTaken;
    return copy
}
function addEdge(client1,client2){
    let client2Copy = copyNode(client2);
    client1.neighbors.push(client2Copy);
}

let animations = [];
export const getAdjAnimations = ()=>{
    return animations;
}
export const createAdjList = clientList =>{
    let adjList = []
    const startNode = new Node();
    adjList.push(startNode);
    const mainColor ="#fa9f42";
    const comparedColor = "#f3533a";
    const matchColor = "#8ad879";
    const neighborColor = "#fcc893";
    //const hideColor = "whitesmoke";
    let clientListSize = clientList.length;
    console.log(clientList);
    for(let i = 0; i < clientListSize; i++){
        let newClient = new Node();
        newClient = copyNode(clientList[i]);
        adjList.push(newClient);
    }
    let adjListSize = adjList.length;
    for(let i = 1; i < adjListSize; i++){
        for(let j = 1; j < adjListSize; j++){
            if(i === j) continue;
            else if(adjList[i].endDay<= adjList[j].startDay){
                addEdge(adjList[i],adjList[j]);
                animations.push(
                    {
                        clientID: "vertex-" + adjList[i].clientNum,
                        color: comparedColor
                    },
                    {
                        clientID: "vertex-" + adjList[j].clientNum,
                        color: comparedColor
                    },
                    {
                        clientID: "vertex-" + adjList[i].clientNum,
                        color: matchColor
                    },
                    {
                        clientID: "vertex-" + adjList[j].clientNum,
                        color: matchColor
                    },
                    {
                        clientID: 'vertex-'+ adjList[i].clientNum + 'neighbor-' + adjList[j].clientNum,
                        color: neighborColor
                    }
                    
                )
            }
            else{
                animations.push(
                    {
                        clientID: "vertex-" + adjList[i].clientNum,
                        color: comparedColor
                    },
                    {
                        clientID: "vertex-" + adjList[j].clientNum,
                        color: comparedColor
                    }
                );
                
            }
            animations.push(
                {
                    clientID: "vertex-" + adjList[i].clientNum,
                    color: mainColor
                },
                {
                    clientID: "vertex-" + adjList[j].clientNum,
                    color: mainColor
                }
            );

        }
    }
    const endNode = new Node();
    endNode.clientNum = 'end';
    adjList.push(endNode);
    for(let i = 1; i < adjList.length-1; i++){
        if(adjList[i].incomingEdges === 0){
            animations.push(
                {
                    clientID: "vertex-" + adjList[i].clientNum,
                    color: matchColor
                },
                {
                    clientID: "vertex-" + adjList[i].clientNum,
                    color: mainColor
                },
                {
                    clientID: 'vertex-startneighbor-' + adjList[i].clientNum,
                    color: neighborColor
                }
            );
            addEdge(startNode,adjList[i]);
            
        }
        if(adjList[i].neighbors.length === 0){
            animations.push(
                {
                    clientID: "vertex-" + adjList[i].clientNum,
                    color: matchColor
                },
                {
                    clientID: "vertex-" + adjList[i].clientNum,
                    color: mainColor
                },
                {
                    clientID: 'vertex-'+ adjList[i].clientNum +'neighbor-end',
                    color: matchColor
                },
                {
                    clientID: 'vertex-'+ adjList[i].clientNum +'neighbor-end',
                    color: neighborColor
                }
            );
            addEdge(adjList[i],endNode);
        }
    }
    console.log(adjList);
    return adjList;
}
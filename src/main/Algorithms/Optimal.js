let pathAnimations = [];
let path = [];
let optimalRevenue = 0;
export const getPath = ()=>{
    return path;
}
export const getOptPath = ()=>{
    return pathAnimations;
}
export const getOptRev = ()=>{
    return optimalRevenue;
}
export const findOptimalPath = (copyTopoList,copyAdjList) => {
    const topoListSize = copyTopoList.length;
    const comparedColor = "#f3533a";
    const matchColor = "#8ad879";

    let maxRevenues = [];
    let animations = [];
    for(var maxRev = 0; maxRev < topoListSize; maxRev++){
        maxRevenues.push(0)
    }
    let vertex;
    //console.log(document.getElementsByClassName("topoSort-section"));
    for(vertex = 0; vertex < topoListSize; vertex++){
        let topoClientName = 'topo-node-' + copyTopoList[vertex].clientNum;
        let topoClientNum = copyTopoList[vertex].clientNum;
        if(topoClientNum === 'start')
            topoClientNum = 0;
        else if(topoClientNum === 'end')
            topoClientNum = topoListSize -1;
        let adjVertexClientName = 'vertex-' + copyAdjList[topoClientNum].clientNum;
        animations.push(
            {
                clientID: topoClientName,
                color: comparedColor
            }
        );
        animations.push(
            {
                clientID: adjVertexClientName,
                color: comparedColor
            }
        );
        let revenues = [];
        for(var rev = 0; rev < topoListSize; rev++){
            revenues.push(0)
        }
        let neighborList = copyAdjList[topoClientNum].neighbors;
        let neighborListSize = neighborList.length;
        if(neighborListSize === 0)
            revenues[topoClientNum] = copyAdjList[topoClientNum].revenue;
        let neighbor;
        for(neighbor = 0; neighbor < neighborListSize;neighbor++){
            let neighborClientNum = neighborList[neighbor].clientNum;
            let neighborClientName = neighborList[neighbor].clientNum;
            if(neighborClientNum === 'start')
                neighborClientNum = 0;
            else if(neighborClientNum === 'end')
                neighborClientNum = topoListSize -1;
            revenues[neighborClientNum] = copyTopoList[vertex].revenue + maxRevenues[neighborClientNum];
            animations.push(
                {
                    clientID: (adjVertexClientName + 'neighbor-' + neighborClientName),
                    color: comparedColor
                },
                {
                    clientID: (adjVertexClientName + 'neighbor-' + neighborClientName),
                    updatedRev: revenues[neighborClientNum]
                }
            );
        }
        var max = 0;
        var maxIndex = 0;
        var revenueSize = revenues.length;
        for(var revenue = 0; revenue < revenueSize; revenue++){
            if(revenues[revenue] > max){
                maxIndex = revenue;
                max = revenues[revenue];
            }
        }
        if(maxIndex !== 0){
            if(neighborListSize === 0){ 
                max = revenues[topoClientNum];
                animations.push(
                    {
                        clientID: adjVertexClientName,
                        updatedRev : max
                    },
                )
                let taken = copyAdjList[maxIndex].clientsTaken;
                copyAdjList[topoClientNum].clientsTaken = taken.slice(); // instead of copyAdjList[topoClientNum].clientsTaken = copyAdjList[maxIndex].clientsTaken
                copyAdjList[topoClientNum].clientsTaken.push(maxIndex); // bc .slice() clones the array and returns a reference to a new array
                maxRevenues[topoClientNum] += max;
                continue;
            }
            animations.push(
                {
                    clientID: adjVertexClientName + 'neighbor-'+ copyAdjList[maxIndex].clientNum,
                    updatedRev : max
                },
                {
                    clientID: adjVertexClientName + 'neighbor-'+ copyAdjList[maxIndex].clientNum,
                    color : matchColor
                }
                
            );
        }
        let taken = copyAdjList[maxIndex].clientsTaken;
        copyAdjList[topoClientNum].clientsTaken = taken.slice(); // instead of copyAdjList[topoClientNum].clientsTaken = copyAdjList[maxIndex].clientsTaken
        copyAdjList[topoClientNum].clientsTaken.push(maxIndex); // bc .slice() clones the array and returns a reference to a new array
        maxRevenues[topoClientNum] += max;
    }
    let optPath = copyAdjList[0].clientsTaken.reverse();
    optPath.splice(-2,2);
    path = optPath;
    optPath.push("end");
    const optimalColor = "#fdd036";
    pathAnimations.push(
        {
            clientID: 'vertex-start',
            color : optimalColor
        },
        {
            clientID: 'vertex-startneighbor-' + optPath[0],
            color : optimalColor
        },
    );
    var i;
    for(i = 0; i < optPath.length-1; i++){
        let vertexName = 'vertex-' +optPath[i];
        for(var j = i+1; optPath.length;j++){
            pathAnimations.push(
                {
                    clientID: vertexName,
                    color : optimalColor
                },
                {
                    clientID: vertexName + 'neighbor-'+optPath[j],
                    color : optimalColor
                },
            );
            break;

        }
    }
    optimalRevenue = maxRevenues[0];
    console.log(optPath);
    console.log("Clients contributing to this optimal revenue: ");
    for(i = 0; i < optPath.length;i++)
        console.log(optPath[i]);
    return animations;
}
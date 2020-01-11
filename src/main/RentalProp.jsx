import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './css/TopoSortVis.css';
import ClientNode from './ClientNode.jsx';
import AdjList from './AdjList.jsx';
import List from './List.jsx';
import Toolbar from './Toolbar.jsx';
import * as adjFunctions from './Algorithms/AdjList.js';
import * as topoFunctions from './Algorithms/TopoSort.js';
import * as optFunctions from './Algorithms/Optimal.js';
import * as helperFunctions from './HelperFunctions.js';

const mainColor = "#fa9f42";
const hiddenColor = "whitesmoke";
const optimalColor = "#fdd036";
export default class Visualizer extends Component{
    
    constructor(){
        super();
        this.speed = 0;
        this.clientCount = 0;
        this.state = {
            clientList: [],
            adjList: [],
            topoList: [],
            optimalPath:[],
            ClientNum:"",
            StartDay :"",
            EndDay: "",
            Revenue: "",
            IncomingEdges:"",
            Neighbors: [],
            ClientsTaken:[],
            color : mainColor
        }
    }
    componentDidMount(){
        this.resetClientList();
    }
    resetClientList(){
        const clientList = [];
        const adjList = [];
        const topoList = [];
        this.clientCount = 0;
        this.speed = 0;
        this.setState({clientList,adjList,topoList});
    }
    
    addAllClients = (event) =>{
        const copyClientList = Object.assign([],this.state.clientList);
        event.preventDefault(); //keeps page from reloading 
        const textareaValue = ReactDOM.findDOMNode(this.refs.ci).value;
        //uses ref to get value just like document.getElementbyID
        ReactDOM.findDOMNode(this.refs.ci).value = '' //clears textarea on the page

        if(textareaValue === ""){
            alert("Text required");
            this.resetClientList();
        }else{
            const userInputs = helperFunctions.parseTextArea(textareaValue);
            for(let i = 0;i < userInputs.length;i++){
                this.clientCount = this.clientCount+1
                let startEndRev = userInputs[i].split(' ');
                const digits_only = string => [...string].every(c => '0123456789'.includes(c));
                var index;
                if(startEndRev.includes("")){
                    index = startEndRev.indexOf("");
                    startEndRev.splice(index);
                }else if(startEndRev.includes(" ")){
                    index = startEndRev.indexOf(" ");
                    startEndRev.splice(index);
                }
                if(startEndRev.length != 3 
                || !digits_only(startEndRev[0])    
                || !digits_only(startEndRev[1]) 
                || !digits_only(startEndRev[2])
                || startEndRev.length != 3){
                    alert("Not proper format! No letters, extra spaces, or special symbols allowed!");
                    this.resetAll();
                }else{
                    let clientInfo = {
                        clientNum : this.clientCount,
                        startDay: startEndRev[0],
                        endDay: startEndRev[1],
                        revenue: startEndRev[2],
                        incomingEdges: 'none',
                        neighbors: [],
                        clientsTaken: []
                    }
                    copyClientList.push(clientInfo);
                }
            }
            let deleteButton = document.getElementsByClassName("delete-clients-button");
            let adjListButton = document.getElementsByClassName("create-adj-button");
            let speedButtons = document.getElementsByClassName("speed-section");

            deleteButton[0].style.display = "flex";
            adjListButton[0].style.display = "flex";
            speedButtons[0].style.display = "flex";

            this.setState({
                clientList : copyClientList
            })  
        }
    }
    deleteAll(){
        const copyClientList = [];
        const copyAdjArray = [];
        const copyTopoArray = [];
        this.clientCount = 0;
        this.incomingEdges = 'none'
        this.neighbors = [];
        this.clientsTaken = [];
        
        let deleteButton = document.getElementsByClassName("delete-clients-button");
        let adjListButton = document.getElementsByClassName("create-adj-button");
        let speedButtons = document.getElementsByClassName("speed-section");

        deleteButton[0].style.display = "none";
        adjListButton[0].style.display = "none";
        speedButtons[0].style.display = "none";

        this.setState({
            clientList : copyClientList,
            adjList :copyAdjArray,
            topoList : copyTopoArray
        })
    }
    showPath = ()=>{
        let newSetButton = document.getElementsByClassName("new-set-button");
        newSetButton[0].style.display = "flex";

        let pathAnimations = optFunctions.getOptPath();
        const copyOptimalPath = Object.assign([],this.state.optimalPath);
        const copyAdjList = Object.assign([],this.state.adjList);

        let path = optFunctions.getPath();
        copyOptimalPath.push(copyAdjList[0]);
        for(var i = 0; i < path.length-1;i++){
            copyOptimalPath.push(copyAdjList[path[i]]);
        }
        copyOptimalPath.push(copyAdjList[copyAdjList.length-1]);
        this.setState({
            optimalPath : copyOptimalPath
        })
        let showPathButton = document.getElementsByClassName("show-path-button");
        showPathButton[0].style.display = "none";
        for(var animation = 0; animation < pathAnimations.length;animation++){
            let id = pathAnimations[animation].clientID;
            let newColor = pathAnimations[animation].color;
            setTimeout(()=>{
                document.getElementById(id).children[0].style.backgroundColor = newColor;
                document.getElementById(id).children[1].style.color = newColor; 
            },this.speed*animation);
            if(animation === pathAnimations.length-1){
                setTimeout(()=>{
                    document.getElementById("optimal-path").style.display = 'flex'; 
                    document.getElementById("optimal-path").style.justifyContent = 'center';            
           
                },this.speed*pathAnimations.length);
            }
        }
    }
    findOptimal = ()=>{
        const copyTopoList = Object.assign([],this.state.topoList).reverse();
        const copyAdjList = Object.assign([],this.state.adjList);
        for(var count = 0; count < copyAdjList.length; count++){
            let counterName = count;
            if(counterName === 0) counterName = "start";
            else if(counterName === copyAdjList.length-1) counterName = "end";
            let counter = document.getElementById("counter-"+counterName);
            counter.style.display = "none";
        }
        let animations = optFunctions.findOptimalPath(copyTopoList,copyAdjList);
        let findOptimalButton = document.getElementsByClassName("find-optimal-button");
        findOptimalButton[0].style.display = "none";
        for(var animation = 0; animation < animations.length;animation++){
            if(animation === animations.length-1){
                setTimeout(()=>{
                    let optRev = optFunctions.getOptRev();
                    document.getElementById('optimal-revenue').style.display = 'inline';
                    document.getElementById('optimal-revenue').innerHTML = "Optimal Revenue: " + optRev;
                    let showPathButton = document.getElementsByClassName("show-path-button");
                    showPathButton[0].style.display = "flex";
                },this.speed*animations.length);
            }
            let id = animations[animation].clientID;
            if(animations[animation].hasOwnProperty('color')){
                let newColor = animations[animation].color;
                setTimeout(()=>{
                    document.getElementById(id).children[0].style.backgroundColor = newColor;
                    document.getElementById(id).children[1].style.color = newColor; 
                },this.speed*animation);
            }else{
                let newRev = animations[animation].updatedRev;
                setTimeout(()=>{
                    document.getElementById(id).children[1].children[2].innerHTML = newRev;
                    
                },this.speed*animation);
            }
        }
    }
    createTopoList(){
        let copyAdjList = Object.assign([],this.state.adjList);
        let topoArray = topoFunctions.createTopoList(copyAdjList)
        let topoAnimations = topoFunctions.getTopoAnimations();

        let topoSortButton = document.getElementsByClassName("topo-sort-button");
        topoSortButton[0].style.display = "none";

        this.setState({
            topoList : topoArray
        });

        for(var count = 0; count < copyAdjList.length; count++){
            let counterName = count;
            if(counterName === 0) counterName = "start";
            else if(counterName === copyAdjList.length-1) counterName = "end";
            let counter = document.getElementById("counter-"+counterName);
            counter.style.display = "inline";
        }
        for(var animation = 0; animation < topoAnimations.length;animation++){
            if(animation === topoAnimations.length-1){
                setTimeout(()=>{
                    let findOptimalButton = document.getElementsByClassName("find-optimal-button");
                    findOptimalButton[0].style.display = "flex";
                },this.speed*topoAnimations.length);
                
            }
            let id = topoAnimations[animation].clientID;
            if(topoAnimations[animation].hasOwnProperty('count')){
                let newCount = topoAnimations[animation].count;
                setTimeout(()=>{
                    document.getElementById(id).innerHTML = newCount;
                },this.speed*animation);
            }else{
                let newColor = topoAnimations[animation].color;
                setTimeout(()=>{
                    document.getElementById(id).children[0].style.backgroundColor = newColor;
                    document.getElementById(id).children[1].style.color = newColor; 
                },this.speed*animation);
            }

        }
    }
    createAdjList(){
        let copyClientList = Object.assign([],this.state.clientList);
        let adjArray = adjFunctions.createAdjList(copyClientList);
        let adjAnimations = adjFunctions.getAdjAnimations();
        this.setState({
            adjList : adjArray
        });
        
        let clientForm = document.getElementsByClassName("client-form");
        let clientSection = document.getElementsByClassName("client-section");
        let deleteButton = document.getElementsByClassName("delete-clients-button");
        let adjListButton = document.getElementsByClassName("create-adj-button");
        let topoSortButton = document.getElementsByClassName("topo-sort-button");

        clientForm[0].style.display = "none";
        clientSection[0].style.display = "none";
        deleteButton[0].style.display = "none";
        adjListButton[0].style.display = "none";


  
        for(var animation = 0; animation < adjAnimations.length;animation++){
            let id = adjAnimations[animation].clientID;
            let newColor = adjAnimations[animation].color;
            setTimeout(()=>{
                document.getElementById(id).children[0].style.backgroundColor = newColor;
                document.getElementById(id).children[1].style.color = newColor; 
            },this.speed*animation);
            if(animation === adjAnimations.length-1){
                setTimeout(()=>{
                    topoSortButton[0].style.display = "flex";
                },this.speed*adjAnimations.length);
                
            }
        }
       

    }
    isLetter(str) {
        let regex = new RegExp(/[A-Za-z]/);
        if(regex.test(str)){
            return true;
        }
        else return false;
      }
    resetAll(){
        window.location.reload();//Reloads page
    }
    render(){
        const{clientList} = this.state;
        const{adjList} = this.state;
        const{topoList} = this.state;
        const{optimalPath} = this.state;
        return (
            <div className = "container">
                <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Varela+Round" />
                <Toolbar     
                    list = {clientList}
                />
                <div className = "client-container">
                    <div className="client-section">
                        <List
                        type = {"client"}
                        list = {clientList}
                        color = {mainColor}
                        />
                    </div>
                    <div className="client-form">
                        <form>
                            <textarea ref="ci" cols="7" rows="8" 
                            placeholder="10 40 100 10 20 50..." required>
                            </textarea>
                            <br/>
                            <button className="button "type="submit" onClick ={this.addAllClients} >Add Clients </button>
                        </form>
                    </div>
                    <div className="speed-section">
                        <h2>Speed: </h2>
                        <div className="speed-buttons">
                            <button onClick={() => this.speed = 2000}>Slow</button>
                            <button onClick={() => this.speed = 200}>Medium</button>
                            <button onClick={() => this.speed = 50}>Fast</button>
                            <button onClick={() => this.speed = 0}>Instant</button>
                        </div>
                    </div>
                    <div className="button-section">
                        <button className="topo-sort-button" style={{display:"none"}}onClick={() => this.createTopoList()}>Topological Sort</button>
                        <button className="delete-clients-button" style={{display:"none"}}onClick={() => this.deleteAll()}>Delete All Clients</button>
                        <button className="create-adj-button" style={{display:"none"}}onClick={() => this.createAdjList()}>Create Adjacency List</button>
                        <button className="find-optimal-button" style={{display:"none"}}onClick={() => this.findOptimal()}>Find Optimal Path and Revenue</button>
                        <button className="show-path-button" style={{display:"none"}}onClick={() => this.showPath()}>Highlight Path</button>
                        <button className="new-set-button" style={{display:"none"}}onClick={() => this.resetAll()}>New Set</button>
                    </div>

                    <h1 id="optimal-revenue" style={{display:"none"}}>0</h1>
                    <div className="optimal-section">
                        <div id="optimal-path" style={{display:"none", flexDirection: "row"}}>
                            <h1>Optimal Path: </h1>
                            <List
                            type = {"opt"}
                            list = {optimalPath}
                            color = {optimalColor}
                            />
                        </div>
                    </div>
                    <div className= "topo-section">
                        <div className="topo-sort">
                            <List
                            type = {"topo"}
                            list = {topoList}
                            color = {hiddenColor}
                            />
                        </div>
                        <AdjList
                        list ={adjList}
                        color ={mainColor}
                        />
                    </div>    
                </div>    
            </div>
        );
    }
    
}
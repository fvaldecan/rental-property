import React, {Component} from 'react';
import './css/Toolbar.css';

export default class Node extends Component{
    openPopUp(option){
        document.getElementById(option).style.display = "block";
    }
    closePopUp(option){
        document.getElementById(option).style.display = "none";
    }
   
    render(){
        let clientList = this.props.list;
        return(
            <div className="toolbar">
                <h1>Finding Optimal Revenue and Path using Topological Sorting</h1>
                <div className="toolbar-options">
                    <div className ="dropdown">
                        <button className="instructions">Test Data Examples</button>
                        <div className="dropdown-content">
                            <a onClick={()=> this.openPopUp('example1')}>Data Example 1</a>
                            <a onClick={()=> this.openPopUp('example2')}>Data Example 2</a>
                            <a onClick={()=> this.openPopUp('example3')}>Data Example 3</a>
                            <a onClick={()=> this.openPopUp('example4')}>Data Example 4</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="instructions">Instructions</button>
                        <div className="dropdown-content">
                            <a onClick={()=> this.openPopUp('assignment')} >Assignment/Motivation</a>
                            <a onClick={()=> this.openPopUp('entering-data')}>Entering Data</a>
                            <a onClick={()=> this.openPopUp('adj-step')}>Adjacency List</a>
                            <a onClick={()=> this.openPopUp('topo-step')}>Topological Sort</a> 
                            <a onClick={()=> this.openPopUp('rev-step')}>Finding Optimal Revenue</a>
                            <a onClick={()=> this.openPopUp('path-step')}>Finding Optimal Path</a>
                        </div>
                    </div>
                </div>
                <div className="pop-up-example" id="example1">
                    <p>
                    10 40 100 <br/>
                    20 70 200 <br/>
                    50 80 120 <br/>
                    <br/>
                    (CopyAndPaste)
                    </p>
                    <button onClick={()=> this.closePopUp("example1")}>Close</button>

                </div>
                <div className="pop-up-example" id="example2">
                    <p>
                    10 40 100 <br/>
                    10 20 50 <br/>
                    20 70 200 <br/>
                    50 80 120 <br/>
                    70 100 200 <br/>
                    <br/>
                    (CopyAndPaste)
                    </p>
                    <button onClick={()=> this.closePopUp("example2")}>Close</button>

                </div>
                <div className="pop-up-example" id="example3">
                    <p>
                    60 100 543 <br/>
                    53 97 670 <br/>
                    41 72 650 <br/>
                    15 54 92 <br/>
                    36 82 416<br/>
                    15 37 283<br/>
                    14 85 661<br/>
                    9 90 210<br/>
                    28 63 843<br/>
                    32 61 887<br/>
                    42 51 812<br/>
                    <br/>
                    (CopyAndPaste)
                    </p>
                    <button onClick={()=> this.closePopUp("example3")}>Close</button>

                </div>
                <div className="pop-up-example" id="example4">
                    <p>
                    4 7 67<br/>
                    7 8 33<br/>
                    4 8 90<br/>
                    1 5 96<br/>
                    7 8 97<br/>
                    4 10 70<br/>
                    3 8 89<br/>
                    4 10 54<br/>
                    3 5 43<br/>
                    3 4 70<br/>
                    6 7 48<br/>
                    8 9 34<br/>
                    4 5 83<br/>
                    3 9 63<br/>
                    3 8 60<br/>
                    1 4 24<br/>
                    6 8 41<br/>
                    3 9 33<br/>
                    6 10 32<br/>
                    1 8 32<br/>
                    1 3 47<br/>
                    <br/>
                    (CopyAndPaste)
                    </p>
                    <button onClick={()=> this.closePopUp("example4")}>Close</button>

                </div>
                <div className ="pop-up-item"id="assignment">
                    <p>Suppose you have a rental property for which you have received requests 
                        from potential clients in the following form: (start date, end date, amount willing to pay).
                         At one time, only one client can use the property and the reward for renting out will be 
                         the amount they are willing to offer. Suppose, for example, the property is available 
                         over the next 100 days. The start and end dates will, therefore, be integers between 1 and 100. </p>
                    <div className="data-images">
                        <div id="assignment-image1"></div>
                        <div id="assignment-image2"></div>
                        <div id="assignment-image3"></div>
                    </div>
                    <button onClick={()=> this.closePopUp("assignment")}>Close</button>
                </div>

                <div className ="pop-up-item"id="entering-data">
                    <p>Each client is represented but each line. In the example 
                    you can see that the first two lines are entered. Each client must
                    contain a start day, end day, and revenue amount with space between
                    them. You have the option to add or delete many clients as a time. After 
                    entering the data you will be able to see how the adjancey list is made. 
                    Throughout the program you will be able to control the speed of each process.</p>
                    <div className="data-images">
                        <div id="entering-data-image1"></div>
                        <div id="entering-data-image2"></div>
                        <div id="entering-data-image3"></div>
                    </div>
                    <button onClick={()=> this.closePopUp("entering-data")}>Close</button>
                </div>

                <div className ="pop-up-item"id="adj-step">
                    <p>Each client can be represented as a vertex. Directed edges between clients indicate 
                        that there is no conflict between the days they want the rental property. When the
                        client turns <span style={{color:"red"}}>red</span> it means it is being compared to another client. 
                        When they turn <span style={{color:"green"}}>green</span> it means that an edge (Client i -> Client j) can be created or neighbor because the Client j's Start Day 
                        is greater than or equal to Client i's Start Day. Two special conditions are also applied:
                        1. When a client does not have any incoming edges, we add them to the Starting Client
                        (Start->Client i) 2. When a client does not have any neighbors, we add an End Client
                        (Client i->End). Neighbors will be shown and added underneath their client vertex.
                        </p>
                    <div className="adj-images">
                        <div className="adj-images2">
                            <div id="adj-image1"></div>
                            <div id="adj-image2"></div>
                        </div>
                        <div id="adj-image3"></div>
                    </div>
                    <button onClick={()=> this.closePopUp("adj-step")}>Close</button>
                </div>

                <div className ="pop-up-item"id="topo-step">
                    <p>The numbers over the vertecies represent incoming edges. The 
                        <span tyle={{color:"#5acfc9"}}>teal</span> colors represent an incoming edge
                        being counted in compared with a client vertex to each neighbor. After all the
                        incoming edges are counted, Topological BFS will be applied starting with the vertex with 0
                        incoming edges and continue to queue(in black) and pop all clients in the queues
                        order into a Topological sorted list.</p>
                    <div className="data-images">
                        <div id="topo-image1"></div>
                        <div id="topo-image2"></div>
                    </div>
                    <button onClick={()=> this.closePopUp("topo-step")}>Close</button>
                    <button onClick={()=>this.openPopUp("topo-step2")}>Next</button>
                </div>
                <div className ="pop-up-item"id="topo-step2">
                    <p>The numbers over the vertecies represent incoming edges. The 
                        <span tyle={{color:"#5acfc9"}}>teal</span> colors represent an incoming edge
                        being counted in compared with a client vertex to each neighbor. After all the
                        incoming edges are counted, Topological BFS will be applied starting with the vertex with 0
                        incoming edges and continue to queue(in black) and pop all clients in the queues
                        order into a Topological sorted list.
                    </p>
                    <div className="data-images">
                        <div id="topo-image3"></div>
                        <div id="topo-image4"></div>
                    </div>
                    <button onClick={()=> this.closePopUp("topo-step2")}>Close</button>
                </div>
                <div className ="pop-up-item"id="rev-step">
                    <p>Using the Topological Sorted List we start at the end of the list (or
                        in reverse the list) and start with that client for comparisons. Each 
                        vertex revenue will be added to each neighbor's revenue(in red) and choose the
                        neighbor that summed the largest revenue (in green). By then end the Optimal Revenue
                        will be shown.</p>
                    <div className="data-images">
                        <div id="rev-image1"></div>
                        <div id="rev-image2"></div>
                        <div id="rev-image3"></div>
                    </div>
                    <button onClick={()=> this.closePopUp("rev-step")}>Close</button>
                </div>
                
                <div className ="pop-up-item"id="path-step">
                    <p>The path taken to find the Optimal Revenue will be highlighted in 
                        <span style={{color:"#fdd036"}}>yellow</span>. By the end
                        the Optimal Path will be shown.
                    </p>
                    <div className="data-images">
                        <div id="path-image1"></div>
                        <div id="path-image2"></div>
                    </div>
                    <button onClick={()=> this.closePopUp("path-step")}>Close</button>
                    <button onClick={()=> this.openPopUp("path-step2")}>Next</button>

                </div>
                <div className ="pop-up-item"id="path-step2">
                    <p>The path taken to find the Optimal Revenue will be highlighted in 
                        <span style={{color:"#fdd036"}}>yellow</span>. By the end
                        the Optimal Path will be shown.</p>
                    <div className="data-images">
                        <div id="path-image3"></div>
                    </div>
                    <button onClick={()=> this.closePopUp("path-step2")}>Close</button>
                </div>
            </div>
        )
    }
}

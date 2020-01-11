import React, {Component} from 'react';
import ClientNode from './ClientNode.jsx';


export default class Node extends Component{
    
    render(){
        return(
            <div className="adjlist-section">
                {
                    this.props.list.map((clientNode,index)=>{
                        let clientName = index;
                        if(clientName === 0) clientName = "start";
                        else if(clientName === this.props.list.length - 1) clientName = "end";
                        return(
                            <div className="adj-list" id={"client-list" + Number(index+1)} key={'list-' +index}>
                                <h2 id={'counter-'+clientName} style={{display:"none"}}key={'counter'+index}>0</h2>
                                <ClientNode
                                key = {'vertex-'+ index}
                                id = {'vertex-'+ clientNode.clientNum}
                                clientNum = {clientNode.clientNum}
                                startDay ={clientNode.startDay}
                                endDay ={clientNode.endDay}
                                revenue ={clientNode.revenue}
                                color = {this.props.color}
                                
                                />
                                {                                           
                                    clientNode.neighbors.map((node,index)=>{
                                        return(
                                            <ClientNode
                                            key = {'neighbor-'+ index}
                                            id = {'vertex-'+ clientNode.clientNum + 'neighbor-' + node.clientNum}
                                            clientNum = {node.clientNum}
                                            startDay ={node.startDay}
                                            endDay ={node.endDay}
                                            revenue ={node.revenue}
                                            color = {"whitesmoke"}
                        
                                            />
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                    
                }
            </div>
        )
    }
}
import React, {Component} from 'react';
import ClientNode from './ClientNode.jsx';

export default class Node extends Component{
    render(){
        const list = this.props.list;
        const type = this.props.type;
        return(
            <div className ={type +"-list"}>
                {
                    list.map((clientNode,index)=>{
                        return (
                            <ClientNode 
                            key = {type + '-node-' + index}
                            id = {type + '-node-' + clientNode.clientNum}
                            clientNum = {clientNode.clientNum}
                            startDay ={clientNode.startDay}
                            endDay ={clientNode.endDay}
                            revenue ={clientNode.revenue}
                            color = {this.props.color}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

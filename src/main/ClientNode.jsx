import React, {Component} from 'react';
import './css/ClientNode.css';


export default class Node extends Component{
    render(){
        return(
            
            <div id={this.props.id} className="client-node animated flipInX" >
                <svg style={{width:90,height:90,backgroundColor:this.props.color,borderRadius:150}} viewBox="5 -20 500 550">

                    <path fill="whitesmoke" d="M256,0C114.623,0,0,114.614,0,256c0,141.377,114.623,256,256,256c141.386,0,256-114.623,256-256
        C512,114.614,397.39,0,256,0z M363.479,384.004H148.521V274.666L256,167.188l107.479,107.47V384.004z M381.481,255.097
        L256,129.629L130.528,255.101l-15.28-15.276L256.004,99.078l140.753,140.748L381.481,255.097z"/>
                </svg>
                <div className="client-info" style={{color:this.props.color,fontSize:12}}>
                    <h4 style={{marginTop: -88}}>{this.props.clientNum}</h4>
                    <div className="startEnd" style={{marginTop:-30}}>
                        <h4>{this.props.startDay}</h4>
                        <h4>{this.props.endDay}</h4>
                    </div>
                    <h4 style={{marginTop:18}}>{this.props.revenue}</h4>
                    
                </div>
            </div>       
        )
    }
}
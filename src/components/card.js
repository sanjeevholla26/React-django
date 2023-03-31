import React from "react";

export default function Card1(props){
    function click(){
        return(
            <h2>Hi</h2>
        )
    }
    return(
        <div id="hov" onClick={click}>
            <div className="card">
                <img src={props.image} alt={props.alt} className="card-img"/>
                <h4>{props.title}</h4>
                <p>{props.body}</p>
            </div>
        </div>
    )
}
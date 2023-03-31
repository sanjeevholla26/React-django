import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'
import Eachngo from "./eachngo";
import { Route , Routes} from "react-router-dom";
import { AiTwotoneDelete } from "react-icons/ai";

export default function Ngo_list(props){
    const navigate = useNavigate();
    function Getthengo(id){
            navigate(`/ngo-list/${id}/`)
        }

    function deletefun(){
        navigate('/')
    }
    
    return(
        <div className="ngo-item" >
            <div className="ngo-item-img">
                <img src={props.img} alt='No Image!!'/>
            </div>
            <div className="ngo-list-text">
                <h1>{props.title}</h1>
                <br></br>
                <h5>Aim:- {props.aim}</h5>
                
                <p>Click to get full profile of this ngo</p>
                <div className="ngo-item-buts">
                <AiTwotoneDelete className="delete-butt" onClick={deletefun}/>
                <button onClick={()=>Getthengo(props.id)}>View</button>
                </div>
            </div>
        </div>
    )
}
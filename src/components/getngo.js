import React from "react";
import { useState, useEffect } from "react";
import Ngo_list from "./ngo-list";
import '../App.css'

export default function Getngo(){
    const [ngos, setngos] = useState([])
    useEffect(() => {
        fetch("http://127.0.0.1:8000/ngo-list/", {
        'method' : 'GET'
        })
            .then(res => res.json())
            .then(data => setngos(data))
    }, [])
    const renderList = ngos.map((item) =>{
        return(
            <div>
                <Ngo_list title={item.title} aim={item.aim} img = {item.coverimg} id={item.id} owner={item.owner}/>
            </div>
        )
    });
    return(
        <div className="fullngolist">
            <div className="nnggoo">
                {renderList}
            </div>
        </div>
    )
    
}
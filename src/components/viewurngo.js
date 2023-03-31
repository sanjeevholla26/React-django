import React from "react";
import { useCookies } from "react-cookie"; 
import Ngo_list from "./ngo-list";
import { useState } from "react";
import { useEffect } from "react";

export default function Viewmyngo(){
    
    const [tokenid, settokenid] = useCookies('myid')
    const [myngo, setmyngo] = useState([])
    const [ngoss, setngoss] = useState([])
    let ownerid = tokenid['myid']
    let c = 1;
    
    useEffect(() => {
        
        fetch("http://127.0.0.1:8000/ngo-list/" , {
        'method' : 'GET',
        
        })
            .then(res => res.json())
            .then(data => {
                setngoss([])
                data.map((i) => {
                    {i.owner==ownerid && setngoss(prev => [...prev, i])}
                })})
           
    }, [])

    const renderList = ngoss.map((item) => {
        return(
            <div> 
            <Ngo_list title={item.title} aim={item.aim} img = {item.coverimg} id={item.id} owner={item.owner}/>
            </div>        
    )
    })
        
        
    
    
    return(
        <div className="fullngolist">
            <div className="nnggoo">
                {renderList}    
            </div>
        </div>
    )
}
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import '../App.css'

export default function Eachngo(){
    
    const params = useParams();
    const [token, settoken] = useCookies(['myid'])
    const [ngoget, setngoget] = useState({})
    let history = useNavigate()

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/ngo-list/${params.id}`, {
        'method' : 'GET'
        })
            .then(res => res.json())
            .then(data => setngoget(data))
    }, [])

    function edit(){
        history('/edit')
    }

    return(
        <div className="details">
            <h1>{ngoget.title}</h1>
            <h5><strong>AIM:- </strong>{ngoget.aim}</h5>
            <h5>OWNER:- {ngoget.username}</h5>
            <p>{ngoget.description}</p>
            {ngoget.owner==token['myid'] && <button onClick={edit}>Edit</button>}
        </div>
    )
}
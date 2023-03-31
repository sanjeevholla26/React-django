import React from "react";
import { useCookies } from "react-cookie";
import '../App.css'

export default function Myngo(){
    const[token, settoken] = useCookies('mytoken')
    if(!( token['mytoken']=== 'undefined')&& token['mytoken'] ){
        return (
           <div className="link-myngo">
            <a href="/myngo">view ur NGO</a>
           </div> 
        )
    }
}



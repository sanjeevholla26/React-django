import React from "react";
import { useCookies } from "react-cookie";
import '../App.css'

export default function Logout(){
    const [token, settoken, removetoken] = useCookies(['mytoken'])
    const [tokenid, settokenid, removetokenid] = useCookies(['myid'])
    if(tokenid['mytoken']){
        function logout(){
                removetoken(['mytoken'])
                removetokenid(['myid'])
                window.location.reload(false)
        }
        return (
            <div className='logout' onClick={logout}><h2>Logout</h2></div>
        )
    }
}
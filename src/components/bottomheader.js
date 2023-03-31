import React from "react";
import '../App.css'
import Myngo from "./myngo";
import Profile from "./profile";
import { useCookies } from "react-cookie";
import Logout from "./logout";

export default function Bottomheader(){
    const [token, settoken] = useCookies(['mytoken'])
    return(
    <div className="header-bottom" >
        <a href="/">Home</a>
        <a href="/ngo-list">List of NGO</a>
        <a href="/">Help</a>
        <Myngo/>
        {token['mytoken'] && <Profile/>}
        {token['mytoken'] && <Logout/>}
    </div>
    )
}
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";


export default function Addbutton(){

    const [token , settoken, removetoken] = useCookies(['mytoken']) 
    const tokvar = token['mytoken'];
    let history = useNavigate()
    function create(){
        history('/Register-ngo')
    }

    return(
        <div className="cover-addngobut">
        <div className="addngobut">
            {tokvar ? <button className="enable" onClick={create}>Register Ur NGO</button>:<button disabled={true} className='disable'>Register Ur NGO</button>}
        </div>
        </div>
    )
}
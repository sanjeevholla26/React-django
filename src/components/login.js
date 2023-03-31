import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import '../App.css'
import { useCookies } from "react-cookie"; 
import { useNavigate } from "react-router-dom";

export default function Login(){
    const [usrname, setusrname] = useState()
    const [pass, setpass] = useState()
    const [logcount, setlogcount] = useState(0)
    const [token , settoken] = useCookies(['mytoken'])
    const [tokenid, settokenid] = useCookies(['myid'])

    function logname(event){
        setusrname(event.target.value)
    }

    function logpass(event) {
        setpass(event.target.value)
    }

    function loginclick(){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username:`${usrname}`, password : `${pass}`})
        };
        fetch(`http://127.0.0.1:8000/auth/`, requestOptions)
        .then(res => res.json())
        .then(data=> {
            settoken('mytoken', data.token)
            settokenid('myid', data.id)
        })
        // .then(data => console.log(data))
    }
    // useEffect(() => {
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ username:`${usrname}`, password : `${pass}`})
    //     };
    //     fetch(`http://127.0.0.1:8000/auth/`, requestOptions)
    //     .then(res => res.json())
    //     .then(data=> settoken('mytoken', data.token))
    // }, [logcount]);

    let history = useNavigate()
    
    React.useEffect(() =>{
        if(!( token['mytoken']=== 'undefined')&& token['mytoken'] ){
            history('/')
            window.location.reload(false)
            setusrname()
            setpass()
        }    
    },[token])
    
    return(
        <div className="login">
            <h1>Login Here</h1>
            <label>Enter your Username: </label>
            <input type='text' placeholder="Username" onChange={logname} value={usrname}/>
            <label>Enter Password:</label>
            <input type='password' placeholder="Password" onChange={logpass} value={pass}/>
            <button onClick={loginclick}>Login</button> 
            <a href="/reg">Create a new Account..?</a>
        </div>
    )
}

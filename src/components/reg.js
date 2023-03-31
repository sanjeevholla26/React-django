import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import '../App.css'
import { useCookies } from "react-cookie"; 
import { useNavigate } from "react-router-dom";

export default function Reg(){
    const[name, setname] = useState('')
    const[password, setpassword] = useState('')
    const [response, setresponse] = useState({
        id:'',
        username: '',
        password: ''
    })
    
    const [resStatus, setResStatus] = useState(0)
    let history = useNavigate()

    function getusername(event){
        setname(event.target.value)
    }
    function getpassword(event){
        setpassword(event.target.value)
    }
    const [token , settoken] = useCookies(['mytoken'])
    const [tokenid, settokenid] = useCookies(['myid'])
    function but(){
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username:name, password:password})
        };
        fetch(`http://127.0.0.1:8000/user/`, requestOptions)
        .then(res => {
            setResStatus(res.status)
            return(
                res.json()
            )
        })
        .then(data => setresponse({
            id:data.id,
            username:data.username,
            password:data.password
        }))

        setfname()
        setlname()
        // settokenid('myid', response.id)
    }
    

    // fetch(`http://127.0.0.1:8000/auth/`, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ username:`${name}`, password : `${password}`})
    // })
    // .then(res => res.json())
    // .then(data=> settoken('mytoken', data.token))

    const [emailid, setemailid] = useState()
    const [fname, setfname] = useState()
    const [lname, setlname] = useState()
    const [resStatus2, setResStatus2] = useState(0)
    const [response2, setresponse2] = useState({
        id:'',
        email:''
    })
    

    function getemail(event){
        setemailid(event.target.value)
    }

    function getfirstname(event) {
        setfname(event.target.value)
    }

    function getlastname(event){
        setlname(event.target.value)
    }

    function getdetail(){
        const requestOptions1 = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: emailid, first_name:fname, last_name:lname})
        };
        fetch(`http://127.0.0.1:8000/user/${response.id}/`, requestOptions1)
        .then(res => {
            setResStatus2(res.status)
            return(
                res.json()
            )
        })
        .then(data => setresponse2({
            id:data.id,
            email:data.email
        }))

        fetch(`http://127.0.0.1:8000/auth/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username:`${name}`, password : `${password}`})
    })
    .then(res => res.json())
    .then(data=> {
        settoken('mytoken', data.token)
        settokenid('myid', data.id)
    })

    }
    
    React.useEffect(() =>{
        if(!( token['mytoken']=== 'undefined')&& token['mytoken'] ){
            history('/')
        }    
    },[token])
     
    return(
        <div className="reg1">
            { !(resStatus===201) &&
            <div className="reg">
                <input type='text' onChange={getusername} placeholder='Username' value={name}/>
                {resStatus===400 && <p className="errormsg">{response.username}</p>}
                <input type='password' onChange={getpassword} placeholder='Password' value={password} />
                {resStatus===400 && <p className="errormsg">{response.password}</p>}
                <button onClick={but}>Next</button>
            </div>}
            {resStatus===201 &&
            <div className="reg">
                <input type='text' onChange={getemail} placeholder='Email' value={emailid}/>
                {resStatus2===400 && <p className="errormsg">{response2.email}</p>}
                <input type='text' onChange={getfirstname} placeholder='First Name' value={fname} />
                <input type='text' onChange={getlastname} placeholder='Last Name' value={lname} />
                <button onClick={getdetail}>SUBMIT</button>
                {response.id}
            </div>}

            </div>
    )
}

import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import '../App.css'

export default function Createngo(){
    let history = useNavigate()
    const [title, settitle] = React.useState()
    const [aim, setaim] = React.useState()
    const [img, setimg] = React.useState()
    const [ownername, setownername] = React.useState()
    const [email, setemail] = React.useState()
    const [description, setdescription] = React.useState()
    const [tokenid, settokenid] = useCookies(['myid'])
    const [res, setres] = React.useState({})
    const [resStatus, setresStatus] = React.useState()

    const [token , settoken] = useCookies(['mytoken'])
    if(!( token['mytoken']=== 'undefined')&& token['mytoken'] ){
        
        function gettitle(event){
            settitle(event.target.value)
        }
        function getaim(event){
            setaim(event.target.value)
        }
        function getimg(event){
            setimg((event.target.files[0]));
            console.log(img)
        }
        function getname(event){
            setownername(event.target.value)
        }
        function getemail(event){
            setemail(event.target.value)
        }
        function getdescription(event){
            setdescription(event.target.value)
        }

        function createngo(){
            const formdata = new FormData();
            formdata.append('coverimg', img);
            formdata.append('username', ownername);
            formdata.append('title', title);
            formdata.append('aim', aim);
            formdata.append('owner', tokenid['myid']);
            formdata.append('description', description);
            formdata.append('email', email);

            fetch(`http://127.0.0.1:8000/ngo-list/`, {
        method: 'POST',
        headers: {
                    'Authorization' : `Token ${tokenid['mytoken']}` },
        body: formdata//JSON.stringify({ username:`${ownername}`, title: title, coverimg: img, aim: aim, owner: tokenid['myid'], description: description, email: email})
    })
    .then(res => {
        setresStatus(res.status)
        return res.json()
    })
    .then(data=> setres(data))
        }

        return(
             
            <div className="reg-ngo">
                <div className="reg-ngo-info">
                    <h3>You are just one step away from registering ur NGO on this platform</h3>
                    <p>In order to register you hav to give the title for ur NGO. the AIM of this ngo, U can add upto 4 max images. U have to give complete discription about ur ngo so that the users can known about ur ngo and if interested can contact u.also u have to give the name of the owner of this ngo which will be displayed to the user. And also u have to provide ur email-Id so that any interested person can conatct u through mail.</p>
                </div>
                <div className="reg-ngo-form">
                    <h2>Enter the details of ur NGO below:- </h2>
                    <input type='text' placeholder="Title" onChange={gettitle} value={title}/>
                    {resStatus===400 && res.title && <p>*{res.title}</p>}
                    <input type='text' placeholder="Aim" onChange={getaim} value={aim}/>
                    {resStatus===400 && res.aim && <p>*{res.aim}</p>}
                    <input type='text' placeholder="Name of the Owner/CEO" onChange={getname} value={ownername} />
                    {resStatus===400 && res.username && <p>*{res.username}</p>}
                    <input type='email' placeholder="Email-Id" onChange={getemail} value={email} />
                    {resStatus===400 && res.email && <p>*{res.email}</p>}
                    <input type='file'  onChange={getimg} />
                    <textarea placeholder="Full Discription of Ur NGO" onChange={getdescription} value={description}/>
                    {resStatus===400 && res.description && <p>*{res.description}</p>}
                    <button onClick={createngo}>SUBMIT</button>
                </div> 
            </div>      
        )
    }  
    else{
        return(
            <div><h1>U need to login</h1></div>
            
        )
    }
}
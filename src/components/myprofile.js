import React from "react";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import Viewmyngo from "./viewurngo";





export default function Viewprofile(){
    const[token, settoken] = useCookies(['mytoken'])
    const[tokenid, settokenid] = useCookies(['myid'])
    const[profile, setprofile] = React.useState({})

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/user/${tokenid['myid']}`, {
        'method' : 'GET'
        })
            .then(res => res.json())
            .then(data => setprofile(data))
    }, [])


    if(token['mytoken'])
    {
        // const [profile, setprofile]
        // useEffect(() => {
        //     fetch(`http://127.0.0.1:8000/user/${tokenid['myid']}`, {
        //     'method' : 'GET'
        //     })
        //         .then(res => res.json())
        //         .then(data => console.log(data))
        // }, [])
        return(
            <div className="profile-details">
                <div className="profile-details-text">
                    <h1>{profile.first_name} {profile.last_name}</h1>
                    <h5>{profile.username}</h5>
                    <h3>Email- {profile.email}</h3>
                </div>
                <h1>My list</h1>
                <Viewmyngo />
            </div>
        )
    }
}
import React from "react";
import '../App.css'

export default function Profile(){
    return(
        <div className="profile">
            <div className="profile-img">
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"/>
            </div>
            <a href="/profile">Profile</a>
        </div>
    )
}
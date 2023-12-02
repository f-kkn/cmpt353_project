import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function Signup(){
    const url = 'http://ip172-18-0-7-cllph9ksnmng00bhkrt0-8080.direct.labs.play-with-docker.com';
    const [UserName, SetUsername] = useState("");
    const [Password, SetPassword] = useState("");
    const [Response, SetResponse] = useState("");
    
    function sendUsrCredits(){
        fetch(`${url}/addUser`, {
            method: "POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "username": UserName,
                "password": Password
            })
        })
        .then((res) => res.json())
        .then((res) => {
            if(res != "Success"){
                SetUsername("");
                SetPassword("");
            }
            SetResponse(res);
        });
    }

    return(
        <div className="Signup-page">
            <h1> Stack Overflow: Kind Of </h1> <br/> <br/>
            <div className="sign-up-block">
                <h3>Sign up Below!</h3>
                <div className="sign-up-form">
                    <input
                        type="text"
                        placeholder="Username"
                        value={UserName}
                        onChange={(data) => {SetUsername(data.target.value)}}
                    /> <br/> <br/>
                    <input 
                        type="text"
                        placeholder="Password"
                        value={Password}
                        onChange={(data) => {SetPassword(data.target.value)}}
                    /> <br/> <br/>
                    <button onClick={sendUsrCredits}> Sign Up </button>
                </div> <br/>
                
                <h5> {Response} </h5>
                {Response === "Success" && <Navigate to="/Login" />}
            </div>
        </div>
    );
}

export default Signup;
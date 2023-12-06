import React, { useState } from "react";
import { Navigate } from "react-router-dom";

import MACROS from "./macros";

function Signup(){
    const url = MACROS.URL;
    const [Username, SetUsername] = useState("");
    const [Password, SetPassword] = useState("");
    const [Name, SetName] = useState("");
    const [Response, SetResponse] = useState("");
    
    function sendUsrCredits(){
        fetch(`${url}/usersdb/add`, {
            method: "POST", 
            headers: {"Content-Type": "application/json"},
            credentials: "include",
            body: JSON.stringify({
                "username": Username,
                "password": Password,
                "name": Name
            })
        })
        .then((res) => res.json())
        .then((res) => {
            if(res !== "Success"){
                SetUsername("");
                SetPassword("");
                SetName("");
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
                        value={Username}
                        onChange={(data) => {SetUsername(data.target.value)}}
                    /> <br/> <br/>
                    <input 
                        type="text"
                        placeholder="Password"
                        value={Password}
                        onChange={(data) => {SetPassword(data.target.value)}}
                    /> <br/> <br/>
                    <input 
                        type="text"
                        placeholder="Name"
                        value={Name}
                        onChange={(data) => {SetName(data.target.value)}}
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
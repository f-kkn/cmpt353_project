import React, { useState } from "react";
import { Navigate } from "react-router-dom";

import MACROS from "./macros";

function Login(){
    const url = MACROS.URL;
    const [Username, SetUsername] = useState("");
    const [Password, SetPassword] = useState("");
    const [Response, SetResponse] = useState("");


    function authenticateUser(){
        fetch(`${url}/usersdb/authUser`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            credentials: "include",
            body: JSON.stringify({
                "username": Username,
                "password": Password
            })
        })
        .then((res) => res.json())
        .then((res) => {
           if(res === "1"){
                //SetResponse("This user exist on db");
                SetResponse("good");
           } else{
                SetUsername("");
                SetPassword("");
                SetResponse("This user does not exist on db"); 
           }
        });
    }

    return(
        <div className="Login-page">
            <h1> Stack Overflow: Kind Of </h1> <br/> <br/>
            <div className="sign-in-block">
                <h3>Log in Below!</h3>
                <div className="sign-in-form">
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
                    <button onClick={authenticateUser}> Log In </button>
                </div> <br/>
                
                <h5> {Response} </h5>
                {Response === "good" && <Navigate to="/Main" />}
            </div>
        </div>
    )
}
export default Login;
import React from "react";
import { useState } from "react";

function Signup(){
    const [UserName, SetUserName] = useState("");
    const [Password, SetPassword] = useState("");

    function sendUsrCredits(){
        fetch('http://ip172-18-0-5-cllbnb0gftqg008g6qhg-8080.direct.labs.play-with-docker.com/addUser', {
            method: "POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "username": UserName,
                "password": Password
            })
        }).then((data) => {
            alert(JSON.stringify(data));
        })
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
                        onChange={(data) => {SetUserName(data.target.value)}}
                    /> <br/> <br/>
                    <input 
                        type="text"
                        placeholder="Password"
                        value={Password}
                        onChange={(data) => {SetPassword(data.target.value)}}
                    /> <br/> <br/>
                    <button onClick={sendUsrCredits}> Sign Up </button>
                </div>
            </div>
        </div>
    );
}

export default Signup;
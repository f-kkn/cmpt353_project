import React from "react";
import { useState } from "react";

function Signup(){
    const [UserName, SetUserName] = useState("");
    const [Password, SetPassword] = useState("");

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
                    <button> Sign Up </button>
                </div>
            </div>
        </div>
    );
}

export default Signup;
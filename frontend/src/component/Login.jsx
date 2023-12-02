import React, {useState} from "react";

function Login(){
    const url = 'http://ip172-18-0-7-cllph9ksnmng00bhkrt0-8080.direct.labs.play-with-docker.com';
    const [Username, SetUserName] = useState("");
    const [Password, SetPassword] = useState("");
    const [Response, SetResponse] = useState("");


    function authenticateUser(){
        fetch(`${url}/authUser`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "username": Username,
                "password": Password
            })
        })
        .then((res) => res.json())
        .then((res) => {
           if(res === "exist"){
                SetResponse("This user exist on db");
           } else{
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
                        onChange={(data) => {SetUserName(data.target.value)}}
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
            </div>
        </div>
    )
}
export default Login;
import React, {useState} from "react";

function Login(){
    const [UserName, SetUserName] = useState("");
    const [Password, SetPassword] = useState("");


    function checkButton(){
        console.log(`${UserName} and ${Password}`);
    }

    return(
        <div className="Landing-page">
            <h1> Stack Overflow: Kind Of </h1> <br/> <br/>
            <div className="sign-in-block">
                <div className="sign-in-form">
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
                    <button onClick={checkButton}> Submit </button>
                </div>
            </div>
        </div>
    )
}
export default Login;
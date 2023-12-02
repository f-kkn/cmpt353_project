import React, {useState} from "react";

function Login(){
    const [UserName, SetUserName] = useState("");
    const [Password, SetPassword] = useState("");


    function checkButton(){
        console.log(`${UserName} and ${Password}`);
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
                        value={UserName}
                        onChange={(data) => {SetUserName(data.target.value)}}
                    /> <br/> <br/>
                    <input 
                        type="text"
                        placeholder="Password"
                        value={Password}
                        onChange={(data) => {SetPassword(data.target.value)}}
                    /> <br/> <br/>
                    <button onClick={checkButton}> Log In </button>
                </div>
            </div>
        </div>
    )
}
export default Login;
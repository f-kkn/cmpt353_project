import React, {useState} from "react";

function Landing(){
    // const [UserName, SetUserName] = useState("");
    // const [Password, SetPassword] = useState("");


    function checkButton(){
        console.log(`${UserName} and ${Password}`);
    }

    return(
        <div className="Landing-page">
            <h1>My Stack Overflow: </h1> <br/> <br/>
            <div className="Opening-message">
                <h2> Welcome to </h2>
            </div>
        </div>
    )
}
export default Landing;
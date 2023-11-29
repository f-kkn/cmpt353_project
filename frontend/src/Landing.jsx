import React, {useState} from "react";

function Landing(){
    return(
        <div className="Landing-page">
            <h1>My Stack Overflow: </h1> <br/> <br/>
            <div className="Opening-message">
                <h2> Testing </h2> <br/>
                <button className="redirect-login"> Click to log in </button>
                <button className="redirect-signup"> Click to sign up </button>
            </div>
        </div>
    )
}
export default Landing;
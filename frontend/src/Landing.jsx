import React from "react";
import {Link} from "react-router-dom";

function Landing(){
    
    return(
        <div className="Landing-page">
            <h1>My Stack Overflow: </h1> <br/> <br/>
            <div className="Opening-message">
                <h2> Testing </h2> <br/>
                <Link to='/login'>
                    <button className="redirect-login"> Click to log in </button>
                </Link>
                <Link to='/Signup'>
                    <button className="redirect-signup"> Click to sign up </button>
                </Link>
            </div>
        </div>
    )
}
export default Landing;
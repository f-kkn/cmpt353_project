import React from "react";
import {Link} from "react-router-dom";

function Landing(){
    
    return(
        <div className="Landing-page">
            <h1>My Stack Overflow </h1> <br/> <br/>
            <div className="Opening-message">
                <h3> Welcome to my stack-overflow application. Post a  question so that 
                    other people can help you out!
                     </h3> <br/>
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
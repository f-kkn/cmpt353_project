import React, { useState } from "react";

import MACROS from "./macros";

function Main(){
    const url = MACROS.URL;
    const [channelname, setChannelname] = useState("");
    const usrOBJ = JSON.parse(getCookie("user"));
    
    function createChannel(){
        fetch(`${url}/channeldb/create`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "channelname": channelname,
                "uid": usrOBJ.user_id
            })
        })
        .then((res) => res.json())
        .then((res) => {
            alert(res);
            setChannelname("");
        })
    }

    function getCookie(user){
        let name = user + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) === ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) === 0) {
            return c.substring(name.length + 2, c.length);
          }
        }
        return "";
    }

    return(
        <div className="Main-page">
            <h1> Hello World</h1>
            <div className="select-channels">
                <input 
                    type="type"
                    placeholder="Channel Name"
                    value={channelname}
                    onChange={(data) => {setChannelname(data.target.value)}}
                /> <br/>
                <button onClick={createChannel}> Create A Channel </button>
            </div>
        </div>

    )
}

export default Main;
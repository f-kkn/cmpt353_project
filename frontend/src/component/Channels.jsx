import React from "react";
import { useState, useEffect } from "react";


import MACROS from "./macros";

function Channel(){
    const url = MACROS.URL;
    const [postData, setPostData] = useState("");
    const [channelOBJ, setChannelOBJ] = useState({});
    const [userOBJ, setUserOBJ] = useState("");

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

    function createPost(){
        fetch(`${url}/postdb/create`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            credentials: "include",
            body: JSON.stringify({
                "postname": userOBJ.userName,
                "postdata": postData
            })
        })
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
        })
    }

    useEffect(() => {
        setChannelOBJ(JSON.parse(getCookie("channel_info")));
        setUserOBJ(JSON.parse(getCookie("user")));
    }, []);

    return(
        <div className="Channel-page">
            <h1> {channelOBJ.name} </h1>
            <div className="post-block">
                <p> {channelOBJ.value} </p>
                <input
                    type="text"
                    placeholder="Type comment here"
                    style={{ width: '300px', height: '40px' }}
                    onChange={(data) => {setPostData(data.target.value)}}
                /> <br/>
                <button onClick={createPost}> Submit </button>
            </div>
        </div>
    )
}

export default Channel;
import React, { useState, useEffect } from "react";

import MACROS from "./macros";

import './Main.css';

function Main(){
    const url = MACROS.URL;
    const [channelname, setChannelname] = useState("");
    const [channelList, setChannelList] = useState([]);
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

    function getChannels(){
        fetch(`${url}/channeldb/show`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "uid": usrOBJ.user_id
            })
        })
        .then((res) => res.json())
        .then((res) => {
            setChannelList(res);
        });
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

    useEffect(() => {
        getChannels();
        if(channelList.length > 0){
            channelList.forEach((channel) => {
                document.getElementById("list-channels").innerHTML += `
                    <div className="channels"> 
                        <h3 onclick={alert('${channel.channelName}')}> ${channel.channelName} </h3>
                    </div> <br/>
                `;
            });
        }
    }, [channelList.length != 0]);

    return(
        <div className="Main-page">
            <h1> Channel List </h1>
            <div className="select-channels" id="channel-block">
                <input 
                    type="type"
                    placeholder="Channel Name"
                    value={channelname}
                    onChange={(data) => {setChannelname(data.target.value)}}
                /> <br/>
                <button onClick={createChannel}> Create A Channel </button> <br/> <br/> 
                <div className="channel-list" id="list-channels"> </div>
            </div>
        </div>
    )
}

export default Main;
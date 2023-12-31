import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import MACROS from "./macros";

import './Main.css';

function Main(){
    const url = MACROS.URL;
    const navigate = useNavigate();
    const [channelname, setChannelname] = useState("");
    const [channelData, setChannelData] = useState("");
    const [channelList, setChannelList] = useState([]);
    const usrOBJ = JSON.parse(getCookie("user"));
    
    function createChannel(){
        fetch(`${url}/channeldb/create`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "channelname": channelname,
                "channeldata": channelData,
                "uid": usrOBJ.user_id
            })
        })
        .then((res) => res.json())
        .then((res) => {
            
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

    function goToChannel(channel){
        fetch(`${url}/changeCookie`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            credentials: "include",
            body: JSON.stringify({
                "name": channel.channelName,
                "value": channel.channelData,
                "cid": channel.channel_id
            })
        })
        .then((data) => data.json())
        .then((data) => {console.log(data); navigate("/Channel");})
    }

    useEffect(() => {
        getChannels();
    }, []);

    return(
        <div className="Main-page">
            <h1> Channel List </h1>
            <div className="select-channels" id="channel-block">
                <input 
                    type="text"
                    placeholder="Channel Name"
                    value={channelname}
                    onChange={(data) => {setChannelname(data.target.value)}}
                /> <br/>
                <input
                    type="text"
                    placeholder="Type data here"
                    style={{ width: '300px', height: '40px' }}
                    onChange={(data) => {setChannelData(data.target.value)}}
                /> <br/>
                <button onClick={createChannel}> Create A Channel </button> <br/> <br/> 
                <div className="channel-list" id="list-channels">
                    {
                    Array.isArray(channelList) ? (
                        channelList.map((channel) => (
                            <div key={channel.channel_id} className="channels">
                            <h3 onClick={() => goToChannel(channel)}> {channel.channelName} </h3>
                            </div>
                        ))
                      ) : (
                        <p>No channels available.</p>
                      )
                    }
                </div>
            </div>
        </div>
    )
}

export default Main;
import React from "react";

import MACROS from "./macros";

function Main(){
    const url = MACROS.URL;
    
    function createChannel(){
        fetch(`${url}/channeldb/create`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "channelname": 'adasdasdasd'
            })
        })
        .then((res) => res.json())
        .then((res) => {
            alert(res);
        })
    }


    return(
        <div className="Main-page">
            <h1> Hello World</h1>
            <div className="select-channels">
                <button onClick={createChannel}> Create A Channel </button>
            </div>
        </div>

    )
}

export default Main;
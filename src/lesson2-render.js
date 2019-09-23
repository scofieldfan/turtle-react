import React from "react";
import ReactDOM from "react-dom";

function tick() {
    const element = (
        <div>
            <h1>hello tick</h1>
            <div>{new Date().toLocaleTimeString()}</div>
        </div>
    );
    ReactDOM.render(element, document.getElementById("root"));
}

setInterval(tick, 1000);

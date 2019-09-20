import React from "react";

let user = {
    fisrtName: "fan",
    lastName: "zhang"
};

function formatName(user) {
    return `${user.fisrtName}.${user.lastName}`;
}
function greeting(user) {
    if (user) {
        return `${user.fisrtName}.${user.lastName}`;
    } else {
        return "Stranger.";
    }
}
const name = "Josh Perez";
//const element = <h1>Hello, {greeting()}</h1>;

const element = React.createElement(
    "h1",
    { className: "greeting" },
    "Hi " + greeting(user)
);
export { element };

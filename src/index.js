// import { element } from "./lesson1-jsx.js";
//import * as render from "./lesson2-render.js";
//import { Hi } from "./lesson3-props.js";
//import { Clock } from "./lesson4-state.js";
import { World, Toggle } from "./lesson5-event.js";
import React from "react";
import ReactDOM from "react-dom";
function Welcome(props) {
    return <div>Hi , {props.name}</div>;
}
//ReactDOM.render(<Welcome name="fan" />, document.getElementById("root"));
const element = <h1>Hello, World!!</h1>;
function Test() {
    return element;
}
ReactDOM.render(<Toggle />, document.getElementById("root"));

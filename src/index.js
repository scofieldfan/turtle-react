// import { element } from "./lesson1-jsx.js";
//import * as render from "./lesson2-render.js";
//import { Hi } from "./lesson3-props.js";
//import { Clock } from "./lesson4-state.js";
// import { World, Toggle } from "./lesson5-event.js";

// import { Greeting, LoginControl, MailBox, Page } from "./lesson6-if.js";
//import { Item } from "./lesson7-list";
// import { NamedForm, EssayForm, FlavorForm, Reservation } from "./lesson8-form";

import { WelcomeDialog, App, SignUpDialog } from "./lesson9-combation";
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
const messages = ["React", "Re:React", "Re:Re:React"];
ReactDOM.render(<SignUpDialog />, document.getElementById("root"));

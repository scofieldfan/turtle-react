// import { element } from "./lesson1-jsx.js";
//import * as render from "./lesson2-render.js";
//import { Hi } from "./lesson3-props.js";
//import { Clock } from "./lesson4-state.js";
// import { World, Toggle } from "./lesson5-event.js";

// import { Greeting, LoginControl, MailBox, Page } from "./lesson6-if.js";
//import { Item } from "./lesson7-list";
// import { NamedForm, EssayForm, FlavorForm, Reservation } from "./lesson8-form";
// import { WelcomeDialog, App, SignUpDialog } from "./lesson9-combation";
//import { FilterableProductTable } from "./lesson10-solution";
//import * as test from "./lesson12-todos/index.js";
//import Example from "./lesson15-hooks-hello";
import Example from "./lesson19-todo-reducer";

import React from "react";
import ReactDOM from "react-dom";

function Welcome(props) {
  return <div> Hi, {props.name} </div>;
}
//ReactDOM.render(<Welcome name="fan" />, document.getElementById("root"));
const element = <h1> Hello, World!! </h1>;

function Test() {
  return element;
}
// const messages = ["React", "Re:React", "Re:Re:React"];
// ReactDOM.render(element, document.getElementById("root"));
// ReactDOM.render(<FilterableProductTable />, document.getElementById("root"));

ReactDOM.render(<Example />, document.getElementById("root"));

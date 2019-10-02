import React, { useState, useEffect } from "react";

function todosReducer(state, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    default:
      return state;
  }
}

function useReducer(reducer, initalState) {
  const [state, setState] = useState(initalState);
  function dispatch(action) {
    const nextState = reducer(state, action);
    setState(nextState);
  }
  return [state, dispatch];
}

export default function Todos() {
  const [todos, dispatch] = useReducer(todosReducer, []);
  function handleAddClick(text) {
    dispatch({ type: "add", text });
  }
  return (
    <>
      {todos.map((item, index) => {
        return <div key={index}>{item.text}</div>;
      })}

      <button
        onClick={() => {
          let item = prompt();
          handleAddClick(item);
        }}
      >
        add
      </button>
    </>
  );
}

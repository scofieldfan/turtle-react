import React, { useState, useReducer } from "react";

function init(initalCount) {
  return {
    count: initalCount
  };
}
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return init(action.payload);
    default:
      return state;
  }
}

function Counter({ initalCount }) {
  const [state, dispatch] = useReducer(reducer, initalCount, init);
  return (
    <>
      Count:{state.count}
      <button
        onClick={() => {
          dispatch({ type: "reset", payload: initalCount });
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        -
      </button>
    </>
  );
}
export default function Example() {
  return (
    <>
      <Counter initalCount={100}></Counter>
    </>
  );
}

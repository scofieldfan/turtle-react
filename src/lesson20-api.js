import React, { useState } from "react";

function Counter({ initalState }) {
  const [count, setCount] = useState(initalState);

  const handleAdd = () => {
    return setCount(preState => preState + 1);
  };

  return (
    <>
      <div>
        {count}
        <button onClick={() => setCount(initalState)}>reset</button>
        <button onClick={handleAdd}>+</button>
        <button onClick={() => setCount(preState => preState - 1)}>-</button>
      </div>
    </>
  );
}
export default function Example() {
  return (
    <>
      <Counter initalState={0}></Counter>
    </>
  );
}

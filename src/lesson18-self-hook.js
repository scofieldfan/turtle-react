import React, { useState, useEffect } from "react";

function useTest(name) {
  let [test, setTest] = useState(name);
  return [test, setTest];
}
function Test() {
  let [test, setTest] = useTest("ada");
  useEffect(() => {
    console.log("name has change!!!");
  });
  return (
    <>
      <p>you name: {test}</p>
      <button
        onClick={() => {
          let name = prompt();
          setTest(name);
        }}
      >
        change name{" "}
      </button>
    </>
  );
}

export default Test;

import React, { useState, useEffect } from "react";

function Example() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `you click ${count} times`;
  }, [count]);
  return (
    <>
      <p> you click {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click me
      </button>
    </>
  );
}

export default function Form() {
  const [name, setName] = useState("fan");
  useEffect(() => {
    localStorage.setItem("formData", name);
  });

  const [surName, setSurname] = useState("tina");
  useEffect(() => {
    document.title = name + " " + surName;
  });
  return (
    <>
      <p
        onClick={() => {
          let name = prompt();
          setName(name);
        }}
      >
        {name}
      </p>
      <p
        onClick={() => {
          let name = prompt();
          setSurname(name);
        }}
      >
        {surName}
      </p>
    </>
  );
}

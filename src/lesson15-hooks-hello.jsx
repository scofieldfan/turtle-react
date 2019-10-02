import React, { useState, useEffect } from "react";

let name = "ChatAPI";
// import ChatAPI from `./util/${name}`;

export function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `you click ${count} times`;
  });
  return (
    <div>
      <p>you click {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click me!!
      </button>
    </div>
  );
}

export function ExampleWithManyState() {
  const [age, setAge] = useState(18);
  const [fruit, setFruit] = useState("apple");
  const [todos, setTodos] = useState([{ text: "Learn webpack chain" }]);
  return (
    <div>
      <button
        onClick={() => {
          setAge(20);
          setFruit("banana");
          setTodos([{ text: "learn react hooks" }]);
        }}
      >
        {" "}
        change something.
      </button>
      <p>
        you choose {age} {fruit} {todos[0].text}
      </p>
    </div>
  );
}
export function useFriendStatus(FriendId) {
  const [isOnline, setIsOnline] = useState(null);
  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }
  useEffect(() => {
    let ChatAPI;
    async function test() {
      //尝试用一下异步
      ChatAPI = await import(`./util/${name}`);
      console.log(ChatAPI);
      console.log(ChatAPI.default);
      ChatAPI.default.subscribeToFriendStatus(FriendId, handleStatusChange);
    }
    test();
    return () => {
      ChatAPI.default.unsubscribeFromFriendStatus(FriendId, handleStatusChange);
    };
  });
  return isOnline;
}
function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id);
  if (isOnline === null) {
    return "Loading..";
  }
  return isOnline ? "Online" : "Offline";
}
function FriendListItems(props) {
  const isOnline = useFriendStatus(props.friend.id);
  return (
    <li style={{ color: isOnline ? "green" : "black" }}>{props.friend.name}</li>
  );
}
export default function() {
  let friend = { id: 1, name: "fan" };
  return (
    <div>
      <FriendStatus friend={friend} />
      <FriendListItems friend={friend} />
      {/* <ExampleWithManyState /> */}
    </div>
  );
}

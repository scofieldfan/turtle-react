import React from "react";

const numbers = [1, 2, 3, 4, 5, 6];

const listItems = numbers.map((number, index) => {
    return <li key={index}>{number}</li>;
});
function Item(props) {
    return <ul>{listItems}</ul>;
}
export { Item };

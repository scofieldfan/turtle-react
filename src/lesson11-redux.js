import { createStore } from 'redux';
import * as aaa from './config'

console.log(aaa.a);
function counter(state = 0, action) {
    switch (action.type) {
        case "INCREMENT": return state + 1;
        case "DECREMENT": return state - 1;
        default: return state;
    }
}

let store = createStore(counter);

store.subscribe(() => {
    console.log(store.getState());
});

console.log("dispatch.", store.dispatch({ type: 'INCREMENT' }))


store.dispatch({ type: 'DECREMENT' })
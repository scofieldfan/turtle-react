import {
    addTodo, toggleTodo
} from './actions';


import todoApp from './reducers';

import { createStore } from 'redux';


let store = createStore(todoApp);

store.subscribe(() => {
    console.log(store.getState());
});


store.dispatch(addTodo("webpack"))
store.dispatch(addTodo("kissy"))
store.dispatch(addTodo("react"))
store.dispatch(addTodo("redux"))
store.dispatch(addTodo("hook"))
store.dispatch(addTodo("typescript"))

store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))


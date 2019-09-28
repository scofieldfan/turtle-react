import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters
} from './actions'

import { combineReducers } from 'redux'


const initalState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
}

function todos(todos = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [...todos, { text: action.text, completed: false }]

        case TOGGLE_TODO:
            return todos.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo;
            })
        default: return todos

    }
}

function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
    console.log(state);
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default: return state
    }

}

// function todoApp(state = initalState, action) {
//     return {
//         visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//         todos: todos(state.todos, action)
//     }
// }

const todoApp = combineReducers({
    visibilityFilter,
    todos
})

export default todoApp;
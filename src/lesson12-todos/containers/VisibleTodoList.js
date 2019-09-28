import React from 'react'
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList'
import { connect } from 'react-redux'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_COMPLETED': return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE': return todos.filter(t => !t.completed);
        case 'SHOW_ALL': return todos;
        default: return todos;
    }
}


const mapStateToProps = (state) => {
    console.log('map..', state);
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id))
        }
    }
}

const VisibleTodos = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)


export default VisibleTodos;
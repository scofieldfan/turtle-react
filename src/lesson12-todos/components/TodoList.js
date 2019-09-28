import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'


const TodoList = ({ todos, onTodoClick }) => (
    <ul>
        {todos.map((todo, index) => {
            return <Todo key={index} {...todo} onClick={() => { onTodoClick(index) }} ></Todo>
        })}
    </ul >
)

Todo.PropTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

TodoList.PropTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        })
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
}
export default TodoList;
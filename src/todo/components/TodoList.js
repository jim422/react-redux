import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo.js'

const TodoList = ({ todos, toggleTodo }) => (
	<ul>
		{ todos.map(todo => {
			<Todo
				key = { todo.id }
				{...todo}
				onClick = { () => toggleTodo(id)}
			/>
		}) }
	</ul>
);

TodoList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		completed: PropTypes.bool.isRequired,
		text: PropTypes.string.isRequired
	}))
};

export default TodoList
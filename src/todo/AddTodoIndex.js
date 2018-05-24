import React from 'react'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

const AddTodoIndex = () => (
	<div>
		<AddTodo/>
		<VisibleTodoList/>
		<Footer/>
	</div>
);

export default AddTodoIndex
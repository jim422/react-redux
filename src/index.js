import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import AddTodoIndex from './todo/AddTodoIndex.js'
import rootReducer from './rootReducer'

const store = createStore(rootReducer);
ReactDOM.render(
	<Provider store={ store }>
		<div>
			<App/>
			<AddTodoIndex />
		</div>
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();

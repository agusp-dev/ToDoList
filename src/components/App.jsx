import React from 'react'
import MainView from '../view/MainView/MainView'
import TasksRemovedView from '../view/TasksRemovedView/TasksRemovedView'
import { BrowserRouter, Route } from 'react-router-dom'

const App = () => {
    return  (
			<BrowserRouter>
				<div className='ui container'>
					<h1 className='ui huge header main-header'>To Do List</h1>
					<Route path='/' exact component={MainView}/>
					<Route path='/removed' component={TasksRemovedView}/>
				</div>
			</BrowserRouter>
		)
}

export default App
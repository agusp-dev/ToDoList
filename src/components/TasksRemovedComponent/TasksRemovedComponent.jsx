import React from 'react'
import { taskLib } from '../../utils/TaskLib'

class TasksRemovedComponent extends React.Component {
	constructor() {
		super()
		this.state = {
			removedTasks: []
		}
		this.getRow = this.getRow.bind(this)
		this.onHandleRestoreTask = this.onHandleRestoreTask.bind(this)
	}

	componentDidMount() {
		this.setState({
			removedTasks: taskLib.getRemovedTaskList()
		})
	}

	onHandleRestoreTask(task) {
		taskLib.restoreTask(task)
		this.setState({
			removedTasks: taskLib.getRemovedTaskList()
		})
	}

	getRow(task) {
		if (!task) return <tr></tr>
		return (
			<tr key={task.id}>
				<td colSpan='2'>{ task.title }</td>
				<td colSpan='5'>{ task.description }</td>
				<td colSpan='1' className='center aligned'>
					<button className='ui blue circular icon button'
						onClick={ () => this.onHandleRestoreTask(task) }>
						<i aria-hidden="true" className="undo icon"></i>
					</button>
				</td>
			</tr>
		)
	}
	
	render() {
		return ( 
			<div className='ui container'>
				<table className='ui celled fixed single line table'>
					<thead>
						<tr>
							<th colSpan='2'>Title</th>
							<th colSpan='5'>Description</th>
							<th colSpan='1' className='center aligned'>Actions</th>
						</tr>
					</thead>
					<tbody>
						{
							this.state.removedTasks.map( task => {
								return this.getRow(task)
							})
						}
					</tbody>
				</table>
			</div>
		)
	}
}

export default TasksRemovedComponent
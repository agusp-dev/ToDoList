import React from 'react'
import TaskList from '../TaskList/TaskList'
import { taskLib } from '../../utils/TaskLib'

class MainComponent extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			tasks: []
		}
		this.onChangeTaskState = this.onChangeTaskState.bind(this)
		this.onDeleteTask = this.onDeleteTask.bind(this)
	}

	componentDidMount() {
		this.setState({
			tasks: taskLib.taskList
		})
	}

	onChangeTaskState(taskId, oldState) {
		taskLib.changeTask(taskId, oldState)
		this.setState({
			tasks: taskLib.taskList
		})
	}

	onDeleteTask(taskId) {
		taskLib.removeTask(taskId)
		this.setState({
			tasks: taskLib.taskList
		})
	}

	render() {
		return (
			<div className='ui container'>
				<div className='ui divider'></div>
				<div className='ui grid'>
					<div className='three column row'>
						
					<div className='column'>
							<TaskList 
									name='To Do'
									color='red'
									tasks={ this.state.tasks.filter( task => task.state === 0 )}
									onChangeTask={ this.onChangeTaskState }
									onDeleteTask={ this.onDeleteTask } />
						</div>
						<div className='column'>
								<TaskList 
										name='In Progress'
										color='orange'
										tasks={ this.state.tasks.filter( task => task.state === 1 ) }
										onChangeTask={ this.onChangeTaskState }
										onDeleteTask={ this.onDeleteTask } />
						</div>
						<div className='column'>
								<TaskList 
										name='Done'
										color='green'
										tasks={ this.state.tasks.filter( task => task.state === 2 ) }
										onChangeTask={ this.onChangeTaskState }
										onDeleteTask={ this.onDeleteTask } />
						</div>

					</div>
				</div>
			</div>
		)        
	}
}

export default MainComponent
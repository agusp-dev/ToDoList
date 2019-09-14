import React from 'react'
import TaskItem from '../Taskitem/TaskItem'

class TaskList extends React.Component {
	constructor(props) {
			super(props)
			this.state = {
				name: '',
				color: '',
				tasks: []
			}
	}

	UNSAFE_componentWillReceiveProps(nextProps, nextStates) {
			this.setState({
				name: nextProps.name,
				color: nextProps.color,
				tasks: nextProps.tasks,
				onChangeTask: nextProps.onChangeTask,
				onDeleteTask: nextProps.onDeleteTask
			})
	}

	shouldComponentUpdate(nextProps) {
		return ( this.name !== nextProps.name || 
				this.color !== nextProps.color )
	}
	render() {
		return (
			<div >
				<div className={`row ui big center ${this.state.color} label`}>
						{this.state.name}
				</div>
				<div role='list' className='row ui list'>
					{this.state.tasks.map( task => {
						return (
							<div key={task.id} role='listitem' className='item row'>
								<TaskItem 
									id={task.id}
									title={task.title}
									description={task.description}
									state={task.state}
									onChangeTask={this.state.onChangeTask}
									onDeleteTask={this.state.onDeleteTask}
									/>
							</div>
						)
					})}
				</div>
			</div>
		)
	}
}

export default TaskList
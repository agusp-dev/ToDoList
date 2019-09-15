import React from 'react'
import { Link } from 'react-router-dom'

class TasksRemovedView extends React.Component {

	render() {
		return (
			<div className='ui container'>
				<div className="ui vertically divided grid">
					<div className='two column row'>
						<div className='column'>
							<h2 className='ui medium header grey main-header'>Removed Task List</h2>
						</div>
						<div className='ui column right aligned container'>
							<Link to='/'>
								<button className='ui button'
									onClick={this.onHandleNewTask}>
									<i className='arrow left icon'></i>
										Go Back</button>
							</Link>
						</div>
					</div>
				</div>
				<div className='ui divider'></div>
			</div>
		)
	}
}

export default TasksRemovedView
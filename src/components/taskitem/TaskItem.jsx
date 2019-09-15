import React from 'react'
import { taskStates } from '../../utils/Constants'

class TaskItem extends React.Component {
    constructor(props) {
				super(props)
				this.id = this.props.id
        this.title = this.props.title
				this.description = this.props.description
				this.stt = this.props.state
				this.onChangeTask = this.props.onChangeTask
				this.onDeleteTask = this.props.onDeleteTask

				this.onHandleChangeState = this.onHandleChangeState.bind(this)
				this.onHandleDeleteTask = this.onHandleDeleteTask.bind(this)
		}
		
		onHandleChangeState(e) {
			e.preventDefault()
			this.onChangeTask(this.id, this.stt)
		}

		onHandleDeleteTask(e) {
			e.preventDefault()
			this.onDeleteTask(this.id)
		}

		getItemButtons() {
			if (this.stt !== taskStates.DONE) {
				return (
					<div className='ui right aligned container'>
						<button className="ui circular icon button" 
									onClick={this.onHandleChangeState}>
									<i aria-hidden="true" className="checkmark icon"></i></button>
						<button className="ui circular icon button"
							onClick={this.onHandleDeleteTask}>
							<i aria-hidden="true" className="remove icon"></i></button>
					</div>
				)
			}
			return (
				<div className='ui right aligned container'>
					<button className="ui circular icon button"
						onClick={this.onHandleDeleteTask}>
						<i aria-hidden="true" className="remove icon"></i></button>
				</div>
			)
		}

    render() {
			return (
				<div className="ui card">
					<div className="content">
						<div className="header">{this.title}</div>
						<div className='ui divider'></div>
						<div className="description">{this.description}</div>
						<div className="ui divider"></div>
						{this.getItemButtons()}
					</div>
			</div>
			)
    }
}

export default TaskItem
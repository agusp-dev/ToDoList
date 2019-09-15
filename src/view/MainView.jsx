import React from 'react'
import { Modal, Button } from 'semantic-ui-react'
import MainComponent from '../components/MainComponent/MainComponent'
import { taskLib } from '../utils/TaskLib'
import './styles.css'

class MainView extends React.Component {
	constructor() {
		super()
		this.state = {
			newTaskModal: false
		}
		this.onHandleNewTask = this.onHandleNewTask.bind(this)
		this.onHandleRemovedTasks = this.onHandleRemovedTasks.bind(this)

		this.onSubmitNewTask = this.onSubmitNewTask.bind(this)
		this.onCloseModal = this.onCloseModal.bind(this)
	}

	onHandleNewTask(e) {
		e.preventDefault()
		this.setState({ newTaskModal: true })
	}

	onCloseModal(e) {
		e.preventDefault()
		this.setState({ newTaskModal: false })
	}

	onSubmitNewTask(e) {
		e.preventDefault()
		const title = e.target.title.value
		const desc = e.target.description.value
		if (!title || !desc) return
		taskLib.addTask(title, desc)
		this.onCloseModal(e)
	}

	onHandleRemovedTasks(e) {
		console.log('onHandleRemovedTasks')
	}

	render() {
		return (
			<div className='ui container'>

			<Modal size='tiny' open={this.state.newTaskModal} onClose={this.onCloseModal}>
				<Modal.Header>Create New Task</Modal.Header>
				<Modal.Content>
					<form id='new-task' className='ui form' onSubmit={this.onSubmitNewTask}>
						<div className='field'>
							<div className='ui input'>
								<input name='title' type="text" placeholder='Title'/>
							</div>
						</div>
						<div className='field'>
							<div className='ui input'>
								<textarea name='description' placeholder="Description" rows="4"></textarea>
							</div>
						</div>
					</form>
				</Modal.Content>
				<Modal.Actions>
					<Button 
						negative
						onClick={this.onCloseModal}>
							Cancel
					</Button>
					<Button
						type='submit'
						form='new-task'
						positive>
							Save
					</Button>
				</Modal.Actions>
			</Modal>

				<h1 className='ui huge header main-header'>To Do List</h1>
				<div className="ui vertically divided grid">
					<div className='two column row'>
						<div className='column'>
							<h2 className='ui medium header grey main-header'>Task list with different states</h2>
						</div>
						<div className='ui column right aligned container'>
							<button className='ui button'
								onClick={this.onHandleNewTask}>
								<i className='plus icon'></i>
									New Task</button>
							<button className='ui red button'
								onClick={this.onHandleRemovedTasks}>
								<i className='trash icon'></i>
									Removed Tasks</button>
						</div>
					</div>
				</div>
				<div className='ui divider'></div>
				<MainComponent />
			</div>
		)
	}
}

export default MainView
import { taskStates } from '../utils/Constants'

let taskList = [
	{
		id: 1,
		title: 'Alineado y balanceado',
		description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
		state: 0
	},
	{
		id: 2,
		title: 'Cambio de aceite',
		description: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
		state: 0
	},
	{
		id: 3,
		title: 'Frenos',
		description: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
		state: 1
	},
	{
		id: 4,
		title: 'Rectificación de motor',
		description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.',
		state: 1
	},
	{
		id: 5,
		title: 'Chapa y pintura',
		description: 'A Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.',
		state: 2
	}
]

function removeTask(id) {
	if (!taskList) return
	let task = getTask(id)
	if (!task) return
	changeTaskState(task, taskStates.DELETED)
}

function changeTask(id, oldState) {
	if (!taskList) return
	let task = getTask(id)
	if (!task) return
	switch (oldState) {
		case taskStates.TO_DO:
			changeTaskState(task, taskStates.IN_PROGRESS)
			break
		case taskStates.IN_PROGRESS:
			changeTaskState(task, taskStates.DONE)
			break	
	}
}

function getTask(id) {
	return taskList.find( task => task.id === id )
}

function changeTaskState(task, newState) {
	task.state = newState
}

export const taskLib = {
	taskList,
	removeTask,
	changeTask
}
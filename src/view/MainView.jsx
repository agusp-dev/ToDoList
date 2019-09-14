import React from 'react'
import MainComponent from '../components/MainComponent/MainComponent'
import './styles.css'

class MainView extends React.Component {
	render() {
		return (
			<div className='ui container'>
				<h1 className='ui header main-header'>To Do List</h1>
				<MainComponent />
			</div>
		)
	}
}

export default MainView
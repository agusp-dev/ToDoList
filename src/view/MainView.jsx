import React from 'react'
import TaskList from '../components/tasklist/TaskList'

class MainView extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className='ui container'>
                    To Do List
                    <div className='ui divider' />
                    <div className='ui grid'>
                        <div className='three column row'>
                            <div className='column'>
                                <TaskList 
                                    name='To Do'
                                    color='red'/>
                            </div>
                            <div className='column'>
                                <TaskList 
                                    name='In Progress'
                                    color='orange'/>
                            </div>
                            <div className='column'>
                                <TaskList 
                                    name='Done'
                                    color='green'/>
                            </div>
                        </div>
                    </div>
                </div>
    }
}

export default MainView
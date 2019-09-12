import React from 'react'
import TaskItem from '../taskitem/TaskItem'

class TaskList extends React.Component {
    constructor(props) {
        super(props)
        this.name = this.props.name
        this.color = this.props.color
        this.tasks = this.getTasksList()
    }

    getTasksList() {
        return [
            {
                title: 'Tarea 1',
                description: 'Descripcion tarea 1'
            },
            {
                title: 'Tarea 2',
                description: 'Descripcion tarea 2'
            },
            {
                title: 'Tarea 3',
                description: 'Descripcion tarea 3'
            }
        ]
    }

    render() {
        return <div className={`ui big ${this.color} label`}>
                    {this.name}
                    <div>
                        {this.tasks.map( task => {
                            console.log( 'item' )       
                        })}
                    </div>
                    
                </div>
    }
}

export default TaskList
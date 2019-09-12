import React from 'react'

class TaskItem extends React.Component {
    constructor(props) {
        super(props)
        this.title = this.props.title
        this.description = this.props.description
    }

    render() {
        return <div className='ui label'>
                    {this.title}
                </div>
    }
}

export default TaskItem
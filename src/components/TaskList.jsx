import Task from './Task';
import React from 'react'

function TaskList(props) {
  return (
    <div> {props.tasks.map(task => <Task task={task} />)} </div>
  )
}

export default TaskList

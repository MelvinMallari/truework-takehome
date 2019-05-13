import React from 'react'

function Task(props) {
  return (
    <div className="task-item">
      {props.task.content}
    </div>
  );
}

export default Task

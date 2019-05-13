import React from 'react';

function Task(props) {
  const { task, columnId } = props;
  return (
    <div className="task-item">
      <div> {task.content} </div>
      <button onClick={props.delTask.bind(this, task.id, columnId)}>Delete</button>
    </div>
  );
}

export default Task;

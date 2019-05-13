import React from 'react';

function Task(props) {
  const { task, columnId } = props;
  return (
    <div className="task-item">
      <div> {task.content} </div>
      <button onClick={props.delTask.bind(this, task.id, columnId)}>Delete</button>
      <button onClick={props.moveNext.bind(this, task.id, columnId)}>Next</button>
      {/* <button onClick={props.movePrev.bind(this, task.id, columnId)}>Previous</button> */}
    </div>
  );
}

export default Task;

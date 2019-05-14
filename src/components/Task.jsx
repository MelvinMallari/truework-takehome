import React from 'react';
import { parseColId } from '../utils/util';

function Task(props) {
  const { task, columnId, columnOrder, delTask, movePrev, moveNext } = props;

  const renderNext = () => (
    <button onClick={moveNext.bind(this, task.id, columnId)}>Next</button>
  )

  const renderPrev = () => (
    <button onClick={movePrev.bind(this, task.id, columnId)}>Previous</button>
  )

  const firstColId = 1;
  const lastColId = columnOrder.length;

  return (
    <div className="task-item">
      <div> {task.content} </div>
      <button onClick={delTask.bind(this, task.id, columnId)}>Delete</button>
      {parseColId(columnId) !== firstColId && renderPrev()}
      {parseColId(columnId) !== lastColId && renderNext()}
    </div>
  );
}

export default Task;

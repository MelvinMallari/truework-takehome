import React from 'react';
import Task from './Task';

function TaskList(props) {
  const { delTask, columnId, moveNext, movePrev } = props;
  return (
    <div>
      {' '}
      {props.tasks.map(task => (
        <Task 
          task={task} 
          key={task.id} 
          delTask={delTask} 
          columnId={columnId} 
          moveNext={moveNext} />
      ))}{' '}
    </div>
  );
}

export default TaskList;

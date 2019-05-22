import React from 'react';
import Task from './Task';

function TaskList(props) {
  const { delTask, columnId, columnOrder, moveNext, movePrev, tasks } = props;
  return (
    <div>
      {' '}
      {tasks.map(task => (
        <Task
          task={task}
          key={task.id}
          delTask={delTask}
          columnId={columnId}
          columnOrder={columnOrder}
          movePrev={movePrev}
          moveNext={moveNext}
        />
      ))}{' '}
    </div>
  );
}

export default TaskList;

import React from 'react';
import TaskList from './TaskList';

function Column(props) {
  const { column, columnOrder, tasks, delTask, movePrev, moveNext } = props;
  return (
    <div className={`column ${column.id}`}>
      <header className="column-title">{column.title}</header>
      <TaskList
        className="task-list"
        tasks={tasks}
        delTask={delTask}
        columnId={column.id}
        columnOrder={columnOrder}
        movePrev={movePrev}
        moveNext={moveNext}
      />
    </div>
  );
}

export default Column;

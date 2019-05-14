import React from 'react';
import Column from './Column';

function Columns(props) {
  const { allTasks, columns, columnOrder, delTask, movePrev, moveNext } = props;
  return (
    <div className="columns-wrapper">
      {columnOrder.map(columnId => {
        const column = columns[columnId];
        const tasks = column.taskIds.map(taskId => allTasks[taskId]);
        return <Column 
                  key={column.id} 
                  column={column} 
                  columnOrder={columnOrder}
                  tasks={tasks} 
                  delTask={delTask}
                  movePrev={movePrev}
                  moveNext={moveNext} />
      })}
    </div>
  );
}

export default Columns;

import React from 'react'
import Column from './Column';

function Columns(props) {
  const { allTasks, columns, columnOrder } = props;
  return (
    <div>
      {
        columnOrder.map(columnId => {
          const column = columns[columnId];
          const tasks = column.taskIds.map(taskId => allTasks[taskId]);
          return <Column key={column.id} column={column} tasks={tasks} />
        })
      }
    </div>
  )
}

export default Columns

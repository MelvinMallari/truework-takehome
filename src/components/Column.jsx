import React, { Component } from 'react';
import TaskList from './TaskList';

export class Column extends Component {
  render() {
    const { column, columnOrder, tasks, delTask, movePrev, moveNext } = this.props;
    return (
      <div className="column">
        <header className="column-title">{column.title}</header>
        <TaskList 
          className="task-list" 
          tasks={tasks} 
          delTask={delTask} 
          columnId={column.id}
          columnOrder={columnOrder}
          movePrev={movePrev}
          moveNext={moveNext} />
      </div>
    );
  }
}

export default Column;

import './App.css';
import initialData from './initial-data';
import React, { Component } from 'react';
import Column from './components/Column';

export class App extends Component {
  state = initialData;

  render() {
    return this.state.columnOrder.map(columnId => {
      const column = this.state.columns[columnId];
      const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
      return <Column key={column.id} column={column} tasks={tasks} />
    })
  }
}

export default App;
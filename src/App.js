import './App.css';
import initialData from './initial-data';
import React, { Component } from 'react';
import Columns from './components/Columns';
import TaskForm from './components/TaskForm';

export class App extends Component {
  state = initialData;

  render() {
    const { columns, tasks, columnOrder } = this.state;
    return (
      <div className="columns-wrapper">
        <TaskForm />
        <Columns columns={columns} allTasks={tasks} columnOrder={columnOrder} />
      </div>
    )
  }
}

export default App;
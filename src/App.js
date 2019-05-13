import './App.css';
import React, { Component } from 'react';
import initialData from './initial-data';
import Columns from './components/Columns';
import TaskForm from './components/TaskForm';

export class App extends Component {
  state = initialData;

  componentDidMount() {
    // Check if items in local storage on refresh
    const storedTasks = localStorage.getItem('tasks');
    const storedColumns = localStorage.getItem('columns');
    const storedColumnOrder = localStorage.getItem('columnOrder');

    storedTasks &&
      storedColumns &&
      storedColumnOrder &&
      this.setState({
        tasks: JSON.parse(storedTasks),
        columns: JSON.parse(storedColumns),
        columnOrder: JSON.parse(storedColumnOrder)
      });
  }

  componentDidUpdate(prevState) {
    if (prevState !== this.state) {
      // Update local storage if state updates
      localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
      localStorage.setItem('columns', JSON.stringify(this.state.columns));
      localStorage.setItem('columnOrder', JSON.stringify(this.state.columnOrder));
    }
  }

  addTask = newTask => {
    const { tasks, columns } = this.state;
    const newTasks = Object.assign({}, tasks);
    const newColumns = Object.assign({}, columns);

    // Add task to task slice
    newTasks[newTask.id] = { id: newTask.id, content: newTask.content };

    // Add task to todo column
    const todoColumnId = 'column-1';
    const oldTasks = newColumns[todoColumnId].taskIds;
    newColumns[todoColumnId].taskIds = [...oldTasks, newTask.id];

    this.setState({ tasks: newTasks, columns: newColumns });
  };

  delTask = (taskId, columnId) => {
    const { tasks, columns } = this.state;
    const newTasks = Object.assign({}, tasks);
    const newColumns = Object.assign({}, columns);

    delete newTasks[taskId];
    const oldTasks = newColumns[columnId].taskIds;
    newColumns[columnId].taskIds = [...oldTasks.filter(oldTaskId => oldTaskId !== taskId)];
    this.setState({ tasks: newTasks, columns: newColumns });
  };

  render() {
    const { columns, tasks, columnOrder } = this.state;
    return (
      <div className="columns-wrapper">
        <TaskForm tasks={tasks} addTask={this.addTask} />
        <Columns
          columns={columns}
          allTasks={tasks}
          columnOrder={columnOrder}
          delTask={this.delTask}
        />
      </div>
    );
  }
}

export default App;

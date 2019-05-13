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

  addTask = (newTask, columnId) => {
    const { tasks, columns } = this.state;
    const newTasks = Object.assign({}, tasks);
    const newColumns = Object.assign({}, columns);

    // Add task to task slice
    newTasks[newTask.id] = { id: newTask.id, content: newTask.content };

    // Add task to todo column
    const oldTasks = newColumns[columnId].taskIds;
    newColumns[columnId].taskIds = [...oldTasks, newTask.id];

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

  moveNext = (taskId, columnId) => {
    const { tasks, columns } = this.state;
    const newColumns = Object.assign({}, columns);
    // Remove from current column
    const taskInd = newColumns[columnId].taskIds.indexOf(taskId);
    newColumns[columnId].taskIds.splice(taskInd);

    // Add to new Column
    const newColIndex = parseInt(columnId.split('-')[1]) + 1;
    const newColId = `column-${newColIndex}`;
    const oldTasks = newColumns[newColId].taskIds;
    newColumns[newColId].taskIds = [...oldTasks, taskId];
    this.setState({ columns: newColumns });
  }

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
          moveNext={this.moveNext}
        />
      </div>
    );
  }
}

export default App;

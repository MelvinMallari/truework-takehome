import './App.css';
import React, { Component } from 'react';
import initialData from './initial-data';
import Columns from './components/Columns';
import TaskForm from './components/TaskForm';
import { parseColId } from './utils/util';

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
    if (!newTask.content.length) { 
      this.setState({errors: true});
      return;
    } 
    const [newTasks, newColumns] = this.cloneState();

    // Add task to task slice
    newTasks[newTask.id] = { id: newTask.id, content: newTask.content };

    // Add task to todo column
    const oldTasks = newColumns[columnId].taskIds;
    newColumns[columnId].taskIds = [...oldTasks, newTask.id];

    this.setState({ tasks: newTasks, columns: newColumns, errors: false });
  };

  cloneState = () => ( 
    [Object.assign({}, this.state.tasks), Object.assign({}, this.state.columns)]
  )

  delTask = (taskId, columnId) => {
    const [newTasks, newColumns] = this.cloneState();
    delete newTasks[taskId];
    const oldTasks = newColumns[columnId].taskIds;
    newColumns[columnId].taskIds = [...oldTasks.filter(oldTaskId => oldTaskId !== taskId)];
    this.setState({ tasks: newTasks, columns: newColumns });
  };

  moveCol = (taskId, columnId, newColIndex) => {
    const newColumns = Object.assign({}, this.state.columns);
    // Remove from current column
    const taskInd = newColumns[columnId].taskIds.indexOf(taskId);
    newColumns[columnId].taskIds.splice(taskInd,1);

    // Add to new Column
    const newColId = `column-${newColIndex}`;
    const oldTasks = newColumns[newColId].taskIds;
    newColumns[newColId].taskIds = [...oldTasks, taskId];
    this.setState({ columns: newColumns });
  }

  moveNext = (taskId, columnId) => {
    this.moveCol(taskId, columnId, parseColId(columnId) + 1);
  }

  movePrev = (taskId, columnId) => {
    this.moveCol(taskId, columnId, parseColId(columnId) - 1);
  }


  render() {
    const { columns, tasks, columnOrder, errors } = this.state;
    return (
      <div className="kanban-wrapper">
        <TaskForm tasks={tasks} addTask={this.addTask} errors={errors} />
        <Columns
          columns={columns}
          allTasks={tasks}
          columnOrder={columnOrder}
          delTask={this.delTask}
          moveNext={this.moveNext}
          movePrev={this.movePrev}
        />
      </div>
    );
  }
}

export default App;

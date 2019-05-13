import React, { Component } from 'react'
import TaskList from './TaskList';

export class Column extends Component {
  render() {
    const { column, tasks } = this.props;
    return (
      <div className="column">
        <header className="column-title">{column.title}</header>
        <TaskList tasks={tasks} />
      </div>
    )
  }
}

export default Column

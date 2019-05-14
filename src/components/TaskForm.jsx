import React, { Component } from 'react';
import uuid from "uuid";

export class TaskForm extends Component {
  state = { content: '' };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newTask = { id: uuid.v4(), content: this.state.content };
    const todoColumnId = 'column-1';
    this.setState({ content: '' });
    this.props.addTask(newTask, todoColumnId);
  };

  renderErrors() {
    return this.props.errors ? <div className="errors">Task cannot be blank</div> : null
  }

  render() {
    return (
      <div className="column">
        <form className="form" onSubmit={this.handleSubmit}>
          <header className="column-title">Add Task</header>
          <textarea
            className="task-input"
            placeholder="Add task..."
            name="content"
            value={this.state.content}
            onChange={this.onChange} />
          <input className="add-task-btn button" type="submit" value="Add" />
          {this.renderErrors()}
        </form>
      </div>
    );
  }
}

export default TaskForm;

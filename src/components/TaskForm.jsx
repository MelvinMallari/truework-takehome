import React, { Component } from 'react';

export class TaskForm extends Component {
  state = {
    content: ''
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newId = Object.keys(this.props.tasks).length + 1;
    const newTask = {
      id: `task-${newId}`,
      content: `${this.state.content}`
    };
    this.setState({ content: '' });
    const todoColumnId = 'column-1';
    this.props.addTask(newTask, todoColumnId);
  };

  render() {
    return (
      <div className="column">
        <form className="form" onSubmit={this.handleSubmit}>
          <header className="column-title">ADD TASK</header>
          <textarea
            placeholder="Add task..."
            name="content"
            value={this.state.content}
            onChange={this.onChange}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default TaskForm;

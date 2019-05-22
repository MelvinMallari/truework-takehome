import React, { Component } from 'react';

export class SearchForm extends Component {
  state = {
    content: '',
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    const { search } = this.props;
    const { content } = this.state;
    e.preventDefault();
    search(content);
    this.setState({ content: '' });
  };

  render() {
    const { content } = this.state;
    return (
      <div className="column">
        <form className="form" onSubmit={this.handleSubmit}>
          <header className="column-title">Search Term</header>
          <textarea
            className="task-input"
            placeholder="Search Terms.."
            name="content"
            value={content}
            onChange={this.onChange}
          />
          <input className="add-task-btn button" type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

export default SearchForm;

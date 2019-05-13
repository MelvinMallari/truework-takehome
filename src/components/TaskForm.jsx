import React from 'react'

function TaskForm(props) {
  return (
    <div className="column">
      <div className="form-wrapper">
        <header className="column-title"> ADD TASK</header>
        <textarea placeholder="Add task..."></textarea>
        <input type="submit" value="Add" />
      </div>
    </div >
  )
}

export default TaskForm

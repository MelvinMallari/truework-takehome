const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: "Create Columns" },
    'task-2': { id: 'task-2', content: "Create add task form" },
    'task-3': { id: 'task-3', content: "Create add task form" },
    'task-4': { id: 'task-4', content: "Create task" },
    'task-5': { id: 'task-5', content: "style" },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'TODO',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5']
    }
  },
  columnOrder: ['column-1'],
}

export default initialData;
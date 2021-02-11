export function allTodos(state) {
  // returns an array of todos
  // * sorted by due date
  return Object.values(state.todos)
}

export function todosBydueAt(state) {
  return allTodos(state).sort((todo1, todo2) => {
    if (todo1.dueAt < todo2.dueAt) {
      return -1
    } else if (todo1.dueAt === todo2.dueAt) {
      return 0
    } else {
      return 1
    }
  })
}

export function todosByCompletedAt(state) {
  return allTodos(state).sort((todo1, todo2) => {
    if (todo1.completedAt < todo2.completedAt) {
      return -1
    } else if (todo1.completedAt === todo2.completedAt) {
      return 0
    } else {
      return 1
    }
  })
}

export function incompleteTodos(state) {
  return todosBydueAt(state).filter(todo => !todo.done)
}

export function completedTodos(state) {
  return todosByCompletedAt(state).filter(todo => todo.done)
}
export function fetchTodos() {
  return $.ajax({
    method: 'GET',
    url: '/api/todos'
  })
}
// ? why does the ajax request now return something other than the data?

export function fetchCompleteTodos() {
  return $.ajax({
    method: 'GET',
    url: '/api/todos/complete'
  })
}

export function fetchIncompleteTodos() {
  return $.ajax({
    method: 'GET',
    url: '/api/todos/incomplete'
  })
}

export function postTodo(todo) {
  return $.ajax({
    method: 'POST',
    url: '/api/todos',
    data: {
      todo: todo
    }
  })
}

export function putTodo(todo) {
  return $.ajax({
    method: 'PUT',
    url: `/api/todos/${todo.id}`,
    data: {
      todo: todo
    }
  })
}

export function deleteTodo(todo_id) {
  return $.ajax({
    method: 'DELETE',
    url: `/api/todos/${todo_id}`
  })
}
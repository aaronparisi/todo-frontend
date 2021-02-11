import * as apiUtil from '../util/todo_api_util'
import * as errorActions from './error_actions'

export const POPULATE_TODOS = "POPULATE_TODOS"
export const ADD_OR_UPDATE_TODO = "ADD_OR_UPDATE_TODO"
export const REMOVE_TODO = "REMOVE_TODO"

export const populateTodos = (todos) => ({
  type: POPULATE_TODOS,
  payload: {
    todos: todos
  }
})

export const addOrUpdateTodo = (todo) => ({
  type: ADD_OR_UPDATE_TODO,
  payload: {
    todo: todo
  }
})

export const removeTodo = (todo_id) => ({
  type: REMOVE_TODO,
  payload: {
    todo_id: todo_id
  }
})

export const fetchTodos = () => {
  return dispatch => {
    return apiUtil.fetchTodos()
    .then(data => {
      dispatch(populateTodos(data))
    })
  }
}

export const postTodo = todo => {
  return dispatch => {
    return apiUtil.postTodo(todo)
    .then(
      todo => {
        return dispatch(addOrUpdateTodo(todo))
      },
      err => {
        return dispatch(errorActions.receiveErrors(err.responseJSON))
      }
    )
  }
}

export const putTodo = todo => {
  return dispatch => {
    return apiUtil.putTodo(todo)
    .then(
      todo => {
        return dispatch(addOrUpdateTodo(todo))
      },
      err => {
        return dispatch(errorActions.receiveErrors(err.responseJSON))
      }
    )
  }
}

export const deleteTodo = todo_id => {
  return dispatch => {
    return apiUtil.deleteTodo(todo_id)
    .then(
      todo => {
        return dispatch(removeTodo(todo.id))
      },
      err => {
        return dispatch(errorActions.receiveErrors(err.responseJSON))
      }
    )
  }
}
import React from 'react'
import TodoDetailsContainer from '../steps/todo_details_container'

export function TodoListItem(
  { 
    todo, 
    removeTodo, 
    addOrUpdateTodo, 
    putTodo,
    removeTodoSteps, 
    deleteTodo,
    fetchStep,
    postStep,
    deleteStep
  }) {

  const statusString = () => {
    if (todo.done) {
      return `Completed ${formatDate(todo.completedAt)}`
    } else {
      return `Due ${formatDate(todo.dueAt)}`
    }
  }

  const statusButtonString = () => {
    if (todo.done) {
      return 'Mark Imcomplete...'
    } else {
      return 'Mark Complete!'
    }
  }

  const detailButtonString = () => {
    if (todo.detailsShowing) {
      return 'Hide Details'
    } else {
      return 'Show Details'
    }
  }

  const formatDate = dateString => {
    return new Date(dateString).toString().slice(0, -33)
  }

  const handleStatusUpdate = () => {
    let completedAt = null;
    if (!todo.done) {
      completedAt = new Date();
    }

    putTodo({
      ...todo,
      done: !todo.done,
      completedAt: completedAt
    })
  }

  const handleDetailToggle = () => {
    putTodo({
      ...todo,
      detailsShowing: !todo.detailsShowing
    })
  }

  const conditionalRenderDetails = () => {
    if (todo.detailsShowing) {
      return (
        <TodoDetailsContainer todo_id={todo.id} todoDone={todo.done} />
      )
    } 
  }

  const handleDelete = () => {
    deleteTodo(todo.id)
    // removeTodoSteps(todo.id)  // ! come back to this
  }

  return (
    <div className="todo-list-item">
      <li className="todo-title">
        <h2>{todo.title}</h2>
        -- {statusString()} --
        {conditionalRenderDetails()}
      </li>

      <div className="todo-buttons">
        <button
          className={'todo-button'}
          onClick={handleDetailToggle}
        >
          {detailButtonString()}
        </button>

        <button
          className={'todo-button'}
          onClick={handleDelete}
        >
          Delete
        </button>

        <button
          className={'todo-button'}
          onClick={handleStatusUpdate}
        >
          {statusButtonString()}
        </button>
      </div>
    </div>
  )
}

// ! issue with detail toggle when cupdate
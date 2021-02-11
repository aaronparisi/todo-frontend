import React, { useEffect, ustEffect } from 'react'
import { TodoListItem } from './todo_list_item'
import { TodoListForm } from './todo_form'

export default ({ 
  completedTodos, 
  incompleteTodos, 
  errors, 
  populateTodos, 
  addOrUpdateTodo,
  putTodo,
  removeTodo, 
  removeTodoSteps, 
  fetchTodos, 
  postTodo, 
  deleteTodo,
  fetchSteps,
  postStep,
  deleteStep
}) => {

  useEffect(() => {
    fetchTodos()
    fetchSteps()
  }, [])
  
  return (
    <div className="todo-lists">
      <div className="todo-list-wrapper">
        <h2 className="todo-header">Incomplete Todos</h2>
        <ul id="incomplete-todos" className="todo-list">
          {incompleteTodos.map((todo) => {
            return (
              <TodoListItem
                key={todo.id}
                todo={todo}
                removeTodo={removeTodo}
                addOrUpdateTodo={addOrUpdateTodo}
                putTodo={putTodo}
                removeTodoSteps={removeTodoSteps}
                deleteTodo={deleteTodo}
                postStep={postStep}
                deleteStep={deleteStep}
              />
            )
          })}
        </ul>

        <TodoListForm
          errors={errors}
          addOrUpdateTodo={addOrUpdateTodo}
          postTodo={postTodo}
        />
      </div>
      <div className="todo-list-wrapper">
        <h2 className="todo-header">Completed Todos</h2>
        <ul id="completed-todos" className="todo-list">
          {completedTodos.map((todo) => {
            return (
              <TodoListItem
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              addOrUpdateTodo={addOrUpdateTodo}
              putTodo={putTodo}
              removeTodoSteps={removeTodoSteps}
              deleteTodo={deleteTodo}
              postStep={postStep}
              deleteStep={deleteStep}
              />
            )
          })}
        </ul>
      </div>
    </div>
  )
}
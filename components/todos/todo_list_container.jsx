import { connect } from 'react-redux'

import * as todoActions from '../../actions/todo_actions'
import * as stepActions from '../../actions/step_actions'
import * as todoSelectors from '../../selectors/todo_selectors'
import * as errorSelectors from '../../selectors/error_selectors'
import TodoList from './todo_list'

const mapStateToProps = state => {
  return {
    completedTodos: todoSelectors.completedTodos(state),
    incompleteTodos: todoSelectors.incompleteTodos(state),
    errors: errorSelectors.errors(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    populateTodos: todos => dispatch(todoActions.populateTodos(todos)),
    addOrUpdateTodo: todo => dispatch(todoActions.addOrUpdateTodo(todo)),
    putTodo: todo => dispatch(todoActions.putTodo(todo)),
    removeTodo: todo_id => dispatch(todoActions.removeTodo(todo_id)),
    removeTodoSteps: todo_id => dispatch(stepActions.removeTodoSteps(todo_id)),
    fetchTodos: () => dispatch(todoActions.fetchTodos()),
    postTodo: todo => dispatch(todoActions.postTodo(todo)),
    deleteTodo: todo_id => dispatch(todoActions.deleteTodo(todo_id)),
    fetchSteps: () => dispatch(stepActions.fetchSteps())
  }
}

const todoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default todoContainer
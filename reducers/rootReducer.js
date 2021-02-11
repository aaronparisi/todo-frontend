import { combineReducers } from 'redux'

import todosReducer from './todosReducer'
import stepsReducer from './stepsReducer'
import usersReducer from './usersReducer'
import errorReducer from './errorReducer'

const rootReducer = combineReducers({
  todos: todosReducer,
  steps: stepsReducer,
  users: usersReducer,
  errors: errorReducer
})

export default rootReducer
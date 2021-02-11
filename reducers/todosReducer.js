import { POPULATE_TODOS, ADD_OR_UPDATE_TODO, REMOVE_TODO } from '../actions/todo_actions'
import { isoDate } from '../util/date_util'

const initialTodos = {}

const arrayToObj = arr => {
  let ret = {}
  arr.forEach(el => {
    ret[el.id] = el;
  });

  return ret;
}

const reducer = (state = initialTodos, action) => {
  switch (action.type) {
    case POPULATE_TODOS:
      return arrayToObj(action.payload.todos)
    case ADD_OR_UPDATE_TODO:
      const idx = action.payload.todo.id
      return {
        ...state,
        [idx]: action.payload.todo
      }
    case REMOVE_TODO:
      const key = action.payload.todo_id
      const {
        [key]: _,
        ...ret
      } = state;
      return ret;
    default:
      return state
  }
}

export default reducer
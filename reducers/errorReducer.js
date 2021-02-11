import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/error_actions'

const reducer = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_ERRORS:
      return action.payload.errors
    case CLEAR_ERRORS:
      return []
    default:
      return []
  }
}

export default reducer
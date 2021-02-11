import { POPULATE_USERS, ADD_OR_UPDATE_USER, REMOVE_USER } from '../actions/user_actions'

const initialUsers = {}

const removeUser = (state, userId) => {
  const key = userId
  const {
    [key]: toRemove,
    ...ret
  } = state;
  const removedOrder = toRemove.order

  return arrayToObj(objToArray(ret).map(step => {
    if (step.order > removedOrder) {
      return {
        ...step,
        order: step.order-1
      }
    } else {
      return step
    }
  }))
}

const reducer = (state = initialUsers, action) => {
  switch(action.type) {
    case POPULATE_USERS:
      return action.payload.users  // ? what question did I have?
    case ADD_OR_UPDATE_USER:
      const idx = action.payload.user.id
      return {
        ...state,
        [idx]: action.payload.user
      }
    case REMOVE_USER:
      const {
        [key]: toRemove,
        ...ret
      } = state
      return ret
    default:
      return state
  }
}

export default reducer
import { POPULATE_STEPS, ADD_OR_UPDATE_STEP, REMOVE_STEP, REMOVE_TODO_STEPS, SWAP_STEP_ORDER } from '../actions/step_actions'

const initialSteps = {}

const arrayToObj = arr => {
  let ret = {}
  arr.forEach(el => {
    ret[el.id] = el;
  });

  return ret;
}

const objToArray = obj => {
  return Object.entries(obj).map(pair => {
    return pair[1]
  })
}

const filterSteps = (state, todo_id) => {
  // given the steps slice of state and a todo_id,
  // returns a new object representing all steps not belonging to 
  // the associated todo
  let stateArr = objToArray(state).filter(step => {
    return step.todo_id !== todo_id
  })

  return arrayToObj(stateArr)
}

const removeStep = (state, stepId) => {
  const key = stepId
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
         // todo not necessary anymore
      }
    } else {
      return step
    }
  }))
}

const reducer = (state = initialSteps, action) => {
  switch (action.type) {
    case POPULATE_STEPS:
      return arrayToObj(action.payload.steps)
    case ADD_OR_UPDATE_STEP:
      const idx = action.payload.step.id
      return {
        ...state,
        [idx]: action.payload.step
      }
    case REMOVE_STEP:
      return removeStep(state, action.payload.stepId)
    case REMOVE_TODO_STEPS:
      return filterSteps(state, action.payload.todo_id)
    default:
      return state
  }
}

export default reducer
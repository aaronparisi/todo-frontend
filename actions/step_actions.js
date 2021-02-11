import * as apiUtil from '../util/step_api_util'
import * as errorActions from './error_actions'

export const POPULATE_STEPS = "POPULATE_STEPS"
export const ADD_OR_UPDATE_STEP = "ADD_OR_UPDATE_STEP"
export const REMOVE_STEP = "REMOVE_STEP"
export const REMOVE_TODO_STEPS = "REMOVE_TODO_STEPS"

export const populateSteps = (steps) => ({
  type: POPULATE_STEPS,
  payload: {
    steps: steps
  }
})

export const addOrUpdateStep = (step) => ({
  type: ADD_OR_UPDATE_STEP,
  payload: {
    step: step
  }
})

export const removeStep = (stepId) => ({
  type: REMOVE_STEP,
  payload: {
    stepId: stepId
  }
})

export const removeTodoSteps = (todo_id) => ({
  type: REMOVE_TODO_STEPS,
  payload: {
    todo_id: todo_id
  }
})

export const fetchSteps = () => {
  return dispatch => {
    return apiUtil.fetchSteps()
    .then(data => {
      return dispatch(populateSteps(data))
    })
  }
}

export const postStep = step => {
  return dispatch => {
    return apiUtil.postStep(step)
    .then(
      step => {
        return dispatch(addOrUpdateStep(step))
      },
      err => {
        return dispatch(errorActions.receiveErrors(err.responseJSON))
      }
    )
  }
}

export const putStep = (stepId, step) => {
  return dispatch => {
    return apiUtil.putStep(stepId, step)
    .then(
      step => {
        return dispatch(addOrUpdateStep(step))
      },
      err => {
        return dispatch(errorActions.receiveErrors(err.responseJSON))
      }
    )
  }
}

export const moveStepUp = stepId => {
  return dispatch => {
    return apiUtil.moveStepUp(stepId)
    .then(
      step => {
        return dispatch(addOrUpdateStep(step))
      },
      err => {
        return dispatch(errorActions.receiveErrors(err.responseJSON))
      }
    )
  }
}

export const moveStepDown = stepId => {
  return dispatch => {
    return apiUtil.moveStepDown(stepId)
    .then(
      step => {
        return dispatch(addOrUpdateStep(step))
      },
      err => {
        debugger
        return dispatch(errorActions.receiveErrors(err.responseJSON))
      }
    )
  }
}

export const deleteStep = stepId => {
  return dispatch => {
    return apiUtil.deleteStep(stepId)
    .then(
      step => {
        return dispatch(removeStep(step.id))
      },
      err => {
        return dispatch(errorActions.receiveErrors(err.responseJSON))
      }
    )
  }
}
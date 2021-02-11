import { connect } from 'react-redux'

import TodoDetails from './todo_details'
import { todoSteps } from '../../selectors/step_selectors'

import * as stepActions from '../../actions/step_actions'

const mapDispatchToProps = dispatch => {
  return {
    populateSteps: steps => dispatch(stepActions.populateSteps(steps)),
    addOrUpdateStep: step => dispatch(stepActions.addOrUpdateStep(step)),
    removeStep: stepId => dispatch(stepActions.removeStep(stepId)),
    fetchSteps: () => dispatch(stepActions.fetchSteps()),
    postStep: step => dispatch(stepActions.postStep(step)),
    putStep: (stepId, step) => dispatch(stepActions.putStep(stepId, step)),
    moveStepUp: stepId => dispatch(stepActions.moveStepUp(stepId)),
    moveStepDown: stepId => dispatch(stepActions.moveStepDown(stepId)),
    deleteStep: stepId => dispatch(stepActions.deleteStep(stepId))
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    steps: todoSteps(state, ownProps.todo_id),
    todo_id: ownProps.todo_id,
    todoDone: ownProps.todoDone
  }
}

const todoDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoDetails)

export default todoDetailsContainer
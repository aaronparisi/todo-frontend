import React, { useState } from 'react'

import trashCan from '../../images/delete.png'
import checkMark from '../../images/tick.png'
import incomplete from '../../images/incomplete.png'
import upArrow from '../../images/up-arrow.png'
import downArrow from '../../images/down-arrow.png'

const TodoStepListItem = ({ 
  step, 
  numSteps, 
  addOrUpdateStep, 
  removeStep,
  todoDone,
  fetchSteps,
  postStep,
  putStep,
  moveStepUp,
  moveStepDown,
  deleteStep
}) => {

  const incompleteStepImgTag = <img className="step-button-icon" src={incomplete} alt="mark step incomplete icon"/>
  const completeStepImgTag = <img className="step-button-icon" src={checkMark} alt="mark step complete icon"/>

  const buttonDisabled = todoDone;

  const [statusString, setStatusString] = useState(initialStatus())
  const [statusButtonImgTag, setStatusButtonImgTag] = useState(initialStatusButtonImgTag())
  const [itemClassName, setItemClassName] = useState(initialItemClassName())

  function initialStatus() {
    if (step.done) {
      return 'Done!'
    } else {
      return '...incomplete'
    }
  }

  function initialStatusButtonImgTag() {
    if (step.done) {
      return incompleteStepImgTag
    } else {
      return completeStepImgTag
    }
  }

  function initialItemClassName() {
    if (step.done) {
      return 'complete-step'
    } else {
      return 'incomplete-step'
    }
  }

  const handleStatusUpdate = () => {
    putStep(
      step.id,
      {
        ...step,
        done: !step.done
      }
    )

    toggleStatusState()
  }

  const toggleStatusState = () => {
    if (statusString === 'Done!') {
      setStatusString('...incomplete')
      setStatusButtonImgTag(completeStepImgTag)
      setItemClassName('incomplete-step')
    } else {
      setStatusString('Done!')
      setStatusButtonImgTag(incompleteStepImgTag)
      setItemClassName('complete-step')
    }
  }

  return (
    <li className={itemClassName} key={step.id}>
      <div className="step-info">
        <h3>{step.title}</h3>
        <h5>({statusString})</h5>
      </div>

      <div className="step-buttons">
        <button
          disabled={buttonDisabled}
          className="step-button"
          onClick={handleStatusUpdate}
        >
          {statusButtonImgTag}
        </button>

        <button
          disabled={buttonDisabled}
          className="step-button"
          onClick={() => moveStepUp(step.id)}
        >
          <img className="step-button-icon" src={upArrow} alt="up arrow icon"/>
        </button>

        <button
          disabled={buttonDisabled}
          className="step-button"
          onClick={() => deleteStep(step.id)}
        >
          <img className="step-button-icon" src={trashCan} alt="trash can icon"/>
        </button>

        <button
          disabled={buttonDisabled}
          className="step-button"
          onClick={() => moveStepDown(step.id)}
        >
          <img className="step-button-icon" src={downArrow} alt="down arrow icon"/>
        </button>
      </div>
    </li>
  )
}

export default TodoStepListItem
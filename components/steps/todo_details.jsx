import React, { useEffect } from 'react'

import TodoStepListItem from './todo_step_list_item'
import TodoStepForm from './todo_step_form'

const TodoDetails = ({ 
    steps, 
    todo_id, 
    todoDone, 
    populateSteps, 
    addOrUpdateStep, 
    removeStep, 
    fetchSteps,
    postStep,
    putStep,
    moveStepUp,
    moveStepDown,
    deleteStep
}) => {

  // useEffect(() => {
  //   console.log('about to fetch steps')
  //   fetchSteps()
  // }, [])

  const conditionalRenderForm = () => {
    if (!todoDone) {
      return (
        <TodoStepForm
          todo_id={todo_id}
          curNumSteps={steps.length}
          addOrUpdateStep={addOrUpdateStep}
          postStep={postStep}
        />
      )
    }
  }

  return (
    <div>
      <ol className="steps-list">
        {steps.map(step => {
          return (
            <TodoStepListItem
              key={step.id}
              step={step}
              numSteps={steps.length}
              addOrUpdateStep={addOrUpdateStep}
              removeStep={removeStep}
              moveStepUp={moveStepUp}
              moveStepDown={moveStepDown}
              todoDone={todoDone}
              postStep={postStep}
              putStep={putStep}
              deleteStep={deleteStep}
            />
          )
        })}
      </ol>
      
      {conditionalRenderForm()}
    </div>
  )
}

export default TodoDetails
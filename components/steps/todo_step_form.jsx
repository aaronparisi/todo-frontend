import React, { useState } from 'react'
import { uniqueId } from '../../util/unique_id'

const TodoStepForm = ({ 
  todo_id, 
  curNumSteps, 
  addOrUpdateStep,
  postStep
 }) => {
  const [curTitle, setCurTitle] = useState('')
  // const [curBody, setCurBody] = useState('')
  const id = uniqueId()

  const handleSubmit = e => {
    e.preventDefault();

    const step = {
      id: id,
      todo_id: todo_id,
      title: curTitle,
      order: curNumSteps + 1,
      done: false
    }

    postStep(step)
    .then(() => {
      setCurTitle('')
      // setCurBody('')
      document.getElementById(`title${todo_id}`).focus()
    })
  }

  return (
    <form className="steps-form"
      onSubmit={handleSubmit}
    >
      {/* <label htmlFor={`title${todo_id}`}>Title</label> */}
      <input
        type="text"
        name="title"
        id={`title${todo_id}`}
        value={curTitle}
        placeholder="e.g. Clean up afterward!"
        required={true}
        onChange={e => setCurTitle(e.currentTarget.value)}
      />

      {/* <input type="hidden" name="id" defaultValue={uniqueId()}/> */}

      <input type="submit" value="Add Step!"/>
    </form>
  )
}

export default TodoStepForm
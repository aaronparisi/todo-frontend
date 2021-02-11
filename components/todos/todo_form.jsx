import React, { useState } from 'react'
import { uniqueId } from '../../util/unique_id'
import { isoDate } from '../../util/date_util'

export function TodoListForm({ errors, addOrUpdateTodo, postTodo }) {
  const [curTitle, setCurTitle] = useState('')
  // const [curBody, setCurBody] = useState('')
  const [curdueAt, setCurdueAt] = useState(new Date().toISOString().slice(0, -1))
  const id = uniqueId()

  const handleSubmit = e => {
    e.preventDefault();
    
    const todo = {
      id: id,
      title: curTitle,
      body: 'body should not be required',
      dueAt: curdueAt,
      done: false
    }

    postTodo(todo)
    .then(() => {
      setCurTitle('')
      // setCurBody('')
      setCurdueAt(new Date().toISOString().slice(0, -1))
      document.getElementById('title').focus()
    })
  }

  return (
    <form
      id="todo-form"
      onSubmit={handleSubmit}
    >
      <ul>
        {errors.map(error => <li key={error}>{error}</li>)}
      </ul>
      {/* <label htmlFor="title">Title</label> */}
      <input
        type="text"
        name="title"
        id="title"
        value={curTitle}
        placeholder="e.g. Take out the trash"
        required={true}
        onChange={e => setCurTitle(e.currentTarget.value)}
      />

      {/* <label htmlFor="body">Body</label>
      <input
        type="text"
        name="body"
        id="body"
        value={curBody}
        required={true}
        onChange={e => setCurBody(e.currentTarget.value)}
      /> */}

      {/* <label htmlFor="dueAt">Due</label> */}
      <input
        type="datetime-local" 
        name="dueAt"
        id="dueAt"
        value={curdueAt}
        required={true}
        onChange={e => setCurdueAt(e.currentTarget.value)}
      />

      {/* <input type="hidden" name="id" defaultValue={uniqueId()}/> */}

      <input type="submit" value="Add Todo!"/>
    </form>
  )
}
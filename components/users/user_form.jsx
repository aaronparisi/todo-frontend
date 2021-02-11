import React, { useState } from 'react'
import { uniqueId } from '../../util/unique_id'

export function UserForm({
  errors,
  addOrUpdateUser,
  postUser
}) {

  const [curUsername, setCurUsername] = useState('')
  const [curPassword, setCurPassword] = useState('')
  const [curPasswordConfirmation, setCurPasswordConfirmation] = useState('')

  const id = uniqueId()

  const handleSubmit = e => {
    e.preventDefault()

    const user = {
      id: id,
      username: curUsername,
      password: curPassword,
      password_confirmation: curPasswordConfirmation
    }

    postUser(user)
    .then(
      data => {
        console.log('once the form is submitted, the user form should no longer render?')
      },
      err => {
        console.log('user form submission errors, user form should re render?')
      }
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="usesrname"
        id="username"
        onChange={e => setCurUsername(e.currentTarget.value)}
        value={curUsername}
        placeholder="e.g. john_doe_6969"
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={e => setCurPassword(e.currentTarget.value)}
        value={curPassword}
      />

      <label htmlFor="password-confirmation">Confirm Password</label>
      <input
        type="password"
        name="password-confirmation"
        id="password-confirmation"
        onChange={e => setCurPasswordConfirmation(e.currentTarget.value)}
        value={curPasswordConfirmation}
      />

      <input type="submit" value="Sign up!"/>
    </form>
  )
}
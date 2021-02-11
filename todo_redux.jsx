import React from 'react'
import ReactDOM from 'react-dom'

import configureStore from './store/store'
import Root from './components/root.jsx'
import * as todoUtils from './util/todo_api_util'

import { fetchTodos } from './actions/todo_actions'

let store = configureStore()

document.addEventListener('DOMContentLoaded', () => {
  let curUserId = window.sessionStorage.getItem("user_id")
  // todo conditionally call render if #root el actually exists
  ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
  )
})

// window.fetchTodos = todoUtils.fetchTodos
// window.fetchCompleteTodos = todoUtils.fetchCompleteTodos
// window.fetchIncompleteTodos = todoUtils.fetchIncompleteTodos

window.store = store

window.fetchTodos = fetchTodos
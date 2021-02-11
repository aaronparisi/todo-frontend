const addLoggingToDispatch = store => next => action => {
  console.log(store.getState())

  console.log(action)

  console.log(store.getState())
}

export default addLoggingToDispatch
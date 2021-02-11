import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/rootReducer'

import thunkMiddleware from '../middleware/thunk'
import addLoggingToDispatch from '../middleware/logging'

const waresToAdd = [
  // addLoggingToDispatch,
  thunkMiddleware
]

const configureStore = () => {
  let store;
  let curStore = localStorage.getItem('curState')

  if (curStore) {
    store = createStore(
      rootReducer,
      JSON.parse(curStore),
      applyMiddleware(...waresToAdd)
    )
  } else {
    store = createStore(
      rootReducer,
      applyMiddleware(...waresToAdd)
    )
  }
  
  store.subscribe(() => {
    localStorage.setItem('curState', JSON.stringify(store.getState()))
    // localStorage.setItem('curState', store.getState())
  })

  return store;
}

export default configureStore
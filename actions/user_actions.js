import * as apiUtil from '../util/user_api_util'
import * as errorActions from './error_actions'

export const POPULATE_USERS = "POPULATE_USERS"
export const ADD_OR_UPDATE_USER = "ADD_OR_UPDATE_USER"
export const REMOVE_USER = "REMOVE_USER"

export const populateUsers = users => {
  return {
    type: POPULATE_USERS,
    payload: {
      users: users
    }
  }
}

export const addOrUpdateUser = user => {
  return {
    type: ADD_OR_UPDATE_USER,
    payload: {
      user: user
    }
  }
}

export const removeUser = userId => {
  return {
    type: REMOVE_USER,
    payload: {
      userId: userId
    }
  }
}

export const fetchUsers = () => {
  return dispatch => {
    return apiUtil.fetchUsers()
    .then(
      data => {
        return dispatch(populateUsers(data))
      },
      err => {
        return dispatch(errorActions.receiveErrors(err.responseJSON))
      }
    )
  }
}

export const postUser = user => {
  return dispatch => {
    return apiUtil.postUser(user)
    .then(
      data => {
        debugger
        return dispatch(addOrUpdateUser(data))
      },
      err => {
        debugger
        return dispatch(errorActions.receiveErrors(err.responseJSON))
      }
    )
  }
}

export const putUser = user => {
  return dispatch => {
    return apiUtil.putUser(user.id, user)
    .then(
      data => {
        return dispatch(addOrUpdateUser(data))
      },
      err => {
        return dispatch(errorActions.receiveErrors(err.responseJSON))
      }
    )
  }
}

export const deleteUser = userId => {
  return dispatch => {
    return apiUtil.deleteUser(userId)
    .then(
      data => {
        return dispatch(removeUser(data.user_id))  // ! naming issue?
      },
      err => {
        return dispatch(errorActions.receiveErrors(err.responseJSON))
      }
    )
  }
}
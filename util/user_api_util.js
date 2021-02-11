export const fetchUsers = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/users'
  })
}

export const postUser = user => {
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: {
      user: user
    }
  })
}

export const putUser = (userId, userData) => {
  return $.ajax({
    method: 'PUT',
    url: `api/users/${userId}`,
    data: {
      user: userData
    }
  })
}

export const deleteUser = userId => {
  return $.ajax({
    method: 'DELETE',
    url: `api/users/${userId}`
  })
}
export const fetchSteps = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/steps'
  })
}

export const postStep = step => {
  return $.ajax({
    method: 'POST',
    url: '/api/steps',
    data: {
      step: step
    }
  })
}

export const putStep = (stepId, stepData) => {
  return $.ajax({
    method: 'PUT',
    url: `api/steps/${stepId}`,
    data: {
      step: stepData
    }
  })
}

export const moveStepUp = stepId => {
  let data = {
    row_order_position: "up"
  }

  return putStep(stepId, data)
}

export const moveStepDown = stepId => {
  let data = {
    row_order_position: "down"
  }

  return putStep(stepId, data)
}

export const deleteStep = stepId => {
  return $.ajax({
    method: 'DELETE',
    url: `api/steps/${stepId}`
  })
}
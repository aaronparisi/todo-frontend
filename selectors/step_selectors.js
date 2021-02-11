export function todoSteps(state, todo_id) {
  // returns an array of steps owned by the corresponding todo
  // sorted by order
  return Object.values(state.steps)
  .filter(step => {
    return step.todo_id === todo_id
  }).sort((s1, s2) => {
    if (s1.row_order === null || s1.row_order < s2.row_order) {
      return -1
    } else if (s2.row_order === null || s2.row_order < s1.row_order) {
      return 1
    } else {
      return 0
    }
  })
}
export function isoDate(str) {
  if (str) {
    return new Date(str).toISOString().substring(0, 10)
  } else {
    return new Date().toISOString().substring(0, 10)
  }
}
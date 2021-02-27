export const contains = ({ name, phone }, query) => {
  if (name.toLowerCase().includes(query) || phone.includes(query)) {
    return true
  }
  return false
}

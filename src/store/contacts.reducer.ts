export default function(state = {}, action: any) {
  switch (action.type) {
    case 'FETCH_CONTACTS':
      return action.payload
    default:
      return state
  }
}

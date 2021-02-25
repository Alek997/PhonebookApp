import { GET_CONTACTS } from './actions'

const initialState = {
  contacts: []
}
function contactsReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_CONTACTS:
      return action.payload
    default:
      return state
  }
}

export default contactsReducer

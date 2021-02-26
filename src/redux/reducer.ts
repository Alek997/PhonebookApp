import { ContactDto } from '../types/domain'
import { Action, ADD_CONTACT, REMOVE_CONTACT } from './actions'

const initialState: { contacts: ContactDto[] } = {
  contacts: []
}
function contactsReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ADD_CONTACT:
      return { contacts: [...state.contacts, action.payload] as ContactDto[] }
    case REMOVE_CONTACT:
      return {
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload.id
        )
      }
    default:
      return state
  }
}

export default contactsReducer

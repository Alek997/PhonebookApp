import { ContactDto } from '../types/domain'
import { ADD_CONTACT, GET_CONTACTS, REMOVE_CONTACT } from './actions'

const initialState: { contacts: ContactDto[] } = {
  contacts: []
}
function contactsReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_CONTACTS:
      return { contacts: action.payload }
    case ADD_CONTACT:
      return { contacts: [...state.contacts, action.payload] }
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

import { ContactDto, CountryDto } from '../types/domain'
import {
  Action,
  ADD_CONTACT,
  EDIT_CONTACT,
  GET_COUNTRIES,
  REMOVE_CONTACT
} from './actions'

const contactsInitState: { contacts: ContactDto[] } = {
  contacts: []
}
export function contactsReducer(state = contactsInitState, action: Action) {
  switch (action.type) {
    case ADD_CONTACT:
      return { contacts: [...state.contacts, action.payload] as ContactDto[] }
    case EDIT_CONTACT:
      return {
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id ? action.payload : contact
        )
      }
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

const countriesInitState: { countries: CountryDto[] } = {
  countries: []
}
export function countriesReducer(state = countriesInitState, action: Action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return { countries: action.payload }
    default:
      return state
  }
}

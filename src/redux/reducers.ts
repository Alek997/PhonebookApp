import { ContactDto, CountryDto } from '../types/domain'
import {
  Action,
  ADD_CONTACT,
  EDIT_CONTACT,
  GENERATE_CONTACTS,
  GET_COUNTRIES,
  REMOVE_CONTACT
} from './actions'

function compare(a, b) {
  if (a.name < b.name) {
    return -1
  }
  if (a.name > b.name) {
    return 1
  }
  return 0
}

const contactsInitState: { contacts: ContactDto[] } = {
  contacts: []
}
export function contactsReducer(state = contactsInitState, action: Action) {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        contacts: [...state.contacts, action.payload].sort(
          compare
        ) as ContactDto[]
      }
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
    case GENERATE_CONTACTS:
      return {
        contacts: action.payload.sort(compare) as ContactDto[]
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

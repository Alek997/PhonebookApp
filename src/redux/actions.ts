import { Dispatch } from 'react'
import { ContactDto } from '../types/domain'

export const ADD_CONTACT = 'ADD_CONTACT'
export const REMOVE_CONTACT = 'REMOVE_CONTACT'

interface AddContact {
  type: typeof ADD_CONTACT
  payload?: ContactDto
}
interface RemoveContact {
  type: typeof REMOVE_CONTACT
  payload?: ContactDto
}

export const addContact = (contact: ContactDto) => (
  dispatch: Dispatch<AddContact>
) => {
  dispatch({
    type: ADD_CONTACT,
    payload: contact
  })
}

export const removeContact = (contact: ContactDto) => (
  dispatch: Dispatch<RemoveContact>
) => {
  dispatch({
    type: REMOVE_CONTACT,
    payload: contact
  })
}

export type Action = AddContact | RemoveContact

import { ContactDto } from '../types/domain'

export const ADD_CONTACT = 'ADD_CONTACT'
export const REMOVE_CONTACT = 'REMOVE_CONTACT'

export const addContact = (contact: Omit<ContactDto, 'id'>) => (
  dispatch: any
) => {
  dispatch({
    type: ADD_CONTACT,
    payload: contact
  })
}

export const removeContact = (contact: ContactDto) => (dispatch: any) => {
  dispatch({
    type: REMOVE_CONTACT,
    payload: contact
  })
}

import { Contact } from '../types/domain'

const mockContacts: Contact[] = [
  {
    id: '1',
    name: 'Alek',
    phone: '0644750787',
    sex: 'male',
    code: '11000',
    country: 'Serbia'
  }
]

export function actions$fetchPost() {
  return {
    type: 'FETCH_CONTACTS',
    payload: mockContacts
  }
}

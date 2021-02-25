// import AsyncStorage from '@react-native-async-storage/async-storage'
import { ContactDto } from '../types/domain'

export const GET_CONTACTS = 'FETCH_CONTACTS'
export const ADD_CONTACT = 'ADD_CONTACT'
export const REMOVE_CONTACT = 'REMOVE_CONTACT'

const mockContacts: ContactDto[] = [
  {
    id: '1',
    name: 'Alek',
    phone: '0644750787',
    sex: 'male',
    code: '11000',
    country: 'Serbia'
  }
]

export const getContacts = () => {
  return async (dispatch: any) => {
    // const response = await axios.get(`${BASE_URL}`)

    if (mockContacts) {
      dispatch({
        type: GET_CONTACTS,
        payload: mockContacts
      })
    } else {
      console.log('Unable to fetch data from the API BASE URL!')
    }
  }
}

export const addContact = (contact: ContactDto) => (dispatch: any) => {
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

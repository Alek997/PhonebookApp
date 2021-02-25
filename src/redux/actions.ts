import { Contact } from '../types/domain'

export const GET_CONTACTS = 'FETCH_CONTACTS'

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

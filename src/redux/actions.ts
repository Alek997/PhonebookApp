import 'react-native-get-random-values'
import { v4 as uuid } from 'uuid'
import { fetchCountries } from '../services/countryService'
import { ContactDto, Country } from '../types/domain'
import { getRandomColor } from '../utils/colorUtils'
import { generateString } from '../utils/generateString'

export const ADD_CONTACT = 'ADD_CONTACT'
export const EDIT_CONTACT = 'EDIT_CONTACT'
export const REMOVE_CONTACT = 'REMOVE_CONTACT'
export const GET_COUNTRIES = 'GET_COUNTRIES'
export const GENERATE_CONTACTS = 'GENERATE_CONTACTS'

interface AddContact {
  type: typeof ADD_CONTACT
  payload?: ContactDto
}
interface EditContact {
  type: typeof EDIT_CONTACT
  payload?: ContactDto
}
interface RemoveContact {
  type: typeof REMOVE_CONTACT
  payload?: ContactDto
}
interface GetCountries {
  type: typeof GET_COUNTRIES
  payload?: Country[]
}
interface GenerateContacts {
  type: typeof GENERATE_CONTACTS
  payload: ContactDto[]
}

export const addContact = (contact: ContactDto) => ({
  type: ADD_CONTACT,
  payload: contact
})

export const editContact = (contact: ContactDto) => ({
  type: EDIT_CONTACT,
  payload: contact
})

export const removeContact = (contact: ContactDto) => ({
  type: REMOVE_CONTACT,
  payload: contact
})

export const generateContacts = () => {
  return async (dispatch, getState) => {
    const state = getState()
    if (state.countriesReducer.countries.length === 0) {
      try {
        const countries = await fetchCountries()
        const genders = ['male', 'female', 'other']

        const randomContacts = Array.from({ length: 50 }, () => {
          const randomCountry =
            countries[Math.floor(Math.random() * countries.length)]
          return {
            id: uuid(),
            name: generateString(),
            phone: generateString(8),
            sex: genders[Math.floor(Math.random() * genders.length)],
            country: randomCountry.name,
            code: randomCountry.callingCodes[0] || '',
            color: getRandomColor()
          } as ContactDto
        })
        if (countries && randomContacts) {
          dispatch({
            type: GENERATE_CONTACTS,
            payload: randomContacts as ContactDto[]
          })
        }
      } catch (error) {
        //dipatch error
        console.log('error', error)
      }
    }
  }
}

export const getCountries = () => {
  return async (dispatch, getState) => {
    const state = getState()
    if (state.countriesReducer.countries.length === 0) {
      try {
        const countries = await fetchCountries()
        if (countries) {
          dispatch({
            type: GET_COUNTRIES,
            payload: countries.map(country => ({
              label: country.name,
              value: country.name,
              callingCodes: country.callingCodes
            }))
          })
        }
      } catch (error) {
        //dipatch error
        console.log('error', error)
      }
    }
  }
}

export type Action =
  | AddContact
  | EditContact
  | RemoveContact
  | GetCountries
  | GenerateContacts

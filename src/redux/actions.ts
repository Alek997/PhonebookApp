import { Dispatch } from 'react'
import { fetchCountries } from '../services/countryService'
import { ContactDto, Country } from '../types/domain'

export const ADD_CONTACT = 'ADD_CONTACT'
export const REMOVE_CONTACT = 'REMOVE_CONTACT'
export const GET_COUNTRIES = 'GET_COUNTRIES'

interface AddContact {
  type: typeof ADD_CONTACT
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
        console.log('error', error)
      }
    }
  }
}

export type Action = AddContact | RemoveContact | GetCountries

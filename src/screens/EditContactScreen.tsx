import React, { useEffect } from 'react'
import 'react-native-get-random-values'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { editContact, getCountries } from '../redux/actions'
import { ContactDto, Country } from '../types/domain'
import { Navigation } from 'react-native-navigation'
import { screens } from '../config/naivgation'
import { NavigationScreenComponent } from '../utils/navigationUtils'
import ContactForm from '../components/ContactForm'

const EditContactScreen: NavigationScreenComponent<{
  contact: ContactDto
}> = ({ contact }) => {
  const { countries }: { countries: Country[] } = useSelector(
    (state: RootStateOrAny) => state.countriesReducer
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])

  return (
    <ContactForm
      initialValue={contact}
      onSubmit={data => {
        dispatch(editContact({ ...contact, ...data }))
        Navigation.popTo(screens.ContactsScreen)
      }}
      countries={countries}
    />
  )
}

export default EditContactScreen

import React, { useEffect } from 'react'
import 'react-native-get-random-values'
import { v4 as uuid } from 'uuid'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { addContact, getCountries } from '../redux/actions'
import { Country } from '../types/domain'
import { Navigation } from 'react-native-navigation'
import { screens } from '../config/naivgation'
import { getRandomColor } from '../utils/colorUtils'
import { NavigationScreenComponent } from '../utils/navigationUtils'
import ContactForm from '../components/ContactForm'

const AddNewContactScreen: NavigationScreenComponent = () => {
  const { countries }: { countries: Country[] } = useSelector(
    (state: RootStateOrAny) => state.countriesReducer
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])

  return (
    <ContactForm
      onSubmit={data => {
        dispatch(addContact({ ...data, id: uuid(), color: getRandomColor() }))
        Navigation.popTo(screens.ContactsScreen)
      }}
      countries={countries}
    />
  )
}

export default AddNewContactScreen

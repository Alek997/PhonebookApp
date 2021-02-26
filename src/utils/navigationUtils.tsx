import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import React from 'react'
import { Navigation, LayoutComponent } from 'react-native-navigation'
import { Provider } from 'react-redux'
import { Screen, screens } from '../config/naivgation'
import { store } from '../redux/store'
import AddNewContactScreen from '../screens/AddNewContactScreen'
import ContactScreen from '../screens/ContactScreen'
import ContactsScreen from '../screens/ContactsScreen'

export interface NavigationScreenComponent<T = {}>
  extends React.FC<
    T & {
      componentId: string
    }
  > {
  options?: LayoutComponent['options']
}

const registerComponent = (screen: Screen, Component: any) => {
  Navigation.registerComponent(
    screen.name,
    () => props => (
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    ),
    () => Component
  )
}

const storeCountriesData = async () => {
  try {
    const countries = await axios.get(
      'https://restcountries.eu/rest/v2/all?fields=name'
    )

    await AsyncStorage.setItem('countries', JSON.stringify(countries.data))
  } catch (error) {
    // Error saving data
  }
}

export const init = () => {
  storeCountriesData()
  registerComponent(screens.ContactsScreen, ContactsScreen)
  registerComponent(screens.ContactScreen, ContactScreen)
  registerComponent(screens.AddNewContactScreen, AddNewContactScreen)
}

export const startApp = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              id: screens.ContactsScreen.name,
              name: screens.ContactsScreen.name
            }
          }
        ]
      }
    }
  })
}

export const showModal = (
  screen: Screen,
  passProps = {},
  options: LayoutComponent['options'] = {}
) => {
  Navigation.showModal({
    stack: {
      children: [
        {
          component: {
            id: screen.name,
            name: screen.name,
            passProps,
            options
          }
        }
      ]
    }
  })
}

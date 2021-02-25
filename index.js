/**
 * @format
 */
import { Navigation } from 'react-native-navigation'
import { createStore } from 'redux'
import ContactScreen from './src/screens/ContactScreen'
import ContactsScreen from './src/screens/ContactsScreen'
import contactsReducer from './src/store/contacts.reducer'

const store = createStore(contactsReducer)

export const screens = {
  Contacts: {
    name: 'phonebookApp.Contacts',
    component: ContactsScreen
  },
  Contact: {
    name: 'phonebookApp.Contact',
    component: ContactScreen
  }
}

export function registerScreens() {
  Navigation.registerComponent(
    screens.Contacts.name,
    () => screens.Contacts.component
  )
  Navigation.registerComponent(
    screens.Contact.name,
    () => screens.Contact.component
  )
}

registerScreens()

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              id: screens.Contacts.name,
              name: screens.Contacts.name
            }
          }
        ]
      }
    }
  })
})

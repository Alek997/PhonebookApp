/**
 * @format
 */
import { Navigation } from 'react-native-navigation'
import ContactsScreen from './src/screens/ContactScreen'

const screens = {
  Contacts: {
    name: 'phonebookApp.Contacts',
    component: ContactsScreen,
  },
}

//TODO napisi funkciju koja odjednom ovo radi
Navigation.registerComponent(
  screens.Contacts.name,
  () => screens.Contacts.component
)

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              id: screens.Contacts.name,
              name: screens.Contacts.name,
            },
          },
        ],
      },
    },
  })
})

import { Navigation } from 'react-native-navigation'
import { screens } from './src/config/naivgation'
import AddContactScreen from './src/screens/AddContactScreen'
import ContactScreen from './src/screens/ContactScreen'
import ContactsScreen from './src/screens/ContactsScreen'
import EditContactScreen from './src/screens/EditContactScreen'
import { startApp, registerComponent } from './src/utils/navigationUtils'

registerComponent(screens.ContactsScreen, ContactsScreen)
registerComponent(screens.ContactScreen, ContactScreen)
registerComponent(screens.AddContactScreen, AddContactScreen)
registerComponent(screens.EditContactScreen, EditContactScreen)

Navigation.events().registerAppLaunchedListener(startApp)

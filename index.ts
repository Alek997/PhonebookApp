import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { Navigation } from 'react-native-navigation'
import { screens } from './src/config/naivgation'
import AddNewContactScreen from './src/screens/AddNewContactScreen'
import ContactScreen from './src/screens/ContactScreen'
import ContactsScreen from './src/screens/ContactsScreen'
import { startApp, registerComponent } from './src/utils/navigationUtils'

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

storeCountriesData()
registerComponent(screens.ContactsScreen, ContactsScreen)
registerComponent(screens.ContactScreen, ContactScreen)
registerComponent(screens.AddNewContactScreen, AddNewContactScreen)

Navigation.events().registerAppLaunchedListener(startApp)

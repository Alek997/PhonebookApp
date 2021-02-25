import { Navigation } from 'react-native-navigation'
import { init, startApp } from './src/utils/navigationUtils'

init()
Navigation.events().registerAppLaunchedListener(startApp)

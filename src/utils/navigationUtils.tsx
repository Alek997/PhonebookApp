import React from 'react'
import { Navigation, LayoutComponent } from 'react-native-navigation'
import { Provider } from 'react-redux'
import { Screen, screens } from '../config/naivgation'
import { store } from '../redux/store'
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

export const init = () => {
  registerComponent(screens.ContactsScreen, ContactsScreen)
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
    component: {
      id: screen.name,
      name: screen.name,
      passProps,
      options
    }
  })
}

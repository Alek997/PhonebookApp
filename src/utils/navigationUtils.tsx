import React from 'react'
import { Navigation, LayoutComponent } from 'react-native-navigation'
import { Provider } from 'react-redux'
import { Screen, screens } from '../config/naivgation'
import { store } from '../redux/store'

export interface NavigationScreenComponent<T = {}>
  extends React.FC<
    T & {
      componentId: string
    }
  > {
  options?: LayoutComponent['options']
}

export const registerComponent = (
  screen: Screen,
  Component: NavigationScreenComponent
) => {
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

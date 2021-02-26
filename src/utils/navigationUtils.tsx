import React from 'react'
import { Navigation, LayoutComponent } from 'react-native-navigation'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Screen, screens } from '../config/naivgation'
import { persistor, store } from '../redux/store'

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
        <PersistGate loading={null} persistor={persistor}>
          <Component {...props} />
        </PersistGate>
      </Provider>
    ),
    () => Component
  )
}

export const startApp = () => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'root',
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

export const pushScreen = ({
  componentId,
  screen,
  passProps = {},
  options = {}
}: {
  componentId: string
  screen: Screen
  passProps?: LayoutComponent['passProps']
  options?: LayoutComponent['options']
}) => {
  Navigation.push(componentId, {
    component: {
      name: screen.name,
      passProps,
      options
    }
  })
}

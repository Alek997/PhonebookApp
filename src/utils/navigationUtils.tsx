import React from 'react'
import { Navigation, LayoutComponent } from 'react-native-navigation'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { colors } from '../config/colors'
import { screens } from '../config/naivgation'
import { persistor, store } from '../redux/store'
import { ContactDto } from '../types/domain'

export interface NavigationScreenComponent<T = {}>
  extends React.FC<
    T & {
      componentId: string
    }
  > {
  options?: LayoutComponent['options']
}

export const registerComponent = (
  screen,
  Component: NavigationScreenComponent
) => {
  Navigation.registerComponent(
    screen,
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

Navigation.setDefaultOptions({
  layout: {
    componentBackgroundColor: colors.primary
  }
})

export const startApp = () => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'root',
        children: [
          {
            component: {
              id: screens.ContactsScreen,
              name: screens.ContactsScreen,
              options: {
                topBar: {
                  title: {
                    text: 'Contacts',
                    alignment: 'center'
                  }
                }
              }
            }
          }
        ]
      }
    }
  })
}

export const pushScreen = ({
  componentId,
  screen,
  passProps = {},
  options = {}
}: {
  screen: string
  componentId: string
  passProps?: LayoutComponent['passProps']
  options?: LayoutComponent['options']
}) => {
  Navigation.push(componentId, {
    component: {
      name: screen,
      passProps,
      options
    }
  })
}

export const pushAddContact = (componentId: string) =>
  pushScreen({
    componentId,
    screen: screens.AddContactScreen,
    options: {
      topBar: {
        title: {
          text: 'Create contact'
        }
      },
      layout: {
        backgroundColor: colors.primary
      }
    }
  })

export const pushEditContact = (componentId: string, contact: ContactDto) =>
  pushScreen({
    componentId,
    screen: screens.EditContactScreen,
    options: {
      topBar: {
        title: {
          text: 'Edit contact'
        }
      },
      layout: {
        backgroundColor: colors.primary
      }
    },
    passProps: {
      contact
    }
  })

export const pushContact = ({
  componentId,
  contact
}: {
  componentId: string
  contact: ContactDto
}) =>
  pushScreen({
    componentId,
    screen: screens.ContactScreen,
    passProps: {
      contact
    },
    options: {
      layout: {
        backgroundColor: colors.primary
      },
      topBar: {
        title: {
          text: 'Contact'
        }
      }
    }
  })

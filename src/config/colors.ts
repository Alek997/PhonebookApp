import { Appearance } from 'react-native'

export const themes = {
  light: {
    primary: 'white',
    border: 'grey',
    separator: 'rgba(52, 52, 52, 0.1)',
    iconDefault: 'grey',
    link: 'blue',
    buttonPrimary: 'blue',
    buttonDanger: 'red',
    text: 'black',
    error: 'red',
    light: 'white'
  },
  dark: {
    primary: 'black',
    border: 'grey',
    separator: 'grey',
    iconDefault: 'grey',
    link: 'blue',
    buttonPrimary: 'blue',
    buttonDanger: 'red',
    text: 'white',
    error: 'red',
    light: 'white'
  }
}

export const colors = themes[Appearance.getColorScheme() ?? 'light']

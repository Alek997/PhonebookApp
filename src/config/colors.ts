import { Appearance } from 'react-native'

export const themes = {
  light: {
    primary: 'white',
    border: 'grey',
    separator: 'rgba(52, 52, 52, 0.1)',
    iconDefault: 'grey',
    link: '#3498DB',
    buttonPrimary: '#3498DB',
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
    link: '#3498DB',
    buttonPrimary: 'blue',
    buttonDanger: 'red',
    text: 'white',
    error: 'red',
    light: 'lightgray'
  }
}

export const colorScheme = Appearance.getColorScheme() ?? 'light'

export const colors = themes[colorScheme]

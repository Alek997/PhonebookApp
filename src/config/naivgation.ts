export interface Screen {
  name: string
  title?: string
}

export const screens: Record<'ContactsScreen' | 'ContactScreen', Screen> = {
  ContactsScreen: {
    name: 'phonebookApp.ContactsScreen',
    title: ''
  },
  ContactScreen: {
    name: 'phonebookApp.ContactScreen',
    title: ''
  }
}

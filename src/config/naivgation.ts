export interface Screen {
  name: string
  title?: string
}

export const screens: Record<
  'ContactsScreen' | 'ContactScreen' | 'AddNewContactScreen',
  Screen
> = {
  ContactsScreen: {
    name: 'phonebookApp.ContactsScreen',
    title: ''
  },
  ContactScreen: {
    name: 'phonebookApp.ContactScreen',
    title: ''
  },
  AddNewContactScreen: {
    name: 'phonebookApp.AddNewContactScreen',
    title: ''
  }
}

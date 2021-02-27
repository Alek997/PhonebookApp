export interface Screen {
  name: string
  title?: string
}

export const screens: Record<
  'ContactsScreen' | 'ContactScreen' | 'AddContactScreen' | 'EditContactScreen',
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
  AddContactScreen: {
    name: 'phonebookApp.AddContactScreen',
    title: ''
  },
  EditContactScreen: {
    name: 'phonebookApp.EditContactScreen',
    title: ''
  }
}

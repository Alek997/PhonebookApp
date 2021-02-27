import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { RootStateOrAny, useSelector } from 'react-redux'
import { NavigationScreenComponent } from '../utils/navigationUtils'
import { ContactDto } from '../types/domain'
import SearchBar from '../components/SearchBar'
import { contains } from '../utils/searchUtils'
import CreateContactButton from '../components/CreateContactButton'
import ContactList from '../components/ContactList'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

const ContactsScreen: NavigationScreenComponent = () => {
  const { contacts }: { contacts: ContactDto[] } = useSelector(
    (state: RootStateOrAny) => state.contactsReducer
  )
  const [filteredContacts, setFilteredContacts] = useState(contacts)

  useEffect(() => {
    setFilteredContacts(contacts)
  }, [contacts])

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        onSearch={(text: string) => {
          setFilteredContacts(
            contacts?.filter(contact =>
              contains(
                { name: contact.name, phone: contact.phone },
                text.toLowerCase()
              )
            )
          )
        }}
      />
      <CreateContactButton />
      <ContactList data={filteredContacts} />
    </SafeAreaView>
  )
}

export default ContactsScreen

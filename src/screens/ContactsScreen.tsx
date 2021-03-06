import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { NavigationScreenComponent } from '../utils/navigationUtils'
import { ContactDto } from '../types/domain'
import SearchBar from '../components/SearchBar'
import { contains } from '../utils/searchUtils'
import CreateContactButton from '../components/CreateContactButton'
import ContactList from '../components/ContactList'
import { generateContacts } from '../redux/actions'
import { colors } from '../config/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  generateButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.buttonPrimary,
    padding: 10,
    margin: 20,
    borderRadius: 20
  },
  generateButtonText: {
    color: colors.light,
    fontSize: 17
  }
})

const ContactsScreen: NavigationScreenComponent = () => {
  const { contacts }: { contacts: ContactDto[] } = useSelector(
    (state: RootStateOrAny) => state.contactsReducer
  )

  const dispatch = useDispatch()

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
      {contacts.length === 0 && (
        <TouchableOpacity
          onPress={() => dispatch(generateContacts())}
          style={styles.generateButton}
        >
          <Text style={styles.generateButtonText}>Generate 50 contacts</Text>
        </TouchableOpacity>
      )}
      <ContactList data={filteredContacts} />
    </SafeAreaView>
  )
}

export default ContactsScreen

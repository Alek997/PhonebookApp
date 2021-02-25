import React, { useEffect } from 'react'
import { Button, FlatList, SafeAreaView, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { NavigationScreenComponent } from '../utils/navigationUtils'
import { getContacts, addContact, removeContact } from '../redux/actions'
import { ContactDto } from '../types/domain'
import Contact from '../components/Contact'
import { Navigation } from 'react-native-navigation'
import { screens } from '../config/naivgation'

const onContactPress = ({
  componentId,
  contact
}: {
  componentId: string
  contact: ContactDto
}) => {
  Navigation.push(componentId, {
    component: {
      name: screens.ContactScreen.name,
      passProps: {
        contact: contact
      },
      options: {
        topBar: {
          title: {
            text: 'Contact'
          }
        }
      }
    }
  })
}

const ContactsScreen: NavigationScreenComponent = props => {
  const { contacts }: { contacts: ContactDto[] } = useSelector(
    state => state.contactsReducer
  )
  const dispatch = useDispatch()

  const fetchContacts = () => dispatch(getContacts())
  const addToContacts = (contact: ContactDto) => dispatch(addContact(contact))
  const removeFromContacts = (contact: ContactDto) =>
    dispatch(removeContact(contact))

  useEffect(() => {
    fetchContacts()
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Button
        title="Add"
        onPress={() =>
          addToContacts({
            id: '2',
            name: 'MUUUU',
            sex: 'male',
            code: '11000',
            country: 'Serbia',
            phone: '06445757'
          })
        }
      >
        Add New Contact
      </Button>
      <FlatList
        data={contacts}
        refreshing={!contacts}
        renderItem={({ item }) => {
          return (
            <Contact
              onPress={() => {
                onContactPress({
                  componentId: props.componentId,
                  contact: item
                })
              }}
              contact={item}
            />
          )
        }}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        // ListHeaderComponent={() => <ContactsHeader />}
        // ListEmptyComponent={() => <NoContacts />}
      />
    </SafeAreaView>
  )
}

export default ContactsScreen

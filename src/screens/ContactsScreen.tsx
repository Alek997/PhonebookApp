import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, PermissionsAndroid, View } from 'react-native'
import Contacts from 'react-native-contacts'
import { Navigation } from 'react-native-navigation'
import Contact from '../components/Contact'
import { screens } from '../../index'

const onContactPress = ({
  componentId,
  contact
}: {
  componentId: string
  contact: Contacts.Contact
}) => {
  Navigation.push(componentId, {
    component: {
      name: screens.Contact.name,
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

const ContactsScreen: React.FC<any> = () => {
  const [contacts, setContacts] = useState<Contacts.Contact[]>()

  useEffect(() => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
      buttonPositive: 'Please accept bare mortal'
    })
      .then(() => Contacts.getAll())
      .then(contacts => {
        setContacts(contacts)
      })
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={contacts}
        refreshing={!contacts}
        renderItem={({ item }) => {
          return (
            <Contact
              onPress={() => {
                onContactPress({
                  componentId: screens.Contacts.name,
                  contact: item
                })
              }}
              name={item.displayName}
              phoneNumber={item.phoneNumbers[0]?.number}
            />
          )
        }}
        keyExtractor={item => item.recordID}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        // ListHeaderComponent={() => <ContactsHeader />}
        // ListEmptyComponent={() => <NoContacts />}
      />
    </SafeAreaView>
  )
}

export default ContactsScreen

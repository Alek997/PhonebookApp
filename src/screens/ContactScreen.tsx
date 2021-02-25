import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import Contacts from 'react-native-contacts'

interface Props {
  contact: Contacts.Contact
}

const ContactScreen: React.FC<Props> = ({ contact }) => {
  console.log('contact', contact)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text>{contact?.displayName}</Text>
      </View>
    </SafeAreaView>
  )
}

export default ContactScreen

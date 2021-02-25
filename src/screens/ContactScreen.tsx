import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { ContactDto } from '../types/domain'

interface Props {
  contact: ContactDto
}

const ContactScreen: React.FC<Props> = ({ contact }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text>{contact.name}</Text>
        <Text>{contact.phone}</Text>
        <Text>{contact.sex}</Text>
        <Text>{contact.country}</Text>
        <Text>{contact.code}</Text>
      </View>
    </SafeAreaView>
  )
}

export default ContactScreen

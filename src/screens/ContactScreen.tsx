import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { ContactDto } from '../types/domain'
import { NavigationScreenComponent } from '../utils/navigationUtils'

const styles = StyleSheet.create({
  container: { flex: 1 }
})

interface Props {
  contact: ContactDto
}

const ContactScreen: NavigationScreenComponent<Props> = ({ contact }) => {
  return (
    <SafeAreaView style={styles.container}>
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

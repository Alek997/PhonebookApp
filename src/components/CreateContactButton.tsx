import React from 'react'
import { StyleSheet, Text, TouchableHighlight } from 'react-native'
import { screens } from '../config/naivgation'
import { pushAddContact } from '../utils/navigationUtils'

const styles = StyleSheet.create({
  addNewContainer: {
    display: 'flex',
    alignItems: 'center',
    margin: 10
  },
  text: { color: 'blue', fontSize: 17 }
})

const CreateContactButton = () => (
  <TouchableHighlight
    onPress={() => pushAddContact(screens.ContactsScreen.name)}
    underlayColor="white"
    style={styles.addNewContainer}
  >
    <Text style={styles.text}>Create new contact</Text>
  </TouchableHighlight>
)

export default CreateContactButton

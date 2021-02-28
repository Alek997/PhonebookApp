import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-eva-icons'
import { screens } from '../config/naivgation'
import { pushAddContact } from '../utils/navigationUtils'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 10
  },
  text: { color: 'blue', fontSize: 17, marginLeft: 5 }
})

const CreateContactButton = () => (
  <TouchableOpacity
    onPress={() => pushAddContact(screens.ContactsScreen.name)}
    style={styles.container}
  >
    <>
      <Icon name="person-add-outline" width={20} height={20} fill="blue" />
      <Text style={styles.text}>Create new contact</Text>
    </>
  </TouchableOpacity>
)

export default CreateContactButton

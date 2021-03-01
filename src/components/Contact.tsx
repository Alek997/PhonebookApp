import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { ContactDto } from '../types/domain'
import { pushContact } from '../utils/navigationUtils'
import { screens } from '../config/naivgation'
import { colors } from '../config/colors'

const styles = StyleSheet.create({
  container: {
    height: 90,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 20,
    marginHorizontal: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.separator
  },
  containerDetails: {
    flex: 1,
    marginLeft: 16
  },
  textName: {
    fontSize: 16,
    color: colors.text
  },
  containerLetter: {
    width: 46,
    height: 46,
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20
  },
  textLetter: {
    color: colors.light,
    fontSize: 25
  }
})

interface ContactProps {
  contact: ContactDto
}

const Contact: React.FC<ContactProps> = ({ contact }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        pushContact({ componentId: screens.ContactsScreen, contact })
      }
      style={styles.container}
    >
      <View
        nativeID={'sourceID'}
        style={{
          ...styles.containerLetter,
          backgroundColor: contact?.color
        }}
      >
        <Text style={styles.textLetter}>{contact?.name[0]}</Text>
      </View>
      <View style={styles.containerDetails}>
        <Text style={styles.textName}>{contact?.name}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Contact

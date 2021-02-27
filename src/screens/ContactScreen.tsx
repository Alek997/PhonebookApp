import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { ContactDto } from '../types/domain'
import { NavigationScreenComponent } from '../utils/navigationUtils'

const styles = StyleSheet.create({
  container: { flex: 1 },
  headerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    position: 'relative'
  },
  letterCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textLetter: {
    color: 'white',
    fontSize: 50
  },
  name: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    fontSize: 30
  },
  text: {
    margin: 10,
    fontSize: 20
  },
  editButton: {
    fontSize: 20,
    backgroundColor: 'blue',
    color: 'white',
    width: 150,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },
  deleteButton: {
    fontSize: 20,
    backgroundColor: 'red',
    color: 'white',
    width: 150,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginRight: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 16
  },
  buttonContainer: {
    position: 'absolute',
    right: 30,
    bottom: 30,
    display: 'flex',
    flexDirection: 'row'
  }
})

interface Props {
  contact: ContactDto
}

const ContactScreen: NavigationScreenComponent<Props> = ({ contact }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View
          nativeID={'destinationID'}
          style={{
            ...styles.letterCircle,
            backgroundColor: contact?.color || 'grey'
          }}
        >
          <Text style={styles.textLetter}>{contact?.name[0]}</Text>
        </View>
        <Text style={styles.name}>{contact.name}</Text>
      </View>
      <Text style={styles.text}>{contact.phone}</Text>
      <Text style={styles.text}>{contact.sex}</Text>
      <Text style={styles.text}>{contact.country}</Text>
      <Text style={styles.text}>{contact.code}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => {
            console.log('delete contact')
          }}
        >
          <Text style={styles.buttonText}>Delete contact</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => {
            console.log('edit contact')
          }}
        >
          <Text style={styles.buttonText}>Edit contact</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default ContactScreen

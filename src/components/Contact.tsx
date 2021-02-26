import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { ContactDto } from '../types/domain'

export const getRandomColor = () => {
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)

  return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({
  container: {
    height: 90,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 20,
    marginHorizontal: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(52, 52, 52, 0.1)'
  },
  containerDetails: {
    flex: 1,
    marginLeft: 16
  },
  textName: {
    fontSize: 16,
    color: 'black'
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
    color: 'white',
    fontSize: 25
  }
})

interface ContactProps {
  onPress(contact: ContactDto): void
  contact: ContactDto
}

const Contact: React.FC<ContactProps> = ({ onPress, contact }) => {
  return (
    <TouchableOpacity onPress={() => onPress(contact)}>
      <View style={styles.container}>
        <View
          style={{
            ...styles.containerLetter,
            backgroundColor: getRandomColor()
          }}
        >
          <Text style={styles.textLetter}>{contact?.name[0]}</Text>
        </View>
        <View style={styles.containerDetails}>
          <Text style={styles.textName}>{contact?.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default Contact

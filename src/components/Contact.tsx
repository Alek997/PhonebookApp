import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 90,
    flexDirection: 'row',
    justifyContent: 'flex-start',
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
    fontWeight: 'bold'
  },
  textPhoneNumber: {
    color: 'gray',
    marginTop: 2
  },
  containerLetter: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20
  },
  textLetter: {
    color: 'white',
    fontSize: 18
  }
})

interface ContactProps {
  onPress(): void
  name: string
  phoneNumber: string
}

const Contact: React.FC<ContactProps> = ({
  onPress,
  name = '',
  phoneNumber = ''
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.containerLetter}>
          <Text style={styles.textLetter}>{name[0]}</Text>
        </View>
        <View style={styles.containerDetails}>
          <Text style={styles.textName}>{name}</Text>
          <Text style={styles.textPhoneNumber}>{phoneNumber}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default Contact

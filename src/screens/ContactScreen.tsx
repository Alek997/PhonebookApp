import React from 'react'
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { useDispatch } from 'react-redux'
import { ContactDto } from '../types/domain'
import {
  NavigationScreenComponent,
  pushEditContact
} from '../utils/navigationUtils'
import { removeContact } from '../redux/actions'
import { Navigation } from 'react-native-navigation'
import { screens } from '../config/naivgation'
import { Icon } from 'react-native-eva-icons'
import { colors } from '../config/colors'

const styles = StyleSheet.create({
  container: { flex: 1 },
  headerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
    borderBottomColor: colors.border,
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
    color: colors.light,
    fontSize: 50
  },
  name: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    fontSize: 30,
    color: colors.text
  },
  text: {
    margin: 10,
    fontSize: 20,
    color: colors.text
  },
  editButton: {
    backgroundColor: colors.buttonPrimary,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    color: colors.light
  },
  deleteButton: {
    backgroundColor: colors.buttonDanger,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginRight: 10
  },
  buttonText: {
    color: colors.light,
    fontSize: 16
  },
  buttonContainer: {
    position: 'absolute',
    right: 30,
    bottom: 30,
    display: 'flex',
    flexDirection: 'row'
  },
  property: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center'
  }
})

const ContactScreen: NavigationScreenComponent<{
  contact: ContactDto
}> = ({ contact, componentId }) => {
  const dispatch = useDispatch()

  const onDeleteContact = (item: ContactDto) => {
    Alert.alert(
      'Delete this contact?',
      `${contact.name} will be removed from your contacts`,
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'OK',
          onPress: () => {
            dispatch(removeContact(item))
            Navigation.popTo(screens.ContactsScreen)
          }
        }
      ]
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View
          style={{
            ...styles.letterCircle,
            backgroundColor: contact?.color
          }}
        >
          <Text style={styles.textLetter}>
            {contact?.name[0].toUpperCase()}
          </Text>
        </View>
        <Text style={styles.name}>{contact.name}</Text>
      </View>
      <View style={styles.property}>
        <Icon
          name="phone-outline"
          width={23}
          height={23}
          fill={colors.iconDefault}
        />
        <Text style={styles.text}>{contact.phone}</Text>
      </View>
      <View style={styles.property}>
        <Icon
          name="plus-square-outline"
          width={23}
          height={23}
          fill={colors.iconDefault}
        />
        <Text style={styles.text}>{contact.sex}</Text>
      </View>
      <View style={styles.property}>
        <Icon
          name="globe-2-outline"
          width={23}
          height={23}
          fill={colors.iconDefault}
        />
        <Text style={styles.text}>{contact.country}</Text>
      </View>
      <View style={styles.property}>
        <Icon
          name="code-outline"
          width={23}
          height={23}
          fill={colors.iconDefault}
        />
        <Text style={styles.text}>{contact.code}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => onDeleteContact(contact)}
        >
          <Icon
            name="trash-2-outline"
            width={35}
            height={35}
            fill={colors.light}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => {
            pushEditContact(componentId, contact)
          }}
        >
          <Icon
            name="edit-2-outline"
            width={35}
            height={35}
            fill={colors.light}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default ContactScreen

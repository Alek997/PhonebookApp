import React, { useEffect, useState } from 'react'
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native'
import { RootStateOrAny, useSelector } from 'react-redux'
import { NavigationScreenComponent, pushScreen } from '../utils/navigationUtils'
import { ContactDto } from '../types/domain'
import Contact from '../components/Contact'
import { screens } from '../config/naivgation'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  itemSeparator: { height: 10 },
  searchContainer: {
    marginVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  search: {
    borderRadius: 5,
    margin: 10,
    paddingLeft: 10,
    borderColor: 'gray',
    borderWidth: 0.5,
    width: '100%',
    minHeight: 50,
    backgroundColor: 'white'
  },
  addNew: { color: 'blue', fontSize: 17 },
  addNewContainer: {
    display: 'flex',
    alignItems: 'center',
    margin: 10
  }
})

const contains = ({ name, phone }, query) => {
  if (name.toLowerCase().includes(query) || phone.includes(query)) {
    return true
  }
  return false
}

const ContactsScreen: NavigationScreenComponent = props => {
  const { contacts }: { contacts: ContactDto[] } = useSelector(
    (state: RootStateOrAny) => state.contactsReducer
  )

  const [filteredData, setFilteredData] = useState<ContactDto[]>([])

  useEffect(() => {
    setFilteredData(contacts)
  }, [contacts])

  const handleSearch = text => {
    const formattedQuery = text.toLowerCase()
    const filteredContacts = contacts?.filter(contact =>
      contains({ name: contact.name, phone: contact.phone }, formattedQuery)
    )
    setFilteredData(filteredContacts)
  }

  const onContactPress = (contact: ContactDto) =>
    pushScreen({
      componentId: props.componentId,
      screen: screens.ContactScreen,
      passProps: {
        contact
      },
      options: {
        layout: {
          backgroundColor: 'white'
        },
        animations: {
          push: {
            waitForRender: true,
            enabled: true,

            sharedElementTransitions: [
              {
                fromId: `sourceID`,
                toId: `destinationID`
              }
            ]
          }
        },
        topBar: {
          title: {
            text: 'Contact'
          }
        }
      }
    })

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={handleSearch}
          placeholder="Search names & phones"
          style={styles.search}
        />
      </View>

      <TouchableHighlight
        onPress={() =>
          pushScreen({
            componentId: props.componentId,
            screen: screens.AddNewContactScreen,
            options: {
              topBar: {
                title: {
                  text: 'Create contact'
                }
              },
              layout: {
                backgroundColor: 'white'
              }
            }
          })
        }
        underlayColor="white"
        style={styles.addNewContainer}
      >
        <Text style={styles.addNew}>Create new contact</Text>
      </TouchableHighlight>

      <FlatList
        data={filteredData}
        refreshing={!contacts}
        renderItem={({ item }) => (
          <Contact onPress={onContactPress} contact={item} />
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      />
    </SafeAreaView>
  )
}

export default ContactsScreen

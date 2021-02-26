import React, { useEffect, useState } from 'react'
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View
} from 'react-native'
import { RootStateOrAny, useSelector } from 'react-redux'
import { NavigationScreenComponent, showModal } from '../utils/navigationUtils'
import { ContactDto } from '../types/domain'
import Contact from '../components/Contact'
import { Navigation } from 'react-native-navigation'
import { screens } from '../config/naivgation'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  itemSeparator: { height: 10 }
})

const onContactPress = ({
  componentId,
  contact
}: {
  componentId: string
  contact: ContactDto
}) => {
  Navigation.push(componentId, {
    component: {
      name: screens.ContactScreen.name,
      passProps: {
        contact: contact
      },
      options: {
        topBar: {
          title: {
            text: 'Contact'
          }
        }
      }
    }
  })
}

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
    console.log('set contacts')
    setFilteredData(contacts)
  }, [contacts])

  const handleSearch = text => {
    console.log(text)
    const formattedQuery = text.toLowerCase()
    const filteredContacts = contacts?.filter(contact =>
      contains({ name: contact.name, phone: contact.phone }, formattedQuery)
    )
    setFilteredData(filteredContacts)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Add"
        onPress={() => showModal(screens.AddNewContactScreen)}
      >
        Add New Contact
      </Button>

      <View
        style={{
          backgroundColor: '#fff',
          padding: 10,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={handleSearch}
          placeholder="Search"
          style={{
            borderRadius: 25,
            borderColor: '#333',
            backgroundColor: '#fff'
          }}
        />
      </View>

      <FlatList
        data={filteredData}
        refreshing={!contacts}
        renderItem={({ item }) => {
          return (
            <Contact
              onPress={() => {
                onContactPress({
                  componentId: props.componentId,
                  contact: item
                })
              }}
              contact={item}
            />
          )
        }}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        // ListHeaderComponent={renderHeader}
        // ListEmptyComponent={() => <NoContacts />}
      />
    </SafeAreaView>
  )
}

export default ContactsScreen

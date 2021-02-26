import React from 'react'
import { Button, FlatList, SafeAreaView, StyleSheet, View } from 'react-native'
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

const ContactsScreen: NavigationScreenComponent = props => {
  const { contacts }: { contacts: ContactDto[] } = useSelector(
    (state: RootStateOrAny) => state.contactsReducer
  )

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Add"
        onPress={() => showModal(screens.AddNewContactScreen)}
      >
        Add New Contact
      </Button>

      <FlatList
        data={contacts}
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
        // ListHeaderComponent={() => <ContactsHeader />}
        // ListEmptyComponent={() => <NoContacts />}
      />
    </SafeAreaView>
  )
}

export default ContactsScreen

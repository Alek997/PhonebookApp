import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { NavigationScreenComponent } from '../utils/navigationUtils'
import { fetchContacts } from '../redux/actions'

// const onContactPress = ({
//   componentId,
//   contact
// }: {
//   componentId: string
//   contact: Contacts.Contact
// }) => {
//   Navigation.push(componentId, {
//     component: {
//       name: screens.Contact.name,
//       passProps: {
//         contact: contact
//       },
//       options: {
//         topBar: {
//           title: {
//             text: 'Contact'
//           }
//         }
//       }
//     }
//   })
// }

const ContactsScreen: NavigationScreenComponent = props => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   console.log('muuu')
  //   if (!state.contacts) dispatch(fetchContacts())
  // }, [dispatch])
  console.log('state', state)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <FlatList
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
              name={item.displayName}
              phoneNumber={item.phoneNumbers[0]?.number}
            />
          )
        }}
        keyExtractor={item => item.recordID}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        // ListHeaderComponent={() => <ContactsHeader />}
        // ListEmptyComponent={() => <NoContacts />}
      /> */}
    </SafeAreaView>
  )
}

export default ContactsScreen

import React from 'react'
import { FlatList, FlatListProps, StyleSheet, View } from 'react-native'
import { ContactDto } from '../types/domain'
import Contact from '../components/Contact'

const styles = StyleSheet.create({
  itemSeparator: { height: 10 }
})

const defaultItemSeparator = () => <View style={styles.itemSeparator} />

const ContactList: React.FC<Omit<FlatListProps<ContactDto>, 'renderItem'>> = ({
  ItemSeparatorComponent = defaultItemSeparator,
  ...props
}) => {
  return (
    <FlatList
      renderItem={({ item }) => <Contact contact={item} />}
      refreshing={!props.data}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={ItemSeparatorComponent}
      {...props}
    />
  )
}

export default ContactList

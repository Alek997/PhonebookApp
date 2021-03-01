import React from 'react'
import { FlatList, FlatListProps, StyleSheet, View, Text } from 'react-native'
import { ContactDto } from '../types/domain'
import Contact from '../components/Contact'
import { colors } from '../config/colors'

const styles = StyleSheet.create({
  itemSeparator: { height: 10 },
  emptyList: {
    height: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptyListText: {
    color: colors.text
  }
})

const defaultItemSeparator = () => <View style={styles.itemSeparator} />

const defaultEmptyListComponent = () => {
  return (
    <View style={styles.emptyList}>
      <Text style={styles.emptyListText}>List is empty</Text>
    </View>
  )
}

const ContactList: React.FC<Omit<FlatListProps<ContactDto>, 'renderItem'>> = ({
  ItemSeparatorComponent = defaultItemSeparator,
  ListEmptyComponent = defaultEmptyListComponent,
  ...props
}) => {
  return (
    <FlatList
      renderItem={({ item }) => <Contact contact={item} />}
      refreshing={!props.data}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={ItemSeparatorComponent}
      ListEmptyComponent={ListEmptyComponent}
      {...props}
    />
  )
}

export default ContactList

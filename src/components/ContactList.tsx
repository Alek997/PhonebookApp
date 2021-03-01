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

const defaultRenderItem: FlatListProps<ContactDto>['renderItem'] = ({
  item
}) => <Contact contact={item} />

interface Props extends Omit<FlatListProps<ContactDto>, 'renderItem'> {
  renderItem?: FlatListProps<ContactDto>['renderItem']
}

const ContactList: React.FC<Props> = ({
  ItemSeparatorComponent = defaultItemSeparator,
  ListEmptyComponent = defaultEmptyListComponent,
  renderItem = defaultRenderItem,
  ...props
}) => {
  return (
    <FlatList
      keyExtractor={item => item.id}
      ItemSeparatorComponent={ItemSeparatorComponent}
      ListEmptyComponent={ListEmptyComponent}
      renderItem={renderItem}
      {...props}
    />
  )
}

export default ContactList

import React from 'react'
import { FlatList, FlatListProps, StyleSheet, View, Text } from 'react-native'
import { ContactDto } from '../types/domain'
import Contact from '../components/Contact'
import { colors } from '../config/colors'
import { Icon } from 'react-native-eva-icons'

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
      <Icon
        name="alert-triangle-outline"
        width={40}
        height={40}
        fill={colors.text}
      />
      <Text style={styles.emptyListText}>No results</Text>
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

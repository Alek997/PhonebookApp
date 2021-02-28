import { StyleSheet, TextInput, View } from 'react-native'

import React from 'react'
import { Icon } from 'react-native-eva-icons'

const styles = StyleSheet.create({
  searchContainer: {
    margin: 5,
    paddingLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 0.5,
    backgroundColor: 'white'
  },
  search: {
    minHeight: 50,
    width: '100%'
  }
})

interface Props {
  onSearch(text: string): void
}
const SearchBar: React.FC<Props> = ({ onSearch }) => (
  <View style={styles.searchContainer}>
    <Icon name="search-outline" width={20} height={20} fill="grey" />
    <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      onChangeText={onSearch}
      placeholder="Search names & phones"
      style={styles.search}
    />
  </View>
)

export default SearchBar

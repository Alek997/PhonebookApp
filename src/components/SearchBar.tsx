import { StyleSheet, TextInput, View } from 'react-native'

import React from 'react'

const styles = StyleSheet.create({
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
  }
})

interface Props {
  onSearch(text: string): void
}
const SearchBar: React.FC<Props> = ({ onSearch }) => (
  <View style={styles.searchContainer}>
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

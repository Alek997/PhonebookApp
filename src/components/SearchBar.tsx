import { StyleSheet, TextInput, View } from 'react-native'

import React from 'react'
import { Icon } from 'react-native-eva-icons'
import { colors } from '../config/colors'

const styles = StyleSheet.create({
  searchContainer: {
    margin: 5,
    paddingLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: colors.border,
    backgroundColor: colors.primary
  },
  search: {
    minHeight: 50,
    width: '100%',
    color: colors.text
  }
})

interface Props {
  onSearch(text: string): void
}
const SearchBar: React.FC<Props> = ({ onSearch }) => (
  <View style={styles.searchContainer}>
    <Icon
      name="search-outline"
      width={20}
      height={20}
      fill={colors.iconDefault}
    />
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

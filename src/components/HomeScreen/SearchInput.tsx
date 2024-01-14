import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import CustomIcon from '../CustomIcon';

import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../../theme/theme';
import { adaptive } from '../../utils/adaptive';

interface SearchInputI {
    searchText: string,
    setSearchText: (text: string) => void,
    searchCoffee: (search: string) => void,
    resetSearchCoffee: () => void,
}

const SearchInput: React.FC<SearchInputI> = ({ searchText, setSearchText, searchCoffee, resetSearchCoffee }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => searchCoffee(searchText)}>
        <CustomIcon
            name='search'
            size={adaptive(FONTSIZE.size_18)}
            color={
                searchText.length > 0
                ? COLORS.primaryOrangeHex
                : COLORS.primaryLightGreyHex
            }
            style={styles.inputIcon}
        />
      </TouchableOpacity>
      <TextInput
        placeholder='Find Your Coffee...'
        value={searchText}
        onChangeText={text => { setSearchText(text), searchCoffee(text) }}
        placeholderTextColor={COLORS.primaryLightGreyHex}
        style={styles.input}
      />
      {searchText.length > 0 && 
        <TouchableOpacity onPress={() => resetSearchCoffee()}>
          <CustomIcon 
            style={styles.inputIcon}
            name='close'
            size={adaptive(FONTSIZE.size_16)} 
            color={COLORS.primaryLightGreyHex} 
          />
        </TouchableOpacity>
      }
    </View>
  )
};

export default SearchInput;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        margin: adaptive(SPACING.space_30),
        borderRadius: adaptive(BORDERRADIUS.radius_20),
        backgroundColor: COLORS.primaryDarkGreyHex,
        alignItems: 'center',
    },
    
    inputIcon: {
        marginHorizontal: adaptive(SPACING.space_20),
    },

    input: {
        flex: 1,
        height: SPACING.space_20 * 3,
        fontFamily:FONTFAMILY.poppins_medium,
        fontSize: adaptive(FONTSIZE.size_14),
        color: COLORS.primaryWhiteHex,
    },
});
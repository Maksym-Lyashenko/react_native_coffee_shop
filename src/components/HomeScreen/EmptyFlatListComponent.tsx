import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../../theme/theme';

import { adaptive } from '../../utils/adaptive';

const { width } = Dimensions.get('window');

const EmptyFlatListComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No Coffee Available</Text>
    </View>
  )
};

export default EmptyFlatListComponent;

const styles = StyleSheet.create({
    container: {
        width: width - adaptive(SPACING.space_30) * 2,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: adaptive(SPACING.space_36) * 4.2,
    },

    text: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: adaptive(FONTSIZE.size_16),
        color: COLORS.primaryLightGreyHex,
        marginBottom: SPACING.space_4
    },
});
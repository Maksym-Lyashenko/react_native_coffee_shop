import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import GradientBGIcon from './GradientBGIcon';
import ProfilePic from './ProfilePic';

import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../../theme/theme';
import { adaptive } from '../../utils/adaptive';

interface HeaderBarPropsI {
    title?: string,
};

const HeaderBar: React.FC<HeaderBarPropsI> = ({ title }) => {
  return (
    <View style={styles.container}>
        <GradientBGIcon
            name='menu'
            color={COLORS.primaryLightGreyHex}
            size={adaptive(FONTSIZE.size_16)}
        />
        <Text style={styles.headerText}>
            {title}
        </Text>
        <ProfilePic />
    </View>
  )
};

export default HeaderBar;

const styles = StyleSheet.create({
    container: {
        padding: adaptive(SPACING.space_30),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    headerText: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: adaptive(FONTSIZE.size_20),
        color: COLORS.primaryWhiteHex,
    },
});
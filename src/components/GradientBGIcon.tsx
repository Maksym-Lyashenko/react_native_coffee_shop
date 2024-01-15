import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, SPACING} from '../theme/theme';
import CustomIcon from '../utils/CustomIcon';
import {adaptive} from '../utils/adaptive';

interface GradientBGIconI {
  name: string;
  color: string;
  size: number;
}

const GradientBGIcon: React.FC<GradientBGIconI> = ({name, color, size}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
        style={styles.linearGradientBG}>
        <CustomIcon name={name} color={color} size={size} />
      </LinearGradient>
    </View>
  );
};

export default GradientBGIcon;

const styles = StyleSheet.create({
  container: {
    borderWidth: adaptive(2),
    borderBlockColor: COLORS.secondaryDarkGreyHex,
    borderRadius: adaptive(SPACING.space_12),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.secondaryDarkGreyHex,
    overflow: 'hidden',
  },

  linearGradientBG: {
    height: adaptive(SPACING.space_36),
    width: adaptive(SPACING.space_36),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import { StyleSheet, View } from 'react-native';

import CustomIcon from '../CustomIcon';

import { BORDERRADIUS, SPACING } from '../../theme/theme';
import { adaptive } from '../../utils/adaptive';

interface BGIconI {
    name: string,
    color: string,
    size: number,
    BGColor: string,
};

const BGIcon: React.FC<BGIconI> = ({ name, color, size, BGColor }) => {
  return (
    <View style={[styles.iconBG, {backgroundColor: BGColor}]}>
      <CustomIcon name={name} color={color} size={size} />
    </View>
  )
};

export default BGIcon;

const styles = StyleSheet.create({
    iconBG: {
        height: adaptive(SPACING.space_30),
        width: adaptive(SPACING.space_30),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: adaptive(BORDERRADIUS.radius_8)
    },
});
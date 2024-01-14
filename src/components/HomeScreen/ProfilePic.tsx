import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { COLORS, SPACING } from '../../theme/theme';
import { avatar } from '../../constants/images';
import { adaptive } from '../../utils/adaptive';

const ProfilePic = () => {
  return (
    <View style={styles.container}>
      <Image
       source={avatar}
       style={styles.image}
     />
    </View>
  )
};

export default ProfilePic;

const styles = StyleSheet.create({
    container: {
        height: adaptive(SPACING.space_36),
        width: adaptive(SPACING.space_36),
        borderRadius: adaptive(SPACING.space_12),
        borderWidth: adaptive(2),
        borderColor: COLORS.secondaryDarkGreyHex,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },

    image: {
        height: adaptive(SPACING.space_36),
        width: adaptive(SPACING.space_36),
        resizeMode: 'contain'
    },
});
import React from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import LottieView from 'lottie-react-native';

import {COLORS} from '../theme/theme';

interface IPopUpAnimation {
  style: StyleProp<ViewStyle>;
  source: string;
}

const PopUpAnimation: React.FC<IPopUpAnimation> = ({style, source}) => {
  return (
    <View style={styles.container}>
      <LottieView style={style} source={source} autoPlay loop={false} />
    </View>
  );
};

export default PopUpAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: COLORS.primaryBlackRGBA,
    justifyContent: 'center',
  },
});

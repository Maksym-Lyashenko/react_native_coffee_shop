import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LottieView from 'lottie-react-native';

import {adaptive} from '../../utils/adaptive';
import {COLORS, FONTFAMILY, FONTSIZE} from '../../theme/theme';

interface IEmptyListAnimation {
  title: string;
}

const EmptyListAnimation: React.FC<IEmptyListAnimation> = ({title}) => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../lottie/coffeecup.json')}
        style={styles.lottie}
        autoPlay
        loop
      />
      <Text style={styles.lottieText}>{title}</Text>
    </View>
  );
};

export default EmptyListAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  lottie: {
    height: adaptive(300),
  },

  lottieText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: adaptive(FONTSIZE.size_16),
    color: COLORS.primaryOrangeHex,
    textAlign: 'center',
  },
});

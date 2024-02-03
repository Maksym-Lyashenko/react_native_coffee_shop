import React from 'react';
import {TouchableOpacity} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import GradientBGIcon from '../GradientBGIcon';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../../theme/theme';
import {adaptive} from '../../utils/adaptive';

type Nav = {
  goBack: () => void;
  navigate: (value: string) => void;
};

interface IHeader {
  navigation: Nav;
}

const Header: React.FC<IHeader> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <GradientBGIcon
          name="left"
          color={COLORS.primaryLightGreyHex}
          size={adaptive(FONTSIZE.size_16)}
        />
      </TouchableOpacity>
      <Text style={styles.headerText}>Payments</Text>
      <View style={styles.emptyView} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: adaptive(SPACING.space_24),
    paddingVertical: adaptive(SPACING.space_15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  headerText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: adaptive(FONTSIZE.size_20),
    color: COLORS.primaryWhiteHex,
  },

  emptyView: {
    height: adaptive(SPACING.space_36),
    width: adaptive(SPACING.space_36),
  },
});

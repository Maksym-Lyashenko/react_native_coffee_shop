import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../theme/theme';
import CustomIcon from '../../utils/CustomIcon';
import {adaptive} from '../../utils/adaptive';

interface IPaymentMethod {
  paymentMode: string;
  name: string;
  icon: string;
  isIcon: boolean;
}

const PaymentMethod: React.FC<IPaymentMethod> = ({
  paymentMode,
  name,
  icon,
  isIcon,
}) => (
  <View
    style={[
      styles.container,
      {
        borderColor:
          paymentMode == name ? COLORS.primaryOrangeHex : COLORS.primaryGreyHex,
      },
    ]}>
    {isIcon ? (
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
        style={styles.linearGradientWallet}>
        <View style={styles.walletRow}>
          <CustomIcon
            name={icon}
            color={COLORS.primaryOrangeHex}
            size={adaptive(FONTSIZE.size_30)}
          />
          <Text style={styles.paymentTitle}>{name}</Text>
        </View>
        <Text style={styles.paymentPrice}>$ 100.50</Text>
      </LinearGradient>
    ) : (
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
        style={styles.linearGradientRegular}>
        <Image source={icon} style={styles.paymentImage} />
        <Text style={styles.paymentTitle}>{name}</Text>
      </LinearGradient>
    )}
  </View>
);

export default PaymentMethod;

const styles = StyleSheet.create({
  container: {
    borderRadius: adaptive(BORDERRADIUS.radius_15 * 2),
    backgroundColor: COLORS.primaryGreyHex,
    borderWidth: adaptive(3),
  },

  linearGradientWallet: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: adaptive(SPACING.space_12),
    paddingHorizontal: adaptive(SPACING.space_24),
    gap: adaptive(SPACING.space_24),
    borderRadius: adaptive(BORDERRADIUS.radius_15 * 2),
  },

  walletRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: adaptive(SPACING.space_24),
  },

  paymentTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: adaptive(FONTSIZE.size_16),
    color: COLORS.primaryWhiteHex,
  },

  paymentPrice: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: adaptive(FONTSIZE.size_16),
    color: COLORS.secondaryLightGreyHex,
  },

  linearGradientRegular: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: adaptive(SPACING.space_12),
    paddingHorizontal: adaptive(SPACING.space_24),
    gap: adaptive(SPACING.space_24),
    borderRadius: adaptive(BORDERRADIUS.radius_15 * 2),
  },

  paymentImage: {
    height: adaptive(SPACING.space_30),
    width: adaptive(SPACING.space_30),
  },
});

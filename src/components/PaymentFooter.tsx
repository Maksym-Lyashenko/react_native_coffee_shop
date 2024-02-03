import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {adaptive} from '../utils/adaptive';

import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';

type TPrice = {
  size?: string;
  price: string | number;
  currency: string;
};

interface IPaymentFooter {
  price: TPrice;
  buttonTitle: string;
  buttonHandler: () => void;
}

const PaymentFooter: React.FC<IPaymentFooter> = ({
  price,
  buttonTitle,
  buttonHandler,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.priceContainer}>
        <Text style={styles.priceTitle}>Price</Text>
        <Text style={styles.priceText}>
          {price.currency}
          <Text style={styles.price}> {price.price}</Text>
        </Text>
      </View>
      <TouchableOpacity style={styles.btnContainer} onPress={buttonHandler}>
        <Text style={styles.btnText}>{buttonTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentFooter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: adaptive(SPACING.space_20),
    padding: adaptive(SPACING.space_20),
  },

  priceContainer: {
    alignItems: 'center',
    width: 120,
  },

  priceTitle: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: adaptive(FONTSIZE.size_14),
    color: COLORS.secondaryLightGreyHex,
  },

  priceText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: adaptive(FONTSIZE.size_24),
    color: COLORS.primaryOrangeHex,
  },

  price: {
    color: COLORS.primaryWhiteHex,
  },

  btnContainer: {
    backgroundColor: COLORS.primaryOrangeHex,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: adaptive(SPACING.space_36 * 2),
    borderRadius: adaptive(BORDERRADIUS.radius_20),
  },

  btnText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: adaptive(FONTSIZE.size_18),
    color: COLORS.primaryWhiteHex,
  },
});

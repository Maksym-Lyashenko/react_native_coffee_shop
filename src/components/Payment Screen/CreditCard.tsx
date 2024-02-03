import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../theme/theme';
import LinearGradient from 'react-native-linear-gradient';
import CustomIcon from '../../utils/CustomIcon';
import {adaptive} from '../../utils/adaptive';

interface ICreditCard {
  setPaymentMode: React.Dispatch<React.SetStateAction<string>>;
  paymentMode: string;
}

const CreditCard: React.FC<ICreditCard> = ({setPaymentMode, paymentMode}) => {
  return (
    <TouchableOpacity onPress={() => setPaymentMode('Credit Card')}>
      <View
        style={[
          styles.container,
          {
            borderColor:
              paymentMode == 'Credit Card'
                ? COLORS.primaryOrangeHex
                : COLORS.primaryGreyHex,
          },
        ]}>
        <Text style={styles.title}>Credit Card</Text>
        <View style={styles.bg}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
            style={styles.linearGradient}>
            <View style={styles.cardRow}>
              <CustomIcon
                name="chip"
                size={adaptive(FONTSIZE.size_20 * 2)}
                color={COLORS.primaryOrangeHex}
              />
              <CustomIcon
                name="visa"
                size={adaptive(FONTSIZE.size_30 * 2)}
                color={COLORS.primaryWhiteHex}
              />
            </View>
            <View style={styles.cardNumberContainer}>
              <Text style={styles.cardNumber}>123</Text>
              <Text style={styles.cardNumber}>456</Text>
              <Text style={styles.cardNumber}>789</Text>
              <Text style={styles.cardNumber}>012</Text>
            </View>
            <View style={styles.cardRow}>
              <View style={styles.cardNameContainer}>
                <Text style={styles.nameSubtitle}>Card Holder Name</Text>
                <Text style={styles.nameTitle}>Maksym Lyashenko</Text>
              </View>
              <View style={styles.cardDateContainer}>
                <Text style={styles.nameSubtitle}>Expired Date</Text>
                <Text style={styles.nameTitle}>10/30</Text>
              </View>
            </View>
          </LinearGradient>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CreditCard;

const styles = StyleSheet.create({
  container: {
    padding: adaptive(SPACING.space_10),
    gap: adaptive(SPACING.space_10),
    borderRadius: adaptive(BORDERRADIUS.radius_15 * 2),
    borderWidth: adaptive(3),
  },

  title: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: adaptive(FONTSIZE.size_14),
    color: COLORS.primaryWhiteHex,
    marginLeft: adaptive(SPACING.space_10),
  },

  bg: {
    backgroundColor: COLORS.primaryGreyHex,
    borderRadius: adaptive(BORDERRADIUS.radius_25),
  },

  linearGradient: {
    borderRadius: adaptive(BORDERRADIUS.radius_25),
    gap: adaptive(SPACING.space_36),
    paddingHorizontal: adaptive(SPACING.space_15),
    paddingVertical: adaptive(SPACING.space_10),
  },

  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  cardNumberContainer: {
    flexDirection: 'row',
    gap: adaptive(SPACING.space_10),
    alignItems: 'center',
  },

  cardNumber: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: adaptive(FONTSIZE.size_18),
    color: COLORS.primaryWhiteHex,
    letterSpacing: adaptive(SPACING.space_4 + SPACING.space_2),
  },

  cardNameContainer: {
    alignItems: 'flex-start',
  },

  nameSubtitle: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: adaptive(FONTSIZE.size_12),
    color: COLORS.secondaryLightGreyHex,
  },

  nameTitle: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: adaptive(FONTSIZE.size_18),
    color: COLORS.primaryWhiteHex,
  },

  cardDateContainer: {
    alignItems: 'flex-end',
  },
});

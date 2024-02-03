import React from 'react';
import {Image, ImageProps, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../theme/theme';
import {adaptive} from '../../utils/adaptive';
import {TCartItem} from '../../types/types';

interface IOrderItemCard extends Omit<TCartItem, 'id' | 'roasted' | 'index'> {
  ItemPrice: string;
}

const OrderItemCard: React.FC<IOrderItemCard> = ({
  type,
  name,
  imagelink_square,
  special_ingredient,
  prices,
  ItemPrice,
}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
      style={styles.linearGradient}>
      <View style={styles.cardInfoContainer}>
        <View style={styles.cardImageInfoContainer}>
          <Image source={imagelink_square} style={styles.image} />
          <View>
            <Text style={styles.cardTitle}>{name}</Text>
            <Text style={styles.cardSubtitle}>{special_ingredient}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.currency}>
            $ <Text style={styles.price}>{ItemPrice}</Text>
          </Text>
        </View>
      </View>
      {prices.map((item, index) => (
        <View key={index} style={styles.cardTableRow}>
          <View style={styles.cardTableRow}>
            <View style={styles.sizeBoxLeft}>
              <Text
                style={[
                  styles.sizeTex,
                  {
                    fontSize:
                      type == 'Bean'
                        ? adaptive(FONTSIZE.size_12)
                        : adaptive(FONTSIZE.size_16),
                  },
                ]}>
                {item.size}
              </Text>
            </View>
            <View style={styles.priceBoxRight}>
              <Text style={styles.priceCurrency}>
                {item.currency}
                <Text style={styles.price}> {item.price}</Text>
              </Text>
            </View>
          </View>
          <View style={styles.cardTableRow}>
            <Text style={styles.cardQuantityPriceText}>
              X<Text style={styles.price}> {item.quantity}</Text>
            </Text>
            <Text style={styles.cardQuantityPriceText}>
              $ {(item.quantity * Number(item.price)).toFixed(2).toString()}
            </Text>
          </View>
        </View>
      ))}
    </LinearGradient>
  );
};

export default OrderItemCard;

const styles = StyleSheet.create({
  linearGradient: {
    gap: adaptive(SPACING.space_20),
    padding: adaptive(SPACING.space_20),
    borderRadius: adaptive(BORDERRADIUS.radius_25),
  },

  cardInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  cardImageInfoContainer: {
    flexDirection: 'row',
    gap: adaptive(SPACING.space_20),
    alignItems: 'center',
  },

  image: {
    height: adaptive(90),
    width: adaptive(90),
    borderRadius: adaptive(BORDERRADIUS.radius_15),
  },

  cardTitle: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: adaptive(FONTSIZE.size_18),
    color: COLORS.primaryWhiteHex,
  },

  cardSubtitle: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: adaptive(FONTSIZE.size_12),
    color: COLORS.secondaryLightGreyHex,
  },

  currency: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: adaptive(FONTSIZE.size_20),
    color: COLORS.primaryOrangeHex,
  },

  price: {
    color: COLORS.primaryWhiteHex,
  },

  cardTableRow: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  sizeBoxLeft: {
    backgroundColor: COLORS.primaryBlackHex,
    height: adaptive(45),
    flex: 1,
    borderTopLeftRadius: adaptive(BORDERRADIUS.radius_10),
    borderBottomLeftRadius: adaptive(BORDERRADIUS.radius_10),
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: adaptive(1),
    borderRightColor: COLORS.primaryGreyHex,
  },

  sizeTex: {
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.secondaryLightGreyHex,
  },

  priceBoxRight: {
    backgroundColor: COLORS.primaryBlackHex,
    height: adaptive(45),
    flex: 1,
    borderTopRightRadius: adaptive(BORDERRADIUS.radius_10),
    borderBottomRightRadius: adaptive(BORDERRADIUS.radius_10),
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: adaptive(1),
    borderLeftColor: COLORS.primaryGreyHex,
  },

  priceCurrency: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: adaptive(FONTSIZE.size_18),
    color: COLORS.primaryOrangeHex,
  },

  cardQuantityPriceText: {
    flex: 1,
    textAlign: 'center',
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: adaptive(FONTSIZE.size_20),
    color: COLORS.primaryOrangeHex,
  },
});

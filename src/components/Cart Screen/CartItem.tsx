import React from 'react';
import {
  Image,
  ImageProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../theme/theme';
import {adaptive} from '../../utils/adaptive';
import CustomIcon from '../../utils/CustomIcon';

interface ICartItem {
  id: string;
  name: string;
  imagelink_square: ImageProps;
  special_ingredient: string;
  roasted: string;
  prices: {
    size: string;
    price: string;
    currency: string;
    quantity?: number;
  }[];
  type: string;
  incrementCartItemQuantityHandler: (id: string, size: string) => void;
  decrementCartItemQuantityHandler: (id: string, size: string) => void;
}

const CartItem: React.FC<ICartItem> = ({
  id,
  name,
  imagelink_square,
  special_ingredient,
  roasted,
  prices,
  type,
  decrementCartItemQuantityHandler,
  incrementCartItemQuantityHandler,
}) => {
  console.log(imagelink_square);

  return (
    <View>
      {prices.length != 1 ? (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
          style={styles.cartItemLinearGradient}>
          <View style={styles.cartItemRow}>
            <Image source={imagelink_square} style={styles.cartItemImage} />
            <View style={styles.cartItemInfo}>
              <View>
                <Text style={styles.cartItemTitle}>{name}</Text>
                <Text style={styles.cartItemSubtitle}>
                  {special_ingredient}
                </Text>
              </View>
              <View style={styles.cartItemRoastedContainer}>
                <Text style={styles.cartItemRoastedText}>{roasted}</Text>
              </View>
            </View>
          </View>
          {prices.map((item, index) => (
            <View key={index} style={styles.cartItemSizeRowContainer}>
              <View style={styles.cartItemSizeValueContainer}>
                <View style={styles.sizeBox}>
                  <Text
                    style={[
                      styles.sizeText,
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
                <Text style={styles.sizeCurrency}>
                  {item.currency}
                  <Text style={styles.sizePrise}> {item.price}</Text>
                </Text>
              </View>
              <View style={styles.cartItemSizeValueContainer}>
                <TouchableOpacity
                  style={styles.cartItemIcon}
                  onPress={() =>
                    decrementCartItemQuantityHandler(id, item.size)
                  }>
                  <CustomIcon
                    name="minus"
                    color={COLORS.primaryWhiteHex}
                    size={adaptive(FONTSIZE.size_10)}
                  />
                </TouchableOpacity>
                <View style={styles.cartItemQuantityContainer}>
                  <Text style={styles.cartItemQuantityText}>
                    {item.quantity}
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.cartItemIcon}
                  onPress={() =>
                    incrementCartItemQuantityHandler(id, item.size)
                  }>
                  <CustomIcon
                    name="add"
                    color={COLORS.primaryWhiteHex}
                    size={adaptive(FONTSIZE.size_10)}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </LinearGradient>
      ) : (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
          style={styles.cartItemSingleLinearGradient}>
          <View>
            <Image
              source={imagelink_square}
              style={styles.cartItemSingleImage}
            />
          </View>
          <View style={styles.cartItemSingleInfoContainer}>
            <View>
              <Text style={styles.cartItemTitle}>{name}</Text>
              <Text style={styles.cartItemSubtitle}>{special_ingredient}</Text>
            </View>
            <View style={styles.cartItemSingleSizeValueContainer}>
              <View style={styles.sizeBox}>
                <Text
                  style={[
                    styles.sizeText,
                    {
                      fontSize:
                        type == 'Bean'
                          ? adaptive(FONTSIZE.size_12)
                          : adaptive(FONTSIZE.size_16),
                    },
                  ]}>
                  {prices[0].size}
                </Text>
              </View>
              <Text style={styles.sizeCurrency}>
                {prices[0].currency}
                <Text style={styles.sizePrise}> {prices[0].price}</Text>
              </Text>
            </View>
            <View style={styles.cartItemSingleQuantityContainer}>
              <TouchableOpacity
                style={styles.cartItemIcon}
                onPress={() =>
                  decrementCartItemQuantityHandler(id, prices[0].size)
                }>
                <CustomIcon
                  name="minus"
                  color={COLORS.primaryWhiteHex}
                  size={adaptive(FONTSIZE.size_10)}
                />
              </TouchableOpacity>
              <View style={styles.cartItemQuantityContainer}>
                <Text style={styles.cartItemQuantityText}>
                  {prices[0].quantity}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.cartItemIcon}
                onPress={() =>
                  incrementCartItemQuantityHandler(id, prices[0].size)
                }>
                <CustomIcon
                  name="add"
                  color={COLORS.primaryWhiteHex}
                  size={adaptive(FONTSIZE.size_10)}
                />
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      )}
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  cartItemLinearGradient: {
    flex: 1,
    gap: adaptive(SPACING.space_12),
    padding: adaptive(SPACING.space_12),
    borderRadius: adaptive(BORDERRADIUS.radius_25),
  },

  cartItemRow: {
    flex: 1,
    flexDirection: 'row',
    gap: adaptive(SPACING.space_12),
  },

  cartItemImage: {
    height: adaptive(130),
    width: adaptive(130),
    borderRadius: adaptive(BORDERRADIUS.radius_20),
  },

  cartItemInfo: {
    flex: 1,
    paddingVertical: adaptive(SPACING.space_4),
    justifyContent: 'space-between',
  },

  cartItemTitle: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: adaptive(FONTSIZE.size_18),
    color: COLORS.primaryWhiteHex,
  },

  cartItemSubtitle: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: adaptive(FONTSIZE.size_12),
    color: COLORS.secondaryLightGreyHex,
  },

  cartItemRoastedContainer: {
    height: adaptive(50),
    width: adaptive(50 * 2 + SPACING.space_20),
    borderRadius: adaptive(BORDERRADIUS.radius_15),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primaryDarkGreyHex,
  },

  cartItemRoastedText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: adaptive(FONTSIZE.size_10),
    color: COLORS.primaryWhiteHex,
  },

  cartItemSizeRowContainer: {
    flex: 1,
    alignItems: 'center',
    gap: adaptive(SPACING.space_20),
    flexDirection: 'row',
    justifyContent: 'center',
  },

  cartItemSizeValueContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  sizeBox: {
    backgroundColor: COLORS.primaryBlackHex,
    height: adaptive(40),
    width: adaptive(100),
    borderRadius: adaptive(BORDERRADIUS.radius_10),
    justifyContent: 'center',
    alignItems: 'center',
  },

  sizeText: {
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.primaryLightGreyHex,
  },

  sizeCurrency: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: adaptive(FONTSIZE.size_18),
    color: COLORS.primaryOrangeHex,
  },

  sizePrise: {
    color: COLORS.primaryWhiteHex,
  },

  cartItemIcon: {
    backgroundColor: COLORS.primaryOrangeHex,
    padding: adaptive(SPACING.space_12),
    borderRadius: adaptive(BORDERRADIUS.radius_10),
  },

  cartItemQuantityContainer: {
    backgroundColor: COLORS.primaryBlackHex,
    width: adaptive(80),
    borderRadius: adaptive(BORDERRADIUS.radius_10),
    borderWidth: adaptive(2),
    borderColor: COLORS.primaryOrangeHex,
    alignItems: 'center',
    paddingVertical: adaptive(SPACING.space_4),
  },

  cartItemQuantityText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: adaptive(FONTSIZE.size_16),
    color: COLORS.primaryWhiteHex,
  },

  cartItemSingleLinearGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: adaptive(SPACING.space_12),
    gap: adaptive(SPACING.space_12),
    borderRadius: adaptive(BORDERRADIUS.radius_25),
  },

  cartItemSingleImage: {
    height: adaptive(150),
    width: adaptive(150),
    borderRadius: adaptive(BORDERRADIUS.radius_20),
  },

  cartItemSingleInfoContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'space-around',
  },

  cartItemSingleSizeValueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  cartItemSingleQuantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

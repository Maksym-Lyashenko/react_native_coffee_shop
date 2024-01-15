import React from 'react';
import {
  Dimensions,
  ImageBackground,
  ImageProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import CustomIcon from '../../utils/CustomIcon';

import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../theme/theme';
import {adaptive} from '../../utils/adaptive';
import BGIcon from './BGIcon';
import {useNavigation} from '@react-navigation/native';
import {TCartItem} from '../../types/types';

const CARD_WIDTH = Dimensions.get('window').width * 0.32;

interface ProductFlatlistCardI {
  id: string;
  name: string;
  roasted: string;
  imagelink_square: ImageProps;
  special_ingredient: string;
  price: {
    size: string;
    price: string;
    currency: string;
  };
  average_rating: number;
  type: string;
  index: number;
  buttonPressHandler: ({
    id,
    index,
    name,
    roasted,
    imagelink_square,
    special_ingredient,
    type,
    prices,
  }: TCartItem) => void;
}

type Nav = {
  navigate: (value: string, {}) => void;
};

const ProductFlatlistCard: React.FC<ProductFlatlistCardI> = ({
  id,
  name,
  roasted,
  imagelink_square,
  special_ingredient,
  price,
  average_rating,
  type,
  index,
  buttonPressHandler,
}) => {
  const navigation = useNavigation<Nav>();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('DetailsScreen', {
          index: index,
          id: id,
          type: type,
        });
      }}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.linearGradient}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
        <ImageBackground
          source={imagelink_square}
          style={styles.imageBG}
          resizeMode="contain">
          <View style={styles.reitingContainer}>
            <CustomIcon
              name="star"
              color={COLORS.primaryOrangeHex}
              size={adaptive(16)}
            />
            <Text style={styles.reitingText}>{average_rating}</Text>
          </View>
        </ImageBackground>
        <Text style={styles.cardTitle}>{name}</Text>
        <Text style={styles.cardSubTitle}>{special_ingredient}</Text>
        <View style={styles.footerRow}>
          <Text style={styles.priceCurrency}>
            {price.currency}
            <Text style={styles.price}> {price.price}</Text>
          </Text>
          <TouchableOpacity
            onPress={() => {
              buttonPressHandler({
                id,
                index,
                type,
                roasted,
                imagelink_square,
                name,
                special_ingredient,
                prices: [{...price, quantity: 1}],
              });
            }}>
            <BGIcon
              color={COLORS.primaryWhiteHex}
              name="add"
              BGColor={COLORS.primaryOrangeHex}
              size={adaptive(FONTSIZE.size_10)}
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ProductFlatlistCard;

const styles = StyleSheet.create({
  linearGradient: {
    padding: adaptive(SPACING.space_15),
    borderRadius: adaptive(BORDERRADIUS.radius_25),
  },

  imageBG: {
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    borderRadius: adaptive(BORDERRADIUS.radius_20),
    marginBottom: adaptive(SPACING.space_15),
    overflow: 'hidden',
  },

  reitingContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.primaryBlackRGBA,
    alignItems: 'center',
    justifyContent: 'center',
    gap: adaptive(SPACING.space_10),
    paddingHorizontal: adaptive(SPACING.space_15),
    position: 'absolute',
    borderBottomLeftRadius: adaptive(BORDERRADIUS.radius_20),
    borderTopRightRadius: adaptive(BORDERRADIUS.radius_20),
    top: 0,
    right: 0,
  },

  reitingText: {
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.primaryWhiteHex,
    fontSize: adaptive(FONTSIZE.size_14),
    lineHeight: adaptive(22),
  },

  cardTitle: {
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.primaryWhiteHex,
    fontSize: adaptive(FONTSIZE.size_16),
  },

  cardSubTitle: {
    fontFamily: FONTFAMILY.poppins_light,
    color: COLORS.primaryWhiteHex,
    fontSize: adaptive(FONTSIZE.size_10),
  },

  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SPACING.space_15,
  },

  priceCurrency: {
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryOrangeHex,
    fontSize: adaptive(FONTSIZE.size_18),
  },

  price: {
    color: COLORS.primaryWhiteHex,
  },
});

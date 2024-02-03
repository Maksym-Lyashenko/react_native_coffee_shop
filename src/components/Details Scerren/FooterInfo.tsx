import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {adaptive} from '../../utils/adaptive';

import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../theme/theme';
import {TDataList} from '../../types/types';

interface IFooterInfo {
  itemOfIndex: TDataList;
  price: {
    size: string;
    price: string;
    currency: string;
  };
  setPrice: React.Dispatch<
    React.SetStateAction<{
      size: string;
      price: string;
      currency: string;
    }>
  >;
}

const FooterInfo: React.FC<IFooterInfo> = ({itemOfIndex, price, setPrice}) => {
  const [fullDesc, setFullDesc] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Description</Text>
      <TouchableWithoutFeedback onPress={() => setFullDesc(!fullDesc)}>
        <Text style={styles.descText} numberOfLines={fullDesc ? 0 : 3}>
          {itemOfIndex.description}
        </Text>
      </TouchableWithoutFeedback>
      <Text style={styles.title}>Size</Text>
      <View style={styles.sizeOuterContainer}>
        {itemOfIndex.prices.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setPrice(item)}
            style={[
              styles.sizeBox,
              {
                borderColor:
                  item.size == price.size
                    ? COLORS.primaryOrangeHex
                    : COLORS.primaryDarkGreyHex,
              },
            ]}>
            <Text
              style={[
                styles.sizeTxt,
                {
                  fontSize:
                    itemOfIndex.type == 'Bean'
                      ? adaptive(FONTSIZE.size_14)
                      : adaptive(FONTSIZE.size_16),
                  color:
                    item.size == price.size
                      ? COLORS.primaryOrangeHex
                      : COLORS.secondaryLightGreyHex,
                },
              ]}>
              {item.size}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default FooterInfo;

const styles = StyleSheet.create({
  container: {
    padding: adaptive(SPACING.space_20),
  },

  title: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: adaptive(FONTSIZE.size_16),
    color: COLORS.primaryWhiteHex,
    marginBottom: adaptive(SPACING.space_10),
  },

  descText: {
    letterSpacing: adaptive(0.5),
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: adaptive(FONTSIZE.size_14),
    color: COLORS.primaryWhiteHex,
    marginBottom: adaptive(SPACING.space_30),
  },

  sizeOuterContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: adaptive(SPACING.space_20),
  },

  sizeBox: {
    flex: 1,
    backgroundColor: COLORS.primaryGreyHex,
    alignItems: 'center',
    justifyContent: 'center',
    height: adaptive(SPACING.space_24 * 2),
    borderRadius: adaptive(BORDERRADIUS.radius_10),
    borderWidth: adaptive(2),
  },

  sizeTxt: {
    fontFamily: FONTFAMILY.poppins_medium,
  },
});

import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {ICartItemWithItemPrice, TCartItem} from '../../types/types';

import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../../theme/theme';
import {adaptive} from '../../utils/adaptive';
import OrderItemCard from './OrderItemCard';

interface IOrderHistoryCard {
  CartList: ICartItemWithItemPrice[];
  CartListPrice: string;
  OrderDate: string;
  navigationHandler: ({
    index,
    id,
    type,
  }: {
    index: number;
    id: string;
    type: string;
  }) => void;
}

const OrderHistoryCard: React.FC<IOrderHistoryCard> = ({
  CartList,
  CartListPrice,
  OrderDate,
  navigationHandler,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardHeader}>
        <View>
          <Text style={styles.headreTitle}>Order Time</Text>
          <Text style={styles.headerSubtitle}>{OrderDate}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.headreTitle}>Total Amount</Text>
          <Text
            style={[styles.headerSubtitle, {color: COLORS.primaryOrangeHex}]}>
            $ {CartListPrice}
          </Text>
        </View>
      </View>
      <View style={styles.listContainer}>
        {CartList.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigationHandler({
                index: item.index,
                id: item.id,
                type: item.type,
              })
            }>
            <OrderItemCard
              type={item.type}
              name={item.name}
              imagelink_square={item.imagelink_square}
              special_ingredient={item.special_ingredient}
              prices={item.prices}
              ItemPrice={item.ItemPrice}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default OrderHistoryCard;

const styles = StyleSheet.create({
  container: {
    gap: adaptive(SPACING.space_10),
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: adaptive(SPACING.space_20),
    alignItems: 'center',
  },

  headreTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: adaptive(FONTSIZE.size_18),
    color: COLORS.primaryWhiteHex,
  },

  headerSubtitle: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: adaptive(FONTSIZE.size_16),
    color: COLORS.primaryWhiteHex,
  },

  priceContainer: {
    alignItems: 'flex-end',
  },

  listContainer: {
    gap: adaptive(SPACING.space_20),
  },
});

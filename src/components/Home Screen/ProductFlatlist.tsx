import React from 'react';
import {FlatList, ImageProps, StyleSheet, Text, View} from 'react-native';

import ProductFlatlistCard from './ProductFlatlistCard';

import {TCartItem, TDataList} from '../../types/types';
import {SPACING} from '../../theme/theme';
import {adaptive} from '../../utils/adaptive';
import EmptyFlatListComponent from './EmptyFlatListComponent';

interface ProductFlatlistI {
  data: TDataList[];
  ListRef?: React.RefObject<FlatList<any>>;
  coffeeCardAddToCart: ({
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

const ProductFlatlist: React.FC<ProductFlatlistI> = ({
  data,
  ListRef,
  coffeeCardAddToCart,
}) => {
  return (
    <FlatList
      ref={ListRef}
      horizontal
      ListEmptyComponent={<EmptyFlatListComponent />}
      showsHorizontalScrollIndicator={false}
      data={data}
      contentContainerStyle={styles.container}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <ProductFlatlistCard
          name={item.name}
          id={item.id}
          roasted={item.roasted}
          imagelink_square={item.imagelink_square}
          special_ingredient={item.special_ingredient}
          price={item.prices[2]}
          average_rating={item.average_rating}
          type={item.type}
          index={item.index}
          buttonPressHandler={coffeeCardAddToCart}
        />
      )}
    />
  );
};

export default ProductFlatlist;

const styles = StyleSheet.create({
  container: {
    gap: adaptive(SPACING.space_20),
    paddingVertical: adaptive(SPACING.space_20),
    paddingHorizontal: adaptive(SPACING.space_30),
  },
});

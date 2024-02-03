import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../theme/theme';

import {adaptive} from '../../utils/adaptive';
import {TDataList} from '../../types/types';
import {useStore} from '../../store/store';

interface CategoryScrollerI {
  categoryIndex: {
    index: number;
  };
  data: string;
  index: number;
  categories: string[];
  setCategoryIndex: (data: {index: number; category: string}) => void;
  setSortedCoffee: React.Dispatch<React.SetStateAction<TDataList[]>>;
  getCoffeeList: (category: string, data: TDataList[]) => TDataList[];
  ListRef: React.RefObject<FlatList<any>>;
}

const CategoryScrollerCard: React.FC<CategoryScrollerI> = ({
  categoryIndex,
  data,
  index,
  setCategoryIndex,
  categories,
  setSortedCoffee,
  getCoffeeList,
  ListRef,
}) => {
  const CoffeeList = useStore(state => state.CoffeeList);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.categoryItem}
        onPress={() => {
          ListRef?.current?.scrollToOffset({
            animated: true,
            offset: 0,
          });
          setCategoryIndex({index: index, category: categories[index]});
          setSortedCoffee([...getCoffeeList(categories[index], CoffeeList)]);
        }}>
        <Text
          style={[
            styles.categoryText,
            categoryIndex.index == index
              ? {color: COLORS.primaryOrangeHex}
              : {},
          ]}>
          {data}
        </Text>
        {categoryIndex.index == index && <View style={styles.activeCategory} />}
      </TouchableOpacity>
    </View>
  );
};

export default CategoryScrollerCard;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: adaptive(SPACING.space_15),
  },

  categoryItem: {
    alignItems: 'center',
  },

  categoryText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: adaptive(FONTSIZE.size_16),
    color: COLORS.primaryLightGreyHex,
    marginBottom: SPACING.space_4,
  },

  activeCategory: {
    height: adaptive(SPACING.space_10),
    width: adaptive(SPACING.space_10),
    borderRadius: adaptive(BORDERRADIUS.radius_10),
    backgroundColor: COLORS.primaryOrangeHex,
  },
});

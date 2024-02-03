import React from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import CategoryScrollerCard from './CategoryScrollerCard';
import {SPACING} from '../../theme/theme';
import {adaptive} from '../../utils/adaptive';

import {TDataList} from '../../types/types';

interface CategoryScrollerI {
  categories: string[];
  categoryIndex: {
    index: number;
  };
  setCategoryIndex: (data: {index: number; category: string}) => void;
  setSortedCoffee: React.Dispatch<React.SetStateAction<TDataList[]>>;
  getCoffeeList: (category: string, data: TDataList[]) => TDataList[];
  ListRef: React.RefObject<FlatList<any>>;
}

const CategoryScroller: React.FC<CategoryScrollerI> = ({
  categories,
  categoryIndex,
  setCategoryIndex,
  setSortedCoffee,
  getCoffeeList,
  ListRef,
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollView}>
      {categories.map((data, index) => (
        <CategoryScrollerCard
          ListRef={ListRef}
          key={index}
          categoryIndex={categoryIndex}
          setCategoryIndex={setCategoryIndex}
          setSortedCoffee={setSortedCoffee}
          categories={categories}
          data={data}
          index={index}
          getCoffeeList={getCoffeeList}
        />
      ))}
    </ScrollView>
  );
};

export default CategoryScroller;

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: adaptive(SPACING.space_20),
    marginBottom: adaptive(SPACING.space_20),
  },
});

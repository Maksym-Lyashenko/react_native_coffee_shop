import React, { useRef, useState } from 'react';
import { FlatList, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

import HeaderBar from '../components/HomeScreen/HeaderBar';
import SearchInput from '../components/HomeScreen/SearchInput';
import CategoryScroller from '../components/HomeScreen/CategoryScroller';
import ProductFlatlist from '../components/HomeScreen/ProductFlatlist';

import { useStore } from '../store/store';
import { adaptive } from '../utils/adaptive';
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';

import { CoffeeListT } from '../types/types';

const getCategoriesFromData = (data: CoffeeListT) => {
  let temp: { [key: string]: number } = {};
  for(let i = 0; i < data.length; i++) {
    if (temp[data[i].name] == null) {
      temp[data[i].name] = 1;
    } else {
      temp[data[i].name]++;
    }
  };
  let categories = Object.keys(temp);
  categories.unshift('All');
  return categories;
};

const getCoffeeList = (category: string, data: CoffeeListT) => {
  if (category == 'All') {
    return data;
  } else {
    let coffeeList = data.filter((item) => item.name == category);
    return coffeeList;
  }
};

const HomeScreen = () => {
  const CoffeeList = useStore((state) => state.CoffeeList);
  const BeanList = useStore((state) => state.BeanList);
  
  const [categories, setCategories] = useState(getCategoriesFromData(CoffeeList));
  const [searchText, setSearchText] = useState('');
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0, 
    category: categories[0],
  });
  const [sortedCoffee, setSortedCoffee] = useState(getCoffeeList(categoryIndex.category, CoffeeList));

  const ListRef = useRef<FlatList>(null);
  
  const tabBarHeight = useBottomTabBarHeight();

  const searchCoffee = (search: string) => {
    if (search != '') {
      ListRef?.current?.scrollToOffset({
        animated: true,
        offset: 0,
      });
      setCategoryIndex({ index: 0, category: categories[0] });
      setSortedCoffee([...CoffeeList.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))]);
    }
  };

  const resetSearchCoffee = () => {
    ListRef?.current?.scrollToOffset({
      animated: true,
      offset: 0,
    });
    setCategoryIndex({ index: 0, category: categories[0] });
    setSortedCoffee([...CoffeeList]);
    setSearchText('');
  };
  
  return (
    <View style={[styles.container, { paddingBottom: tabBarHeight }]}>
      <StatusBar hidden />
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}
      >
        <HeaderBar />
        <Text style={styles.title}>
          Find the best{`\n`}coffee for you
        </Text>
        <SearchInput
          searchText={searchText} 
          setSearchText={setSearchText}
          searchCoffee={searchCoffee}
          resetSearchCoffee={resetSearchCoffee}
        />
        <CategoryScroller 
          ListRef={ListRef}
          categories={categories} 
          categoryIndex={categoryIndex}
          setCategoryIndex={setCategoryIndex}
          setSortedCoffee={setSortedCoffee}
          getCoffeeList={getCoffeeList}
         />
         <ProductFlatlist
          ListRef={ListRef}
          data={sortedCoffee}
         />
         <Text style={styles.cofeBeansTitle}>Coffee Beans</Text>
         <ProductFlatlist
          data={BeanList}
         />
      </ScrollView>
    </View>
  )
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },

  scrollViewFlex: {
    flexGrow: 1,
  },

  title: {
    fontSize: adaptive(FONTSIZE.size_28),
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
    paddingLeft: adaptive(SPACING.space_30),
  },

  cofeBeansTitle: {
    fontSize: adaptive(FONTSIZE.size_18),
    marginLeft: adaptive(SPACING.space_30),
    marginTop: adaptive(SPACING.space_20),
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.secondaryLightGreyHex,
  },
});
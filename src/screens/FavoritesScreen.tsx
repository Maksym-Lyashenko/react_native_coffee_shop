import React from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

import {useStore} from '../store/store';
import HeaderBar from '../components/HeaderBar';
import EmptyListAnimation from '../components/Details Scerren/EmptyListAnimation';
import {COLORS, SPACING} from '../theme/theme';
import {adaptive} from '../utils/adaptive';
import FavoritesItemCard from '../components/Favorites Screen/FavoritesItemCard';

type Nav = {
  navigate: (value: string, {}) => void;
};

interface IFavoritesScreen {
  navigation: Nav;
}

const FavoritesScreen: React.FC<IFavoritesScreen> = ({navigation}) => {
  const FavoritesList = useStore(state => state.FavoritesList);
  const tabBarHeight = useBottomTabBarHeight();

  const addToFavoriteList = useStore(state => state.addToFavoriteList);
  const deleteFromFavoriteList = useStore(
    state => state.deleteFromFavoriteList,
  );

  const toggleFavourite = (favourite: boolean, type: string, id: string) => {
    favourite ? deleteFromFavoriteList(type, id) : addToFavoriteList(type, id);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}>
        <View style={[styles.innerView, {marginBottom: tabBarHeight}]}>
          <View style={styles.itemContainer}>
            <HeaderBar title="Favorites" />
            {FavoritesList.length == 0 ? (
              <EmptyListAnimation title="No Favorites" />
            ) : (
              <View style={styles.listItemContainer}>
                {FavoritesList.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      navigation.navigate('DetailsScreen', {
                        index: item.index,
                        id: item.id,
                        type: item.type,
                      });
                    }}>
                    <FavoritesItemCard
                      id={item.id}
                      name={item.name}
                      type={item.type}
                      imagelink_portrait={item.imagelink_portrait}
                      special_ingredient={item.special_ingredient}
                      ingredients={item.ingredients}
                      average_rating={item.average_rating}
                      ratings_count={item.ratings_count}
                      roasted={item.roasted}
                      favourite={item.favourite}
                      toggleFavourite={toggleFavourite}
                      description={item.description}
                      index={item.index}
                    />
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },

  scrollView: {
    flexGrow: 1,
  },

  innerView: {
    flex: 1,
    justifyContent: 'space-between',
  },

  itemContainer: {
    flex: 1,
  },

  listItemContainer: {
    paddingHorizontal: adaptive(SPACING.space_20),
    gap: adaptive(SPACING.space_20),
  },
});

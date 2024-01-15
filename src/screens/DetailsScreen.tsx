import React, {useState} from 'react';
import {ImageProps, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useStore} from '../store/store';
import {COLORS} from '../theme/theme';
import ImageBGInfo from '../components/ImageBGInfo';
import FooterInfo from '../components/Details Scerren/FooterInfo';
import PaymentFooter from '../components/PaymentFooter';
import {TCartItem} from '../types/types';

type Nav = {
  goBack: () => void;
  navigate: (value: string) => void;
};

interface IDetailsScreen {
  navigation: Nav;
  goBack: () => void;
  route: {
    key: string;
    name: string;
    params: {
      id: string;
      index: number;
      type: string;
    };
    path: undefined;
  };
}

interface ICartItem {
  id: string;
  index: number;
  name: string;
  roasted: string;
  imagelink_square: ImageProps;
  special_ingredient: string;
  type: string;
  price: {
    size: string;
    price: string;
    currency: string;
  };
}

const DetailsScreen: React.FC<IDetailsScreen> = ({navigation, route}) => {
  const itemOfIndex = useStore(state =>
    route.params.type == 'Coffee' ? state.CoffeeList : state.BeanList,
  )[route.params.index];

  const [price, setPrice] = useState(itemOfIndex.prices[0]);

  const addToFavoriteList = useStore(state => state.addToFavoriteList);
  const deleteFromFavoriteList = useStore(
    state => state.deleteFromFavoriteList,
  );

  const addToCart = useStore(state => state.addToCart);
  const calculateCartPrice = useStore(state => state.calculateCartPrice);

  const toggleFavourite = (favourite: boolean, type: string, id: string) => {
    favourite ? deleteFromFavoriteList(type, id) : addToFavoriteList(type, id);
  };

  const addToCartHandler = ({
    id,
    index,
    name,
    roasted,
    imagelink_square,
    special_ingredient,
    type,
    price,
  }: ICartItem) => {
    addToCart({
      id,
      index,
      name,
      roasted,
      imagelink_square,
      special_ingredient,
      type,
      prices: [{...price, quantity: 1}],
      ItemPrice: '',
    });
    calculateCartPrice();
    navigation.navigate('CartScreen');
  };

  const backHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewFlex}>
        <ImageBGInfo
          enableBackHandler={true}
          imagelink_portrait={itemOfIndex.imagelink_portrait}
          type={itemOfIndex.type}
          id={itemOfIndex.id}
          favourite={itemOfIndex.favourite}
          name={itemOfIndex.name}
          special_ingredient={itemOfIndex.special_ingredient}
          ingedients={itemOfIndex.ingredients}
          average_raiting={itemOfIndex.average_rating}
          raitings_count={itemOfIndex.ratings_count}
          roasted={itemOfIndex.roasted}
          backHandler={backHandler}
          toggleFavourite={toggleFavourite}
        />
        <FooterInfo
          itemOfIndex={itemOfIndex}
          price={price}
          setPrice={setPrice}
        />
        <PaymentFooter
          price={price}
          buttonTitle="Add to Cart"
          buttonHandler={() => {
            addToCartHandler({
              id: itemOfIndex.id,
              index: itemOfIndex.index,
              name: itemOfIndex.name,
              roasted: itemOfIndex.roasted,
              imagelink_square: itemOfIndex.imagelink_square,
              special_ingredient: itemOfIndex.special_ingredient,
              type: itemOfIndex.type,
              price: price,
            });
          }}
        />
      </ScrollView>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },

  scrollViewFlex: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
});

import React from 'react';
import {
  ImageProps,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

import HeaderBar from '../components/HeaderBar';
import EmptyListAnimation from '../components/Details Scerren/EmptyListAnimation';
import CartItem from '../components/Cart Screen/CartItem';
import PaymentFooter from '../components/PaymentFooter';

import {useStore} from '../store/store';
import {COLORS, SPACING} from '../theme/theme';
import {adaptive} from '../utils/adaptive';

type Nav = {
  navigate: (value: string, {}) => void;
};

interface ICartScreen {
  navigation: Nav;
}

const CartScreen: React.FC<ICartScreen> = ({navigation}) => {
  const CartList = useStore(state => state.CartList);
  console.log('=>', CartList);

  const CartPrice = useStore(state => state.CartPrice);
  const incrementCartItemQuantity = useStore(
    state => state.incrementCartItemQuantity,
  );
  const decrementCartItemQuantity = useStore(
    state => state.decrementCartItemQuantity,
  );
  const calculateCartPrice = useStore(state => state.calculateCartPrice);

  const tabBarHeight = useBottomTabBarHeight();

  const buttonHandler = () => {
    navigation.navigate('PaymentScreen', {});
  };

  const incrementCartItemQuantityHandler = (id: string, size: string) => {
    incrementCartItemQuantity(id, size);
    calculateCartPrice();
  };

  const decrementCartItemQuantityHandler = (id: string, size: string) => {
    decrementCartItemQuantity(id, size);
    calculateCartPrice();
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}>
        <View style={[styles.innerView, {marginBottom: tabBarHeight}]}>
          <View style={styles.itemContainer}>
            <HeaderBar title="Cart" />
            {CartList.length == 0 ? (
              <EmptyListAnimation title="Cart is Empty" />
            ) : (
              <View style={styles.listItemContainer}>
                {CartList.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      navigation.navigate('DetailsScreen', {
                        index: item.index,
                        id: item.id,
                        type: item.type,
                      });
                    }}>
                    <CartItem
                      id={item.id}
                      name={item.name}
                      imagelink_square={item.imagelink_square}
                      special_ingredient={item.special_ingredient}
                      roasted={item.roasted}
                      prices={item.prices}
                      type={item.type}
                      incrementCartItemQuantityHandler={
                        incrementCartItemQuantityHandler
                      }
                      decrementCartItemQuantityHandler={
                        decrementCartItemQuantityHandler
                      }
                    />
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
          {CartList.length != 0 && (
            <PaymentFooter
              buttonHandler={buttonHandler}
              buttonTitle="Pay"
              price={{price: CartPrice, currency: '&'}}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default CartScreen;

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

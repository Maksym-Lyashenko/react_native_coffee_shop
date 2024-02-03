import React from 'react';
import {View} from 'react-native';

import MultiplyCartItem from './MultiplyCartItem';
import SingleCartItem from './SingleCartItem';
import {TCartItem} from '../../types/types';

interface ICartItem extends Omit<TCartItem, 'prices' | 'ItemPrice' | 'index'> {
  prices: {
    size: string;
    price: string;
    currency: string;
    quantity: number;
  }[];
  incrementCartItemQuantityHandler: (id: string, size: string) => void;
  decrementCartItemQuantityHandler: (id: string, size: string) => void;
}

const CartItems: React.FC<ICartItem> = ({
  id,
  name,
  imagelink_square,
  special_ingredient,
  roasted,
  prices,
  type,
  decrementCartItemQuantityHandler,
  incrementCartItemQuantityHandler,
}) => {
  return (
    <View>
      {prices.length != 1 ? (
        <MultiplyCartItem
          imagelink_square={imagelink_square}
          name={name}
          special_ingredient={special_ingredient}
          roasted={roasted}
          prices={prices}
          type={type}
          id={id}
          decrementCartItemQuantityHandler={decrementCartItemQuantityHandler}
          incrementCartItemQuantityHandler={incrementCartItemQuantityHandler}
        />
      ) : (
        <SingleCartItem
          imagelink_square={imagelink_square}
          name={name}
          special_ingredient={special_ingredient}
          prices={prices}
          type={type}
          id={id}
          decrementCartItemQuantityHandler={decrementCartItemQuantityHandler}
          incrementCartItemQuantityHandler={incrementCartItemQuantityHandler}
        />
      )}
    </View>
  );
};

export default CartItems;

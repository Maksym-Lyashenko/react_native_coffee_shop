import { ImageProps } from "react-native";

export type TDataList  = {
    id: string,
    name: string,
    description: string,
    roasted: string,
    imagelink_square: ImageProps,
    imagelink_portrait: ImageProps,
    ingredients: string,
    special_ingredient: string,
    prices: {
        size: string,
        price: string,
        currency: string,
    }[];
    average_rating: number,
    ratings_count: string,
    favourite: boolean,
    type: string,
    index: number,
};

export type TCartItem = {
    id: string, 
    imagelink_square: ImageProps, 
    index: number, 
    name: string, 
    prices: {
        currency: string,
        price: string,
        quantity: number,
        size: string,
    }[], 
    roasted: string, 
    special_ingredient: string, 
    type: string,
};

export type TFavoritesItem = {
    id: string,
    name: string,
    description: string,
    roasted: string,
    imagelink_portrait: ImageProps,
    ingredients: string,
    special_ingredient: string,
    average_rating: number,
    ratings_count: string,
    favourite: boolean,
    type: string,
    index: number
};

export interface ICartItemWithItemPrice extends TCartItem {
    ItemPrice: string;
  }

export type TOrderHistoryList = {
    CartList: ICartItemWithItemPrice[], 
    CartListPrice: string, 
    OrderDate: string,
};
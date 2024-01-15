import { ImageProps } from "react-native";

export type CoffeeListT  = {
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
}[];

export type BeanListT  = {
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
    }[],
    average_rating: number,
    ratings_count: string,
    favourite: boolean,
    type: string,
    index: number,
}[];

export type TCartItem = {
    ItemPrice: string, 
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
}
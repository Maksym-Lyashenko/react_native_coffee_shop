import { create } from "zustand";
import { produce } from "immer";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

import CoffeeData from "../data/CoffeeData";
import BeansData from "../data/BeansData";
import { BeanListT, CoffeeListT } from "../types/types";

interface IStore {
    CoffeeList: CoffeeListT,
    BeanList: BeanListT,
    CartPrice: number,
    FavoritesList: [],
    CartList: [],
    OrderHistoryList: [],
};


export const useStore = create<IStore>()(
    persist(
        (set, get) => ({
            CoffeeList: CoffeeData,
            BeanList: BeansData,
            CartPrice: 0,
            FavoritesList: [],
            CartList: [],
            OrderHistoryList: [],
        }),
         { 
            name: 'coffee-app', 
            storage: createJSONStorage(() => AsyncStorage), 
        }
    ),
);
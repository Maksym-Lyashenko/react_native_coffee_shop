import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BlurView } from '@react-native-community/blur';

import { COLORS } from '../theme/theme';
import CustomIcon from '../components/CustomIcon';

import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import { adaptive } from '../utils/adaptive';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBarStyle,
            tabBarBackground: () => (
                <BlurView overlayColor='' blurAmount={15} style={styles.blurViewStyle} />
            )
        }}
    >
        <Tab.Screen
            name='HomeScreen'
            component={ HomeScreen }
            options={{
                tabBarIcon: ({ focused }) => (
                    <CustomIcon 
                        name='home'
                        size={25}
                        color={ focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex } 
                    />
                )
            }}
        />
        <Tab.Screen
            name='CartScreen'
            component={ CartScreen }
            options={{
                tabBarIcon: ({ focused }) => (
                    <CustomIcon 
                        name='cart'
                        size={25}
                        color={ focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex } 
                    />
                )
            }}
        />
        <Tab.Screen
            name='FavoritesScreen'
            component={ FavoritesScreen }
            options={{
                tabBarIcon: ({ focused }) => (
                    <CustomIcon 
                        name='like'
                        size={25}
                        color={ focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex } 
                    />
                )
            }}
        />
        <Tab.Screen
            name='OrderHistoryScreen'
            component={ OrderHistoryScreen }
            options={{
                tabBarIcon: ({ focused }) => (
                    <CustomIcon 
                        name='bell'
                        size={25}
                        color={ focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex } 
                    />
                )
            }}
        />
    </Tab.Navigator>
  )
};

export default TabNavigator;

const styles = StyleSheet.create({
    tabBarStyle: {
        height: adaptive(80),
        position: 'absolute',
        backgroundColor: COLORS.primaryBlackRGBA,
        borderTopWidth: 0,
        elevation: 0,
        borderTopColor: 'transparent',
    },

    blurViewStyle: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
});
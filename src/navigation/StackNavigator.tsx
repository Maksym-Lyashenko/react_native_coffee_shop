import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetailsScreen from '../screens/DetailsScreen';
import PaymentScreen from '../screens/PaymentScreen';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen 
                name='Tab'
                component={ TabNavigator }
                options={{ animation: 'slide_from_bottom' }}
            />
            <Stack.Screen 
                name='DetailsScreen'
                component={ DetailsScreen }
                options={{ animation: 'slide_from_bottom' }}
            />
            <Stack.Screen 
                name='PaymentScreen'
                component={ PaymentScreen }
                options={{ animation: 'slide_from_bottom' }}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
};

export default StackNavigator;
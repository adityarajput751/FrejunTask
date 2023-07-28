import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import LoginScreen from '../screens/auth/LoginScreen'
import HomeScreen from '../screens/home/HomeScreen'
import BottomNavigation from './BottomNavigation'
import ProductScreen from '../screens/home/ProductScreen'

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Home' component={BottomNavigation} />
            <Stack.Screen name='Product' component={ProductScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation
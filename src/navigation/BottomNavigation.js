import {View, Text, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import AddPost from '../screens/home/AddPost';
import ProductScreen from '../screens/home/ProductScreen';
import ProfileScreen from '../screens/home/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tab.Screen
        name="DashBoard"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Text style={{color: focused ? 'blue' : 'black'}}>Home</Text>
          ),
        }}
      />
      <Tab.Screen
        name="AddPost"
        component={AddPost}
        options={{
          tabBarIcon: ({focused}) => (
            <Text style={{color: focused ? 'blue' : 'black'}}>Post</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Text style={{color: focused ? 'blue' : 'black'}}>Profile</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BadgerNewsScreen from '../screens/BadgerNewsScreen';
import BadgerNewsDetail from '../BadgerNewsDetail';

const Stack = createStackNavigator();

const BadgerNewsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="NewLists" component={BadgerNewsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Article" component={BadgerNewsDetail} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default BadgerNewsStack;

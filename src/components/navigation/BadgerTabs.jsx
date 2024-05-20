import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import BadgerPreferencesScreen from '../screens/BadgerPreferencesScreen';
import BadgerNewsStack from './BadgerNewStacks';

function BadgerTabs(props) {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen name="News" component={BadgerNewsStack} />
            <Tab.Screen name="Preferences"component={BadgerPreferencesScreen} />
        </Tab.Navigator>
    );
}

export default BadgerTabs;

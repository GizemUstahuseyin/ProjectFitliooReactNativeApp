import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../screens/Settings/Settings.screen';

const Stack = createStackNavigator();

const SettingsStack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Ayarlar" component={SettingsScreen} />
        </Stack.Navigator>
    )
};
export default SettingsStack;
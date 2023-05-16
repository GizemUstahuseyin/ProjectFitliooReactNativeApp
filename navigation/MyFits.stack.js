import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyFitsScreen from '../screens/MyFits/MyFits.screen';

const Stack = createStackNavigator();

const MyFitsStack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Fitlerim" component={MyFitsScreen} />
        </Stack.Navigator>
    )
};
export default MyFitsStack;
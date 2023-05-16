import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RecipesScreen from '../screens/Recipes/Recipes.screen';

const Stack = createStackNavigator();

const RecipesStack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Fit Tarifler" component={RecipesScreen} />
        </Stack.Navigator>
    )
};
export default RecipesStack;
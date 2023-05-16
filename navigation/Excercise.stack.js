import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ExerciseScreen from '../screens/Exercise/Exercise.screen';

const Stack = createStackNavigator();

const ExerciseStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShow: false }}>
            <Stack.Screen name="Egzersizler" component={ExerciseScreen} />
        </Stack.Navigator>
    )
};
export default ExerciseStack;
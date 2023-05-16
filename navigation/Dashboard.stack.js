import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DashboardScreen from "../screens/Dashboard/Dashboard.screen";

const Stack = createStackNavigator();

const DashboardStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Anasayfa" component={DashboardScreen} />
        </Stack.Navigator>
    );
};
export default DashboardStack;
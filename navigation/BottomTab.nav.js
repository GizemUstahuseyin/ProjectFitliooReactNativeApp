import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import DashboardScreen from "../screens/Dashboard/Dashboard.screen";
import MyFits from "../screens/MyFits/MyFits.screen";
import SettingsScreen from "../screens/Settings/Settings.screen";
import RecipesScreen from "../screens/Recipes/Recipes.screen"
import ExcerciseScreen from "../screens/Exercise/Exercise.screen"

import { Image } from "react-native";

const LogoTitle = () => {
    return (
        <Image
            style={{ width: 50, height: 50, marginBottom: 10 }}
            source={require("../screens/assets/Fitlioo.png")}
        />
    );
};
const Tab = createBottomTabNavigator();

const Tabbar = () => {
    return (
        <Tab.Navigator>

            <Tab.Screen
                name="Anasayfa"
                component={DashboardScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
                    headerTitleAlign: "center",
                    headerTitle: () => <LogoTitle />,
                }}
            />
            <Tab.Screen
                name="Fit Tarifler"
                component={RecipesScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="fruit-cherries" color={color} size={size} />
                    ),
                    headerTitleAlign: "center",
                    headerTitle: () => <LogoTitle />,
                }}
            />
            <Tab.Screen
                name="Fitlerim"
                component={MyFits}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="fire" color="red" size={30} />
                    ),
                    headerTitleAlign: "center",
                    headerTitle: () => <LogoTitle />,
                }}
            />
            <Tab.Screen
                name="Egzersizler"
                component={ExcerciseScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="dumbbell" color={color} size={size} />
                    ),
                    headerTitleAlign: "center",
                    headerTitle: () => <LogoTitle />,
                }}
            />

            <Tab.Screen
                name="Ayarlar"
                component={SettingsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="speedometer" color={color} size={size} />
                    ),
                    headerTitleAlign: "center",
                    headerTitle: () => <LogoTitle />,
                }}

            >
            </Tab.Screen>
        </Tab.Navigator>
    );
};

export default Tabbar;

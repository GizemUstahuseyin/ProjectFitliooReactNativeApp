import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthNav from "./Auth.nav";
import BottomTab from "./BottomTab.nav";
import ProfileSettingsScreen from "../screens/Profile/Profile.screen";
import ExerciseSettingsScreen from "../screens/Settings/Exercise.screen";
import GeneralSettingsScreen from "../screens/Settings/General.screen";
import RateUsScreen from "../screens/Settings/RateUs.screen";
import FeedbackScreen from "../screens/Settings/Feedback.screen";
import RecipesScreen from "../screens/Recipes/Recipes.screen";
import BreakfastScreen from "../screens/Recipes/Breakfast.screen";
import VegetableScreen from "../screens/Recipes/Vegetable.screen";
import MeatChickenScreen from "../screens/Recipes/MeatChicken.screen";
import DessertsScreen from "../screens/Recipes/Desserts.screen";
import SnackScreen from "../screens/Recipes/Snacks.screen";
import DrinkScreen from "../screens/Recipes/Drink.screen";
import AbdomenScreen from "../screens/Exercise/Abdomen.screen";
import ArmScreen from "../screens/Exercise/Arm.screen";
import LegScreen from "../screens/Exercise/Leg.screen";
import HipScreen from "../screens/Exercise/Hip.screen";
import ChestScreen from "../screens/Exercise/Chest.screen";
import ShoulderScreen from "../screens/Exercise/Shoulder.screen";

import { Image } from "react-native";

const Stack = createStackNavigator();

const LogoTitle = () => {
    return (
        <Image
            style={{ width: 50, height: 50 }}
            source={require("../screens/assets/Fitlioo.png")}
        />
    );
};

const MainNav = () => {
    const [isLoggedIn] = React.useState(true);
    return (
        <NavigationContainer>
            {isLoggedIn ? (
                <Stack.Navigator>
                    <Stack.Screen name="FITLIOO" component={BottomTab} options={{ headerTitle: () => <LogoTitle />, headerTitleAlign: "center" }} />
                    <Stack.Screen name="Profil Ayarlar�" component={ProfileSettingsScreen} />
                    <Stack.Screen name="Egzersiz Ayarlar�" component={ExerciseSettingsScreen} />
                    <Stack.Screen name="Genel Ayarlar" component={GeneralSettingsScreen} />
                    <Stack.Screen name="Bizi De�erlendirin" component={RateUsScreen} />
                    <Stack.Screen name="Geri Bildirim" component={FeedbackScreen} />
                    <Stack.Screen name="Recipes" component={RecipesScreen} />
                    <Stack.Screen name="Kahvalt�" component={BreakfastScreen} />
                    <Stack.Screen name="Sebze Yemekleri" component={VegetableScreen} />
                    <Stack.Screen name="Et ve Tavuk Yemekleri" component={MeatChickenScreen} />
                    <Stack.Screen name="Tatl�lar" component={DessertsScreen} />
                    <Stack.Screen name="At��t�rmal�klar" component={SnackScreen} />
                    <Stack.Screen name="��ecekler" component={DrinkScreen} />
                    <Stack.Screen name="Kar�n Egzersizleri" component={AbdomenScreen} />
                    <Stack.Screen name="Kol Egzersizleri" component={ArmScreen} />
                    <Stack.Screen name="Bacak Egzersizleri" component={LegScreen} />
                    <Stack.Screen name="Omuz ve S�rt Egzersizleri" component={ShoulderScreen} />
                    <Stack.Screen name="Kal�a Egzersizleri" component={HipScreen} />
                    <Stack.Screen name="G���s Egzersizleri" component={ChestScreen} />
                </Stack.Navigator>
            ) : (
                <AuthNav />
            )}
        </NavigationContainer>
    );
};

export default MainNav;
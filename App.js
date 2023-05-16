import React, { useState, useEffect, useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from './src/screens/Onboarding/Onboarding.screen';
import BottomTab from "./src/navigation/BottomTab.nav";
import ProfileSettingsScreen from "./src/screens/Profile/Profile.screen";
import ExerciseSettingsScreen from "./src/screens/Settings/Exercise.screen";
import GeneralSettingsScreen from "./src/screens/Settings/General.screen";
import RateUsScreen from "./src/screens/Settings/RateUs.screen";
import FeedbackScreen from "./src/screens/Settings/Feedback.screen";
import RecipesScreen from "./src/screens/Recipes/Recipes.screen";
import BreakfastScreen from "./src/screens/Recipes/Breakfast.screen";
import VegetableScreen from "./src/screens/Recipes/Vegetable.screen";
import MeatChickenScreen from "./src/screens/Recipes/MeatChicken.screen";
import DessertsScreen from "./src/screens/Recipes/Desserts.screen";
import SnackScreen from "./src/screens/Recipes/Snacks.screen";
import DrinkScreen from "./src/screens/Recipes/Drink.screen";
import AbdomenScreen from "./src/screens/Exercise/Abdomen.screen";
import ArmScreen from "./src/screens/Exercise/Arm.screen";
import LegScreen from "./src/screens/Exercise/Leg.screen";
import HipScreen from "./src/screens/Exercise/Hip.screen";
import ChestScreen from "./src/screens/Exercise/Chest.screen";
import ShoulderScreen from "./src/screens/Exercise/Shoulder.screen";
import { firebase } from './config';
import Login from './src/screens/Login/Login.screen';
import SignUp from './src/screens/SignUp/Signup.screen';
import { Image } from "react-native";

const LogoTitle = () => {
    return (
        <Image
            style={{ width: 50, height: 50, marginBottom: 10 }}
            source={require("./src/screens/assets/Fitlioo.png")}
        />
    );
};
const Stack = createStackNavigator();
const AuthContext = React.createContext();

export default function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const authContextValue = useMemo(
        () => ({

            signIn: async (email, password) => {
                try {
                    await firebase.auth.signInWithEmailAndPassword(email, password);
                } catch (error) {
                    console.log(error.message);
                }
            },

            signOut: async () => {
                try {
                    await firebase.auth().signOut();
                } catch (error) {
                    console.log(error.message);
                }
            },
        }), []);


    const signOut = () => {

        firebase.auth().signOut().then(() => {
            console.log("Oturum Başarıyla Kapatıldı.");
        }).catch((error) => {
            console.log("Oturum kapatırken hata: ", error);
        })

    }

    return (
        <AuthContext.Provider value={authContextValue}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="/OnboardingScreen">

                    {user ? (
                        <>
                            <Stack.Screen
                                name="BottomTab.nav"
                                children={(props) => <BottomTab {...props} user={user} />}
                                options={{ headerShown: false }}
                            />
                        </>
                    ) : (
                        <Stack.Screen
                            name="OnboardingScreen"
                            component={OnboardingScreen}
                            options={{ headerShown: false }}
                        />
                    )}

                    <Stack.Screen name="Giriş Yap" component={Login} options={{ headerShown: false }} />
                    <Stack.Screen name="Signup" component={SignUp} options={{ headerShown: false }} />
                    <Stack.Screen name="Profil Ayarları" component={ProfileSettingsScreen}
                        options={{ headerTitleAlign: "center", headerTitle: () => <LogoTitle /> }} />
                    <Stack.Screen name="Egzersiz Ayarları" component={ExerciseSettingsScreen}
                        options={{ headerTitleAlign: "center", headerTitle: () => <LogoTitle /> }} />
                    <Stack.Screen name="Genel Ayarlar" component={GeneralSettingsScreen}
                        options={{ headerTitleAlign: "center", headerTitle: () => <LogoTitle /> }} />
                    <Stack.Screen name="Bizi Değerlendirin" component={RateUsScreen}
                        options={{ headerTitleAlign: "center", headerTitle: () => <LogoTitle /> }} />
                    <Stack.Screen name="Geri Bildirim" component={FeedbackScreen}
                        options={{ headerTitleAlign: "center", headerTitle: () => <LogoTitle /> }} />
                    <Stack.Screen name="Recipes" component={RecipesScreen}
                        options={{ headerTitleAlign: "center", headerTitle: () => <LogoTitle /> }} />
                    <Stack.Screen name="Kahvaltı" component={BreakfastScreen}
                        options={{ headerTitleAlign: "center", headerTitle: () => <LogoTitle /> }} />
                    <Stack.Screen name="Sebze Yemekleri" component={VegetableScreen}
                        options={{ headerTitleAlign: "center", headerTitle: () => <LogoTitle /> }} />
                    <Stack.Screen name="Et ve Tavuk Yemekleri" component={MeatChickenScreen}
                        options={{ headerTitleAlign: "center", headerTitle: () => <LogoTitle /> }} />
                    <Stack.Screen name="Tatlılar" component={DessertsScreen}
                        options={{ headerTitleAlign: "center", headerTitle: () => <LogoTitle /> }} />
                    <Stack.Screen name="Atıştırmalıklar" component={SnackScreen}
                        options={{ headerTitleAlign: "center", headerTitle: () => <LogoTitle /> }} />
                    <Stack.Screen name="İçecekler" component={DrinkScreen}
                        options={{ headerTitleAlign: "center", headerTitle: () => <LogoTitle /> }} />
                    <Stack.Screen name="Karın Egzersizleri" component={AbdomenScreen}
                        options={{ headerTitleAlign: "center", headerTitle: () => <LogoTitle /> }} />
                    <Stack.Screen name="Kol Egzersizleri" component={ArmScreen}
                        options={{ headerTitleAlign: "center", headerTitle: () => <LogoTitle /> }} />
                    <Stack.Screen name="Bacak Egzersizleri" component={LegScreen}
                        options={{ headerTitleAlign: "center", headerTitle: () => <LogoTitle /> }} />
                    <Stack.Screen name="Omuz ve Sırt Egzersizleri" component={ShoulderScreen}
                        options={{ headerTitleAlign: "center", headerTitle: () => <LogoTitle /> }} />
                    <Stack.Screen name="Kalça Egzersizleri" component={HipScreen}
                        options={{ headerTitleAlign: "center", headerTitle: () => <LogoTitle /> }} />
                    <Stack.Screen name="Göğüs Egzersizleri" component={ChestScreen}
                        options={{ headerTitleAlign: "center", headerTitle: () => <LogoTitle /> }} />

                </Stack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    );
}

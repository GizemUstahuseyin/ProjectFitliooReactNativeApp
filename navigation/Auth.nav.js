import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingScreen from '../screens/Onboarding/Onboarding.screen';
import LoginScreen from '../screens/Login/Login.screen';
import SignupScreen from '../screens/SignUp/Signup.screen';

const Stack = createStackNavigator();
import { Image } from "react-native";

const LogoTitle = () => {
  return (
    <Image
      style={{ width: 50, height: 50}}
      source={require("../screens/assets/Fitlioo.png")}
    />
  );
};
const AuthNav = () => {
  return(
    <Stack.Navigator screenOptions={{headerShown:true}} initialRouteName="BottomTab.nav">
          <Stack.Screen name="Giriş Yap" component={LoginScreen}/>
          <Stack.Screen name="SignUp" component={SignupScreen}/>
          <Stack.Screen name="Onboarding" component={OnboardingScreen}/>
          <Stack.Screen name="FITLIOO" component={BottomTab} options={{headerTitle: () => <LogoTitle />,headerTitleAlign: "center"}}/>
          <Stack.Screen name="Profil Ayarları" component={ProfileSettingsScreen}/>
          <Stack.Screen name="Egzersiz Ayarları" component={ExerciseSettingsScreen}/>
          <Stack.Screen name="Genel Ayarlar" component={GeneralSettingsScreen}/>
          <Stack.Screen name="Bizi Değerlendirin" component={RateUsScreen}/>
          <Stack.Screen name="Geri Bildirim" component={FeedbackScreen}/>
          <Stack.Screen name="Recipes" component={RecipesScreen}/>
          <Stack.Screen name="Kahvaltı" component={BreakfastScreen}/>
          <Stack.Screen name="Sebze Yemekleri" component={VegetableScreen}/>
          <Stack.Screen name="Et ve Tavuk Yemekleri" component={MeatChickenScreen}/>
          <Stack.Screen name="Tatlılar" component={DessertsScreen}/>
          <Stack.Screen name="Atıştırmalıklar" component={SnackScreen}/>
          <Stack.Screen name="İçecekler" component={DrinkScreen}/>
          <Stack.Screen name="Karın Egzersizleri" component={AbdomenScreen}/>
          <Stack.Screen name="Kol Egzersizleri" component={ArmScreen}/>
          <Stack.Screen name="Bacak Egzersizleri" component={LegScreen}/>
          <Stack.Screen name="Omuz ve Sırt Egzersizleri" component={ShoulderScreen}/>
          <Stack.Screen name="Kalça Egzersizleri" component={HipScreen}/>
          <Stack.Screen name="Göğüs Egzersizleri" component={ChestScreen}/>
    </Stack.Navigator>
  )};


export default AuthNav;
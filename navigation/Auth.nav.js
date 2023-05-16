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
          <Stack.Screen name="Giri� Yap" component={LoginScreen}/>
          <Stack.Screen name="SignUp" component={SignupScreen}/>
          <Stack.Screen name="Onboarding" component={OnboardingScreen}/>
          <Stack.Screen name="FITLIOO" component={BottomTab} options={{headerTitle: () => <LogoTitle />,headerTitleAlign: "center"}}/>
          <Stack.Screen name="Profil Ayarlar�" component={ProfileSettingsScreen}/>
          <Stack.Screen name="Egzersiz Ayarlar�" component={ExerciseSettingsScreen}/>
          <Stack.Screen name="Genel Ayarlar" component={GeneralSettingsScreen}/>
          <Stack.Screen name="Bizi De�erlendirin" component={RateUsScreen}/>
          <Stack.Screen name="Geri Bildirim" component={FeedbackScreen}/>
          <Stack.Screen name="Recipes" component={RecipesScreen}/>
          <Stack.Screen name="Kahvalt�" component={BreakfastScreen}/>
          <Stack.Screen name="Sebze Yemekleri" component={VegetableScreen}/>
          <Stack.Screen name="Et ve Tavuk Yemekleri" component={MeatChickenScreen}/>
          <Stack.Screen name="Tatl�lar" component={DessertsScreen}/>
          <Stack.Screen name="At��t�rmal�klar" component={SnackScreen}/>
          <Stack.Screen name="��ecekler" component={DrinkScreen}/>
          <Stack.Screen name="Kar�n Egzersizleri" component={AbdomenScreen}/>
          <Stack.Screen name="Kol Egzersizleri" component={ArmScreen}/>
          <Stack.Screen name="Bacak Egzersizleri" component={LegScreen}/>
          <Stack.Screen name="Omuz ve S�rt Egzersizleri" component={ShoulderScreen}/>
          <Stack.Screen name="Kal�a Egzersizleri" component={HipScreen}/>
          <Stack.Screen name="G���s Egzersizleri" component={ChestScreen}/>
    </Stack.Navigator>
  )};


export default AuthNav;
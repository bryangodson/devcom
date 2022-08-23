import React, {
    useState,
} from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    NavigationContainer
} from '@react-navigation/native';
import Chat from "./Screens/Chat.js";
import MakePost from "./Screens/MakePost.js";
import Notifications from "./Screens/Noti.js";
import MyStack from "./pages.js";
import Player from "./Screens/Player.js";

import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_400Regular,
} from '@expo-google-fonts/dev';
const Stack = createNativeStackNavigator();

const  App=() =>{
    let [fontsLoaded] = useFonts({
  Poppins_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading/>
  }
  return (
   <NavigationContainer>
    <Stack.Navigator
    initialRouteName="MyStack"
    screenOptions={ {
        headerShown: false
      }}
    >
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="MakePost" component={MakePost} />
       <Stack.Screen name="Player" component={Player}
  
       />
     <Stack.Screen name="MyStack" component={MyStack} />
     
    </Stack.Navigator>
  </NavigationContainer>
  );
}
export default App;